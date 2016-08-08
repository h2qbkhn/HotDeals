using AutoMapper.QueryableExtensions;
using HotDeals.Business.Repository;
using HotDeals.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace HotDeals.Website.Controllers
{
    [RoutePrefix("api/comments")]
    public class CommentController : ApiController
    {
        private readonly ICommentRepository _commentRepository;
        public CommentController() { }
        public CommentController(ICommentRepository commentRepos)
        {
            this._commentRepository = commentRepos;
        }

        [Route("")]
        [HttpGet]
        [ResponseType(typeof(IList<CommentViewModel>))]
        public IHttpActionResult GetAllComments()
        {
            List<CommentViewModel> comments = this._commentRepository.GetAll()
                .AsQueryable()
                .ProjectTo<CommentViewModel>()
               .ToList();
            return Ok(comments);
        }
    }
}
