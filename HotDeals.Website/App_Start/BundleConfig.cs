﻿using System.Web;
using System.Web.Optimization;

namespace HotDeals.Website
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new Bundle("~/bundles/dependencies").Include(
                "~/Scripts/jquery-2.1.4.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js",
                "~/Scripts/lodash.js",
                "~/Scripts/moment.js",
                "~/Scripts/moment-with-locales.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-resource.js",
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                "~/Scripts/angular-ui/ui-utils.js",
                "~/Scripts/ag-grid.js",
                "~/Scripts/angular-breadcrumb.js",
                "~/Scripts/angular-toastr.tpls.js",
                "~/Scripts/adal-1.0.4.js",
                "~/Scripts/adal-angular-1.0.4.js",
                "~/Scripts/loading-bar.js",
                "~/Scripts/bootstrap-datepicker.js",
                "~/Scripts/angucomplete-alt.js",
                "~/Scripts/awesomplete.js",
                "~/Scripts/angular-local-storage.js"
                ));


            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/app/app.js",
                      "~/app/helpers/tools.js",
                      "~/app/helpers/enums/enums.js",
                      "~/app/services/base/baseService.js",
                      "~/app/services/user/userService.js",
                      "~/app/services/deal/dealService.js",
                      "~/app/services/typedeal/typedealService.js",
                      "~/app/services/category/categoryService.js",
                      "~/app/services/sub_category/subCategoryService.js",
                      "~/app/services/apiService.js",
                      "~/app/directives/date-directive.js",
                      "~/app/model/base/base.js",
                      "~/app/model/deal.js",
                      "~/app/model/user.js",
                      "~/app/model/category.js",
                      "~/app/model/subCategory.js",
                      "~/app/model/typeDeal.js",
                      "~/app/controllers/base/base-controller.js",
                      "~/app/controllers/login/login-controller.js",
                      "~/app/controllers/account/account-controller.js",
                      "~/app/controllers/main/main-controller.js",
                      "~/app/controllers/home/home-controller.js",
                      "~/app/controllers/newdeal/newdeal-controller.js",
                      "~/app/controllers/detaildeal/detaildeal-controller.js",
                      "~/app/controllers/user/user-controller.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      //"~/Content/site.css", 
                      "~/admin-lte/css/skins/_all-skins.min.css",
                       "~/admin-lte/css/AdminLTE.min.css"
                      ));
        }
    }
}
