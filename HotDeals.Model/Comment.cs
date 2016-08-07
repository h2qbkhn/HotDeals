using HotDeals.Model.Base;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotDeals.Model
{
    public class Comment : ContentBase
    {
        public DateTime DatePost { get; set; }
        public string Content { get; set;  }
        //public Guid PosterId { get; set; }
        //[ForeignKey("PosterId")]
        //public virtual User Poster { get; set; }
        public Guid DealId { get; set; }
        [ForeignKey("DealId")]
        public virtual Deal Deal { get; set; }

       
    }
}