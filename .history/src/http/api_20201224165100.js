//封装所有的请求
import http from './index'
export default {

    //1.获取注册数据
    // 请求方式: post
    // 参数:
    // username: 用户名
    // password: 密码
    register({ username, password }) {
        return http.post('/users/register', {
            username, password,
        })
    },
    //2.获取登录数据
    // 请求方式: post
    // 参数:
    // username: 用户名
    // password: 密码
    login({ username, password }) {
        return http.post('/users/login', {
            username, password
        })
    },
    //3.获取首页数据（get）
    getGoodsHome() {
        return http.get('/goods/home')
    },
    //4.获取全部所有商品数据 请求方式: get
    // 参数: 
    // 1.page: 请求页数(必填)
    // 2.size: 请求条数(必填)
    // 3.sort: 排序方式 1为升序 -1为降序
    // 4.priceGt: 价格区间 从多少开始
    // 5.priceLte: 价格区间 到哪结束
    allGoods(page, size, sort, priceGt, priceLte) {
       if(!sort && !priceGt && !priceLte){
        return http.get(`/goods/allGoods?page=${page}&size=${size}`)
       }else if(!priceGt && !priceLte){
        return http.get(`/goods/allGoods?page=${page}&size=${size}&sort=${sort}`)
       }else {
        return http.get(`/goods/allGoods?page=${page}&size=${size}&sort=${sort}&priceGt=${priceGt}&priceLte=${priceLte}`)  
       }
    },
    // 5.获取商品详情数据 请求方式:get
    goodsDetails(){
        
    },


}