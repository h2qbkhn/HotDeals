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
    [RoutePrefix("api/subCategories")]
    public class SubCategoryController : ApiController
    {
        private readonly ISubCategoryRepository _subCategoryRepository;
        public SubCategoryController() { }
        public SubCategoryController(ISubCategoryRepository subCatRepos)
        {
            this._subCategoryRepository = subCatRepos;
        }

        [Route("{debug?}")]
        [HttpGet]
        [ResponseType(typeof(IList<SubCategory>))]
        public IHttpActionResult GetAllSubCategories(string debug = null)
        {
            List<SubCategoryViewModel> subCategories = this._subCategoryRepository.GetAll()
                .AsQueryable()
                .OrderBy(x => x.Label)
                .ProjectTo<SubCategoryViewModel>()
               .ToList();
            return Ok(subCategories); 
        }
    }
}