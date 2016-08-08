using HotDeals.Model.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotDeals.ViewModels
{
    public class UserInfoViewModel: ContentBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set;  }
        public string Gender { get; set;  }
       
    }
}
