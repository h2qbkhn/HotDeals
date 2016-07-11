using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HotDeals.Business.Infrastructure;
using HotDeals.Model;

namespace HotDeals.Business.Repository
{
    public interface ICategoryRepository : IRepository<Model.Category>
    {
        IEnumerable<Model.Category> GetByIds(Guid[] ids);
    }
}
