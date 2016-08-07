using HotDeals.Business.Infrastructure;
using HotDeals.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotDeals.Business.Repository
{
    public class UserRepository : RepositoryBase<Model.User>, IUserRepository
    {
        public IEnumerable<User> GetByIds(Guid[] ids)
        {
            return this.DbSet.Where(x => ids.Contains(x.Id)).ToList();
        }
    }
}
