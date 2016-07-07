using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HotDeals.Business.Infrastructure;
using HotDeals.Model; 

namespace HotDeals.Business.Repository
{
    interface IDealRepository: IRepository<Model.Deal>
    {
        IEnumerable<Model.Deal> GetByIds(Guid[] ids); 
    }
}
