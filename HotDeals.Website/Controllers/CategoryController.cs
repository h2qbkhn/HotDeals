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
    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        private readonly ICategoryRepository _categoryRepository;
        public CategoryController() { }
        public CategoryController(ICategoryRepository catRepos)
        {
            this._categoryRepository = catRepos;
        }

        [Route("{debug?}")]
        [HttpGet]
        [ResponseType(typeof(IList<Category>))]
        public IHttpActionResult GetAllCategories(string debug = null)
        {
            List<CategoryViewModel> categories = this._categoryRepository.GetAll()
                .AsQueryable()
                .OrderBy(x => x.Label)
                .ProjectTo<CategoryViewModel>()
               .ToList();
            return Ok(categories);
        }

        
    }
}