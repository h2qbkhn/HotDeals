﻿using System;
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
            Database.SetInitializer<HotDealsContext>(new HotDealsDbInitializer());
            //Database.SetInitializer<HotDealsContext>(null);
        }
        public DbSet<Deal> Deals { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<TypeDeal> TypeDeals { get; set; }
    }


    public class HotDealsDbInitializer : DropCreateDatabaseIfModelChanges<HotDealsContext>
    {
        protected override void Seed(HotDealsContext context)
        {
            var demoCategory1 = new Category() { Label = "Services" };
            var demoCategory2 = new Category() { Label = "Mode" };
            var demoCategory3 = new Category() { Label = "Maison" };

            var demoSubCategory1 = new SubCategory() { Label = "Voyages" };
            var demoSubCategory2 = new SubCategory() { Label = "Presse" };
            var demoSubCategory3 = new SubCategory() { Label = "Informatique" };
            var demoSubCategory4 = new SubCategory() { Label = "Others" };

            demoCategory1.SubCategories = new List<SubCategory>(); 
            demoCategory1.SubCategories.Add(demoSubCategory1);

            demoCategory2.SubCategories = new List<SubCategory>();
            demoCategory2.SubCategories.Add(demoSubCategory2);
            demoCategory2.SubCategories.Add(demoSubCategory3);

            demoCategory3.SubCategories = new List<SubCategory>();
            demoCategory3.SubCategories.Add(demoSubCategory4);

            var categories = new List<Category>();
            categories.Add(demoCategory1); 
            categories.Add(demoCategory2); 
            categories.Add(demoCategory3);
            categories.ForEach(cat => context.Categories.Add(cat));

            var subCategories = new List<SubCategory>();
            subCategories.Add(demoSubCategory1);
            subCategories.Add(demoSubCategory2);
            subCategories.Add(demoSubCategory3);
            subCategories.ForEach(cat => context.SubCategories.Add(cat));

            #region typedeal
            var demoTypeDeal1 = new TypeDeal() { Label = "Free" };
            var demoTypeDeal2 = new TypeDeal() { Label = "Bon plan" };
            var demoTypeDeal3 = new TypeDeal() { Label = "Code promo" };
            var typeDeals = new List<TypeDeal>();
            typeDeals.Add(demoTypeDeal1);
            typeDeals.Add(demoTypeDeal2);
            typeDeals.Add(demoTypeDeal3);
            typeDeals.ForEach(type => context.TypeDeals.Add(type));
            #endregion

            var demoDeal = new Deal() { Category = demoCategory1, SubCategory = demoSubCategory1, TypeDeal = demoTypeDeal1,
                StartDate = new DateTime(2015, 7, 15),
                EndDate = new DateTime(2015, 12, 31),
                CreationDate = new DateTime(2015, 12, 31)
            };
            context.Deals.Add(demoDeal); 
            context.SaveChanges(); 

            base.Seed(context);
        }
    }
}