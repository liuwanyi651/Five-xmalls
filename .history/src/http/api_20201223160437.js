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
    login({username,password}){
        return http.post('/users/login',{
            username,password
        })
    },
    //3.获取首页数据（get）
    getGoodsHome() {
        return http.get('/goods/home')
    },



}