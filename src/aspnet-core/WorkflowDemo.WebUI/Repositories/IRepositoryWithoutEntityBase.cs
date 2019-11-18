using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WorkflowDemo.WebUI.Entities;

namespace WorkflowDemo.WebUI.Repositories
{
    public partial interface IRepositoryWithoutEntityBase<TEntity> where TEntity:EntityBase1
    {
        TEntity GetById(object id);

        void Insert(TEntity entity);

        void Insert(IEnumerable<TEntity> entities);

        void BulkInsert(IList<TEntity> entities);

        void Update(TEntity entity);

        void Update(IEnumerable<TEntity> entities);

        void Delete(TEntity entity);

        void Delete(IEnumerable<TEntity> entities);

        IQueryable<TEntity> Table { get; }

        IQueryable<TEntity> TableNoTracking { get; }

        DbSet<TEntity> Entities { get; }

        WorkflowDemoContext Context { get; }
    }
}
