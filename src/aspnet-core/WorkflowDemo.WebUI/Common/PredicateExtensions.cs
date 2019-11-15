using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Common
{
    /// <summary>
    /// 谓词表达式构建器
    /// </summary>
    public static class PredicateExtensions
    {
        /// <summary>
        /// 创建一个值恒为 true的表达式
        /// 构造函数使用True时：单个AND有效，多个AND有效；单个OR无效，多个OR无效；混合时写在AND后的OR有效
        /// </summary>
        /// <returns>一个值恒为true的表达式</returns>
        public static Expression<Func<T, bool>> True<T>()
        {
            return f => true;
        }

        /// <summary>
        /// 创建一个值恒为 false 的表达式
        /// 构造函数使用False时：单个AND无效，多个AND无效；单个OR有效，多个OR有效；混合时写在OR后面的AND有效
        /// </summary>
        /// <returns>一个值恒为false的表达式</returns>
        public static Expression<Func<T, bool>> False<T>()
        {
            return f => false;
        }

        /// <summary>
        /// 使用 Expression.OrElse 的方式拼接两个 Expression
        /// </summary>
        /// <param name="left">左边的 Expression</param>
        /// <param name="right">右边的 Expression</param>
        /// <returns>拼接完成的 Expression</returns>
        public static Expression<T> Or<T>(this Expression<T> left, Expression<T> right)
        {
            return MakeBinary(left, right, Expression.OrElse);
        }

        /// <summary>
        /// 使用 Expression.AndAlso 的方式拼接两个 Expression
        /// </summary>
        /// <param name="left">左边的 Expression</param>
        /// <param name="right">右边的 Expression</param>
        /// <returns>拼接完成的 Expression</returns>
        public static Expression<T> And<T>(this Expression<T> left, Expression<T> right)
        {
            return MakeBinary(left, right, Expression.AndAlso);
        }


        /// <summary>
        /// 使用自定义的方式拼接两个 Expression
        /// </summary>
        /// <param name="left">左边的 Expression </param>
        /// <param name="right">右边的 Expression</param>
        /// <param name="func">表达式拼接的具体逻辑</param>
        /// <returns>拼接完成的 Expression</returns>
        private static Expression<T> MakeBinary<T>(this Expression<T> left, Expression<T> right,
            Func<Expression, Expression, Expression> func)
        {
            Debug.Assert(func != null, "func != null");
            return MakeBinary((LambdaExpression)left, right, func) as Expression<T>;
        }

        /// <summary>
        /// 使用 Expression.AndAlso 的方式拼接两个 Expression
        /// </summary>
        /// <param name="left">左边的 Expression</param>
        /// <param name="right">右边的 Expression</param>
        /// <param name="func">表达式拼接的具体逻辑</param>
        /// <returns></returns>
        private static LambdaExpression MakeBinary(this LambdaExpression left, LambdaExpression right,
            Func<Expression, Expression, Expression> func)
        {
            var data = Combinate(right.Parameters, left.Parameters).ToArray();
            right = ParameterReplace.Replace(right, data) as LambdaExpression;
            Debug.Assert(right != null, "right != null");
            return Expression.Lambda(func(left.Body, right.Body), left.Parameters.ToArray());
        }


        private static IEnumerable<KeyValuePair<T, T>> Combinate<T>(IEnumerable<T> left, IEnumerable<T> right)
        {
            var a = left.GetEnumerator();
            var b = right.GetEnumerator();
            while (a.MoveNext() && b.MoveNext())
                yield return new KeyValuePair<T, T>(a.Current, b.Current);
        }
    }

    #region class: ParameterReplace

    internal sealed class ParameterReplace : ExpressionVisitor
    {
        public static Expression Replace(Expression e,
            IEnumerable<KeyValuePair<ParameterExpression, ParameterExpression>> paramList)
        {
            var item = new ParameterReplace(paramList);
            return item.Visit(e);
        }

        private readonly Dictionary<ParameterExpression, ParameterExpression> _parameters;

        public ParameterReplace(IEnumerable<KeyValuePair<ParameterExpression, ParameterExpression>> paramList)
        {
            _parameters = paramList.ToDictionary(p => p.Key, p => p.Value, new ParameterEquality());
        }

        protected override Expression VisitParameter(ParameterExpression p)
        {
            ParameterExpression result;
            if (_parameters.TryGetValue(p, out result))
                return result;
            return base.VisitParameter(p);
        }

        #region class: ParameterEquality

        private class ParameterEquality : IEqualityComparer<ParameterExpression>
        {
            public bool Equals(ParameterExpression x, ParameterExpression y)
            {
                if (x == null || y == null)
                    return false;

                return x.Type == y.Type;
            }

            public int GetHashCode(ParameterExpression obj)
            {
                if (obj == null)
                    return 0;

                return obj.Type.GetHashCode();
            }
        }

        #endregion
    }

    #endregion
}
