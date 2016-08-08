using Castle.Windsor;
using Castle.Windsor.Installer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using HotDeals.Data;
using Castle.MicroKernel.Registration;
using HotDeals.Website.Castle;
using HotDeals.Business.Repository; 

namespace HotDeals.Website
{
    public class CastleConfig
    {
        public static void Configure()
        {

            var container = new WindsorContainer();
            container.Install(FromAssembly.This());
            GlobalConfiguration.Configuration.DependencyResolver = new WindsorDependencyResolver(container.Kernel);

            container.Register(Component.For<HotDealsContext>()
                .ImplementedBy<HotDealsContext>().LifestylePerWebRequest());
            container.Register(Component.For<IDealRepository>()
                .ImplementedBy<DealRepository>().LifestylePerWebRequest());
            container.Register(Component.For<ISubCategoryRepository>()
                .ImplementedBy<SubCategoryRepository>().LifestylePerWebRequest());
            container.Register(Component.For<ICategoryRepository>()
                .ImplementedBy<CategoryRepository>().LifestylePerWebRequest());
            container.Register(Component.For<ITypeDealRepository>()
               .ImplementedBy<TypeDealRepository>().LifestylePerWebRequest());
            container.Register(Component.For<ICommentRepository>()
               .ImplementedBy<ICommentRepository>().LifestylePerWebRequest());
            container.Register(Component.For<IUserRepository>()
               .ImplementedBy<UserRepository>().LifestylePerWebRequest());


        }
    }
}
