using HotDeals.Model.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotDeals.ViewModels
{
    public class CommentViewModel: ContentBase
    {
        public DateTime DatePost { get; set; }
        public string Content { get; set;  }

    }
}
