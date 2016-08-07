using HotDeals.Model.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace HotDeals.Model
{
    public class Deal : ContentBase
    {
        public string Title { get; set; }
        public decimal Degree { get; set;  }
        public Guid? TypeDealId { get; set; }
        [ForeignKey("TypeDealId")]
        public virtual TypeDeal TypeDeal { get; set;  }
        public Guid? CategoryId {get; set;}
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }
        public Guid? SubCategoryId { get; set; }
        [ForeignKey("SubCategoryId")]
        public virtual SubCategory SubCategory { get; set;  }
        public Guid PosterId { get; set;  }
        [ForeignKey("PosterId")]
        public virtual User Poster { get; set;  }
        public virtual ICollection<Comment> Comments { get; set;  }
        public string LinkTo { get; set;  }
        public string NameSeller { get; set;  }
        public string AddressSeller { get; set;  }
        public string SrcImg { get; set; }
        public decimal Price { get; set; }
        public decimal OldPrice { get; set; }
        public string CodeReduction { get; set; }
        public int IsOnline { get; set;  }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set;  }
        public DateTime CreationDate { get; set;  }
    }
   
}
