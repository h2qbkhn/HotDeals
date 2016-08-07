using AutoMapper;
using AutoMapper.QueryableExtensions;
using HotDeals.Business.Repository;
using HotDeals.Model;
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
    [RoutePrefix("api/users")]
    public class UserController: ApiController
    {
        private readonly IUserRepository _userRepository;
        public UserController() { }
        public UserController(IUserRepository userRepos)
        {
            this._userRepository = userRepos;
        }

        [Route("")]
        [HttpGet]
        [ResponseType(typeof(IList<UserViewModel>))]
        public IHttpActionResult GetAllUsers()
        {
            List<UserViewModel> users = this._userRepository.GetAll()
                .AsQueryable()
                .ProjectTo<UserViewModel>()
               .ToList();
            return Ok(users);
        }

        [Route("{userId?}")]
        [HttpGet]
        [ResponseType(typeof(UserViewModel))]
        public IHttpActionResult getUserById(string userId)
        {
            if (userId == null)
            {
                BadRequest("userId is null");
            }
            Guid guidId;
            Guid.TryParse(userId, out guidId);
            if (guidId == Guid.Empty)
            {
                BadRequest("CategoryId is not valid");
            }
            User user = this._userRepository.GetById(guidId);
            UserViewModel userVm = Mapper.Map<User, UserViewModel>(user); 
;           return Ok(userVm);
        }

    }
}
