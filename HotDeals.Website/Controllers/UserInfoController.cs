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
    [RoutePrefix("api/userinfos")]
    public class UserInfoController: ApiController
    {
        private readonly IUserInfoRepository _userRepository;
        public UserInfoController() { }
        public UserInfoController(IUserInfoRepository userRepos)
        {
            this._userRepository = userRepos;
        }

        [Route("")]
        [HttpGet]
        [ResponseType(typeof(IList<UserInfoViewModel>))]
        public IHttpActionResult GetAllUsers()
        {
            List<UserInfoViewModel> users = this._userRepository.GetAll()
                .AsQueryable()
                .ProjectTo<UserInfoViewModel>()
               .ToList();
            return Ok(users);
        }

        [Route("{userId?}")]
        [HttpGet]
        [ResponseType(typeof(UserInfoViewModel))]
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
            UserInfo user = this._userRepository.GetById(guidId);
            UserInfoViewModel userVm = Mapper.Map<UserInfo, UserInfoViewModel>(user); 
;           return Ok(userVm);
        }

    }
}
