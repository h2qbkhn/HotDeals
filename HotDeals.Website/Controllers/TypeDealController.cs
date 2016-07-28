using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using HotDeals.Business.Repository;
using HotDeals.Model;
using HotDeals.ViewModels;
using System.Web.Http.Description;
using AutoMapper.QueryableExtensions;

namespace HotDeals.Website.Controllers
{
    [RoutePrefix("api/typedeals")]
    public class TypeDealController : ApiController
    {
        private readonly ITypeDealRepository _typeDealRepository;
        public TypeDealController() { }
        public TypeDealController(ITypeDealRepository typeDealRepository)
        {
            this._typeDealRepository = typeDealRepository;
        }

        [Route("{debug?}")]
        [HttpGet]
        [ResponseType(typeof(IList<TypeDeal>))]
        public IHttpActionResult GetAllTypeDeals(string debug = null)
        {
            List<TypeDealViewModel> typeDeals = this._typeDealRepository.GetAll()
                .AsQueryable()
                .OrderBy(x => x.Label)
                .ProjectTo<TypeDealViewModel>()
               .ToList();
            return Ok(typeDeals);
        }       
    }
}