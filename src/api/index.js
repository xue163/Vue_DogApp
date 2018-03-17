import ajax from './ajax'
/*
 * 轮播图
 */
export const reqMsite = () => ajax('/msite')
/*
 * 分类
 */
export const reqfenlei = () => ajax('/class')
/*
 *推荐品牌
 */
export const reqbrand = () => ajax('/brand')


