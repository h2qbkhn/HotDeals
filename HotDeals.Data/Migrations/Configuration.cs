namespace HotDeals.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Collections.Generic; 
    using System.Data.Entity.Migrations;
    using System.Linq;
    using HotDeals.Model; 

    internal sealed class Configuration : DbMigrationsConfiguration<HotDeals.Data.HotDealsContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "HotDeals.Data.HotDealsContext";
        }

        protected override void Seed(HotDeals.Data.HotDealsContext context)
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
            var demoTypeDeal1 = new TypeDeal() { Value = 3, Label = "Free" };
            var demoTypeDeal2 = new TypeDeal() { Value = 1, Label = "Bon plan" };
            var demoTypeDeal3 = new TypeDeal() { Value = 2, Label = "Code promo" };
            var typeDeals = new List<TypeDeal>();
            typeDeals.Add(demoTypeDeal1);
            typeDeals.Add(demoTypeDeal2);
            typeDeals.Add(demoTypeDeal3);
            typeDeals.ForEach(type => context.TypeDeals.Add(type));
            #endregion

            var demoDeal1 = new Deal()
            {
                Title = "Demo 1",
                Degree = 100,
                Description = "Third party compilation tools may work with Bootstrap, but they are not supported by our core team",
                Price = 100,
                OldPrice = 80,
                IsOnline = 1,
                Category = demoCategory1,
                SubCategory = demoSubCategory1,
                TypeDeal = demoTypeDeal1,
                StartDate = new DateTime(2015, 7, 15),
                EndDate = new DateTime(2015, 12, 31),
                CreationDate = new DateTime(2015, 12, 31)
            };
            var demoDeal2 = new Deal()
            {
                Title = "Demo 2",
                Degree = 80,
                Description = "Third party compilation tools may work with Bootstrap, but they are not supported by our core team",
                Price = 100,
                OldPrice = 80,
                IsOnline = 1,
                Category = demoCategory2,
                SubCategory = demoSubCategory2,
                TypeDeal = demoTypeDeal2,
                StartDate = new DateTime(2015, 7, 15),
                EndDate = new DateTime(2015, 12, 31),
                CreationDate = new DateTime(2015, 12, 31)
            };

            var user1 = new User()
            {
                FirstName = "Hong Quan",
                LastName = "HO"
            };
            user1.Deals = new List<Deal>();
            user1.Comments = new List<Comment>();
            var comment1 = new Comment()
            {
                DatePost = new DateTime(2016, 07, 08),
                Content = "This deal is good"
            };
            user1.Comments.Add(comment1);

            var demoDeal3 = new Deal()
            {
                Title = "Demo title",
                Degree = 50,
                Description = "Third party compilation tools may work with Bootstrap, but they are not supported by our core team",
                Price = 100,
                OldPrice = 80,
                IsOnline = 1,
                Category = demoCategory2,
                SubCategory = demoSubCategory3,
                TypeDeal = demoTypeDeal3,
                StartDate = new DateTime(2015, 7, 15),
                EndDate = new DateTime(2015, 12, 31),
                CreationDate = new DateTime(2015, 12, 31)
            };
            demoDeal3.Comments = new List<Comment>();
            demoDeal3.Comments.Add(comment1);
            user1.Deals.Add(demoDeal3);

            context.Users.Add(user1);
            context.Comments.Add(comment1);

            context.Deals.Add(demoDeal1);
            context.Deals.Add(demoDeal2);
            context.Deals.Add(demoDeal3);
            context.SaveChanges();

        }
    }
}
