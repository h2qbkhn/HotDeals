using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Newtonsoft.Json;
using Castle.Windsor;
using Newtonsoft.Json.Serialization;
using HotDeals.Model;
using HotDeals.ViewModels; 
using AutoMapper;

namespace HotDeals.Website
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            CastleConfig.Configure();

            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.OfType<JsonMediaTypeFormatter>().First();
            JsonSerializerSettings settingJson = jsonFormatter.SerializerSettings;
            settingJson.ContractResolver = new CamelCasePropertyNamesContractResolver();

            this.ConfigureMapping();
        }

        private void ConfigureMapping()
        {
           Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Deal, DealViewModel>()
                .ForMember(x => x.Title, a => a.MapFrom(y => y.Title))
                .ForMember(x => x.CategoryId, a => a.MapFrom(y => y.Category != null ? y.Category.Id: Guid.Empty))
                .ForMember(x => x.SubCategoryId, a => a.MapFrom(y => y.SubCategory != null ? y.SubCategory.Id: Guid.Empty))
                .ForMember(x => x.TypeDealId, a => a.MapFrom(y => y.TypeDeal != null ?  y.TypeDeal.Id: Guid.Empty));

                cfg.CreateMap<DealViewModel, Deal>()
                .ForMember(x => x.Title, a => a.MapFrom(y => y.Title))
                .ForMember(x => x.Category, a => a.Ignore())
                .ForMember(x => x.CategoryId, a => a.MapFrom(y => y.CategoryId))
                .ForMember(x => x.SubCategory, a => a.Ignore())
                .ForMember(x => x.SubCategoryId, a => a.MapFrom(y => y.SubCategoryId))
                .ForMember(x => x.TypeDeal, a => a.Ignore())
                .ForMember(x => x.TypeDealId, a => a.MapFrom(y => y.TypeDealId));

                cfg.CreateMap<SubCategory, SubCategoryViewModel>()
                .ForMember(x => x.Label, a => a.MapFrom(y => y.Label));

                cfg.CreateMap<SubCategoryViewModel, SubCategory>()
                .ForMember(x => x.Label, a => a.MapFrom(y => y.Label));

                cfg.CreateMap<Category, CategoryViewModel>()
                .ForMember(x => x.Label, a => a.MapFrom(y => y.Label));

                cfg.CreateMap<CategoryViewModel, Category>()
                .ForMember(x => x.Label, a => a.MapFrom(y => y.Label));

                cfg.CreateMap<TypeDeal, TypeDealViewModel>()
                .ForMember(x => x.Label, a => a.MapFrom(y => y.Label));

                cfg.CreateMap<TypeDealViewModel, TypeDeal>()
                .ForMember(x => x.Label, a => a.MapFrom(y => y.Label));

                cfg.CreateMap<Comment, CommentViewModel>()
                .ForMember(x => x.Content, a => a.MapFrom(y => y.Content));

                cfg.CreateMap<CommentViewModel, Comment>()
                .ForMember(x => x.Content, a => a.MapFrom(y => y.Content));

                cfg.CreateMap<UserInfo, UserInfoViewModel>()
                .ForMember(x => x.FirstName, a => a.MapFrom(y => y.FirstName));

                cfg.CreateMap<UserInfoViewModel, UserInfo>()
                .ForMember(x => x.FirstName, a => a.MapFrom(y => y.FirstName));

            }); 
        }
    }
}
