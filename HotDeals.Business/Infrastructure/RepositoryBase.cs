using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using HotDeals.Data;
using System.Data.Entity; 

namespace HotDeals.Business.Infrastructure
{
    public class RepositoryBase<T> : IRepository<T> where T : class
    {
        public  HotDealsContext hotdealsContext { get; set; }

        public RepositoryBase()
        {

        }

        protected IDbSet<T> DbSet
        {
            get
            {
                return this.hotdealsContext.Set<T>(); 
            }
        }

        public T Add(T entity)
        {
            this.DbSet.Add(entity);
            this.hotdealsContext.SaveChanges();
            return entity; 
        }

        public void Delete(T entity)
        {
            this.DbSet.Remove(entity);
            this.hotdealsContext.SaveChanges(); 
        }

        public void Dispose()
        {
            this.hotdealsContext.Dispose(); 
        }

        public IEnumerable<T> GetAll()
        {
            return this.DbSet.ToList();
        }

        public T GetById(Guid id)
        {
            return this.DbSet.Find(id); 
        }

        public IQueryable<T> Query(Expression<Func<T, bool>> where)
        {
            return this.DbSet.Where(where); 
        }

        public void Update(T entity)
        {
            this.DbSet.Attach(entity);
            this.hotdealsContext.Entry(entity).State = EntityState.Modified;
            this.hotdealsContext.SaveChanges(); 
        }
    }
}
