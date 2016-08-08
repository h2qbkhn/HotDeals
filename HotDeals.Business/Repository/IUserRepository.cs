using HotDeals.Business.Infrastructure;
using System;
using System.Collections.Generic;

namespace HotDeals.Business.Repository
{
    public interface IUserRepository: IRepository<Model.User>
    {
        IEnumerable<Model.User> GetByIds(Guid[] ids);
    }
}