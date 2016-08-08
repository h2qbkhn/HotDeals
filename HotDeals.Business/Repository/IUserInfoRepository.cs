using HotDeals.Business.Infrastructure;
using System;
using System.Collections.Generic;

namespace HotDeals.Business.Repository
{
    public interface IUserInfoRepository: IRepository<Model.UserInfo>
    {
        IEnumerable<Model.UserInfo> GetByIds(Guid[] ids);
    }
}