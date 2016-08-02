namespace HotDeals.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Label = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.SubCategories",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Label = c.String(),
                        CategoryId = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.CategoryId)
                .Index(t => t.CategoryId);
            
            CreateTable(
                "dbo.Deals",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Title = c.String(),
                        Degree = c.Decimal(nullable: false, precision: 18, scale: 2),
                        TypeDealId = c.Guid(),
                        CategoryId = c.Guid(),
                        SubCategoryId = c.Guid(),
                        LinkTo = c.String(),
                        NameSeller = c.String(),
                        AddressSeller = c.String(),
                        SrcImg = c.String(),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        OldPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        CodeReduction = c.String(),
                        IsOnline = c.Int(nullable: false),
                        Description = c.String(),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(nullable: false),
                        CreationDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.CategoryId)
                .ForeignKey("dbo.SubCategories", t => t.SubCategoryId)
                .ForeignKey("dbo.TypeDeals", t => t.TypeDealId)
                .Index(t => t.TypeDealId)
                .Index(t => t.CategoryId)
                .Index(t => t.SubCategoryId);
            
            CreateTable(
                "dbo.TypeDeals",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Value = c.Int(nullable: false),
                        Label = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Deals", "TypeDealId", "dbo.TypeDeals");
            DropForeignKey("dbo.Deals", "SubCategoryId", "dbo.SubCategories");
            DropForeignKey("dbo.Deals", "CategoryId", "dbo.Categories");
            DropForeignKey("dbo.SubCategories", "CategoryId", "dbo.Categories");
            DropIndex("dbo.Deals", new[] { "SubCategoryId" });
            DropIndex("dbo.Deals", new[] { "CategoryId" });
            DropIndex("dbo.Deals", new[] { "TypeDealId" });
            DropIndex("dbo.SubCategories", new[] { "CategoryId" });
            DropTable("dbo.TypeDeals");
            DropTable("dbo.Deals");
            DropTable("dbo.SubCategories");
            DropTable("dbo.Categories");
        }
    }
}
