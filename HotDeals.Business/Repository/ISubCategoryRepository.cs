using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HotDeals.Business.Infrastructure;
using HotDeals.Model;

namespace HotDeals.Business.Repository
{
    public interface ISubCategoryRepository : IRepository<Model.SubCategory>
    {
        IEnumerable<Model.SubCategory> GetByIds(Guid[] ids);
    }
}
