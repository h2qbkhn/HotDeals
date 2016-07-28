using HotDeals.Model.Base;
using System;
using System.Collections.Generic;

namespace HotDeals.Model
{
    public class Category: ContentBase
    {
        public string Label { get; set;  }
        public virtual ICollection<SubCategory> SubCategories { get; set; }
    }
}