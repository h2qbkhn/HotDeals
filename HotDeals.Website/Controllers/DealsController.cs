using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Http;
using HotDeals.Business.Repository;
using HotDeals.Model;
using HotDeals.ViewModels;
using System.Web.Http.Description;
using AutoMapper.QueryableExtensions;
using AutoMapper;
using System;
using System.Web.Mvc;

namespace HotDeals.Website.Controllers
{
    [RequireHttps]
    [System.Web.Http.RoutePrefix("api/deals")]
    public class DealsController : ApiController
    {
        private readonly IDealRepository _dealRepository;

        public DealsController() { }
        public DealsController(IDealRepository dealRepository)
        {
            this._dealRepository = dealRepository;
        }
        [System.Web.Http.Route("")]
        [System.Web.Http.HttpGet]
        [ResponseType(typeof(IList<Deal>))]
        public IHttpActionResult GetAllDeals()
        {
           List<DealViewModel>  deals = this._dealRepository.GetAll().AsQueryable().OrderBy(d => d.Title)
                .ProjectTo<DealViewModel>()
                .ToList();
            return Ok(deals);
        }

        [System.Web.Http.Route("")]
        [System.Web.Http.HttpPost]
        [ResponseType(typeof(DealViewModel))]
        public IHttpActionResult Post(DealViewModel dealVm)
        {
            Deal deal = Mapper.Map<DealViewModel, Deal>(dealVm);
            this._dealRepository.Add(deal); 
            return Ok("a deal is added");
        }   
        
        [System.Web.Http.Route("search/{typeDealId?}/{isHot?}/{maxNumber?}")] 
        [System.Web.Http.HttpGet]
        [ResponseType(typeof(IList<Deal>))]
        public IHttpActionResult GetDealsByTypeDealId(string typeDealId, int isHot = 1, int maxNumber = 10)
        {
            if (typeDealId == null)
            {
                BadRequest("CategoryId is null");
            }
            Guid guidTypeDealId;
            Guid.TryParse(typeDealId, out guidTypeDealId);
            if (guidTypeDealId == Guid.Empty)
            {
                BadRequest("CategoryId is not valid");
            }
            List<DealViewModel> hotdeals = this._dealRepository
                .Query(x => x.TypeDeal.Id.ToString() == typeDealId)
                .OrderByDescending(d => d.Degree)    
                .Take(maxNumber)    
               .ProjectTo<DealViewModel>()
               .ToList();
            return Ok(hotdeals);
        }
    }
}
