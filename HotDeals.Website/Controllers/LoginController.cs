using System;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using HotDeals.Website.Models;
using System.Web.Http;
using System.Net.Http;
using System.Threading;
using System.Net;

namespace HotDeals.Website.Controllers
{
    [Authorize]
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        [HttpGet]
        public IHttpActionResult ExternalLogin()
        {
            return new ChallengeResult("Google","api/home", this.Request);
        }
       
    }

    public class ChallengeResult : IHttpActionResult
    {
        private const string XsrfKey = "XsrfId";

        public ChallengeResult(string provider, string redirectUri, HttpRequestMessage request) :
            this(provider, redirectUri, null, request)
        {
        }

        public ChallengeResult(string provider, string redirectUri, string userId, HttpRequestMessage request)
        {
            AuthenticationProvider = provider;
            RedirectUri = redirectUri;
            UserId = userId;
            MessageRequest = request;
        }

        public string AuthenticationProvider { get; private set; }

        public string RedirectUri { get; private set; }

        public string UserId { get; private set; }

        public HttpRequestMessage MessageRequest { get; private set; }

        public Task ExecuteAsync(CancellationToken cancellationToken)
        {
            var properties = new AuthenticationProperties() { RedirectUri = this.RedirectUri };
            if (UserId != null)
            {
                properties.Dictionary[XsrfKey] = UserId;
            }

            MessageRequest.GetOwinContext().Authentication.Challenge(properties, AuthenticationProvider);

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            response.RequestMessage = MessageRequest;

            return Task.FromResult(response);
        }
    }
}