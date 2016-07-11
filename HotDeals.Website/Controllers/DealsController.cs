using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Http;
using HotDeals.Business.Repository;
using HotDeals.Model;
using HotDeals.ViewModels;
using System.Web.Http.Description;
using AutoMapper.QueryableExtensions;

namespace HotDeals.Website.Controllers
{
    [RoutePrefix("api/deals")]
    public class DealsController : ApiController
    {
        private readonly IDealRepository _dealRepository;

        public DealsController() { }
        public DealsController(IDealRepository dealRepository)
        {
            this._dealRepository = dealRepository;
        }
        [Route("{debug?}")]
        [HttpGet]
        [ResponseType(typeof(IList<Deal>))]
        public IHttpActionResult GetAllDeals(string debug = null)
        {
           List<DealViewModel>  deals = this._dealRepository.GetAll().AsQueryable().OrderBy(d => d.Title)
                .ProjectTo<DealViewModel>()
                .ToList();
            return Ok(deals);
        }


    }
}
