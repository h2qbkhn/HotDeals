using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HotDeals.Business.Infrastructure;
using HotDeals.Model;

namespace HotDeals.Business.Repository
{
    public class DealRepository : RepositoryBase<Model.Deal>, IDealRepository
    {
        public IEnumerable<Deal> GetByIds(Guid[] ids)
        {
            return this.DbSet.Where(x => ids.Contains(x.Id)).ToList(); 
        }
    }
}
