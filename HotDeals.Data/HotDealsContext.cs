using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using HotDeals.Model; 

namespace HotDeals.Data
{
    public class HotDealsContext: DbContext
    {
        public HotDealsContext(): base("name=HotDealsConnectionString")
        {
            //Database.SetInitializer<HotDealsContext>(new HotDealsDbInitializer());
            Database.SetInitializer<HotDealsContext>(null);
        }
        public DbSet<Deal> Deals { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<TypeDeal> TypeDeals { get; set; }
    }


    public class HotDealsDbInitializer : CreateDatabaseIfNotExists<HotDealsContext>
    {
        protected override void Seed(HotDealsContext context)
        {
            var demoCategory = new Category() { Label = "Services" };
            var demoSubCategory = new SubCategory() { Label = "Voyages" };
            var demoTypeDeal = new TypeDeal() { Label = "Free" };

            var categories = new List<Category>();
            categories.Add(demoCategory); 
            categories.Add(new Category() { Label = "Mode" }); 
            categories.Add(new Category() { Label = "Maison" });
            categories.ForEach(cat => context.Categories.Add(cat));

            var subCategories = new List<SubCategory>();
            subCategories.Add(new SubCategory() { Label = "Presse" });
            subCategories.Add(demoSubCategory);
            subCategories.Add(new SubCategory() { Label = "Others" });
            subCategories.ForEach(cat => context.SubCategories.Add(cat));

            var typeDeals = new List<TypeDeal>();
            typeDeals.Add(new TypeDeal() { Label = "Bon plan" });
            typeDeals.Add(new TypeDeal() { Label = "Code promo" });
            typeDeals.Add(demoTypeDeal);
            typeDeals.ForEach(type => context.TypeDeals.Add(type));

            var demoDeal = new Deal() { Category = demoCategory, SubCategory = demoSubCategory, TypeDeal = demoTypeDeal,
                StartDate = new DateTime(2015, 7, 15),
                EndDate = new DateTime(2015, 12, 31)
            };
            context.Deals.Add(demoDeal); 
            context.SaveChanges(); 

            base.Seed(context);
        }
    }
}
