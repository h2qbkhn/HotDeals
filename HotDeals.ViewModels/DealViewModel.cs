using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HotDeals.Model.Base;

namespace HotDeals.ViewModels
{
    public class DealViewModel : ContentBase
    {
        public string Title { get; set; }
        public Guid TypeDealId { get; set; }
        public Guid CategoryId { get; set; }
        public Guid SubCategoryId { get; set; }
        public string LinkTo { get; set; }
        public string NameSeller { get; set; }
        public string AddressSeller { get; set; }
        public string SrcImg { get; set; }
        public decimal Price { get; set; }
        public decimal OldPrice { get; set; }
        public string CodeReduction { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime CreationDate { get; set; }
        public int IsOnline { get; set;  }
    }
}
