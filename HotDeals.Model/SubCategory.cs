using HotDeals.Model.Base;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotDeals.Model
{
    public class SubCategory: ContentBase
    {
        public string Label { get; set;  }
        public Guid? CategoryId { get; set;  }
        [ForeignKey("CategoryId")]

        public virtual Category Category { get; set;  }
    }
}