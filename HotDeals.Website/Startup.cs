using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HotDeals.Website.Startup))]
namespace HotDeals.Website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
