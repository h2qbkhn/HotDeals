using HotDeals.Model.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotDeals.Model
{
    public class UserInfo: ContentBase
    {
        public string Gender { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set;}
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Deal> Deals { get; set;  }
        
    }
}
