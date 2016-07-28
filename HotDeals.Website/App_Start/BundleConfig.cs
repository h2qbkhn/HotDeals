using System.Web;
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
                "~/Scripts/awesomplete.js"
                ));


            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/app/app.js",
                      "~/app/helpers/tools.js",
                      "~/app/services/base/baseService.js",
                      "~/app/services/deal/dealService.js",
                      "~/app/services/category/categoryService.js",
                      "~/app/services/sub_category/subCategoryService.js",
                      "~/app/services/apiService.js",
                      "~/app/controllers/main/main-controller.js",
                      "~/app/controllers/home/home-controller.js",
                      "~/app/controllers/newdeal/newdeal-controller.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
