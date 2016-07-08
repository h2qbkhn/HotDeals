using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using HotDeals.Business.Repository;
using HotDeals.Model;
using System.Web.Http.Description;

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
        public IHttpActionResult GetAllDeals(string debug= null)
        {
            List<Deal> deals;
            deals =_dealRepository.GetAll().AsQueryable().OrderBy(d=>d.Title).ToList(); 
            return Ok(deals); 
        }


    }
}
