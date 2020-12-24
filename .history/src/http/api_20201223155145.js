//封装所有的请求
import http from './index'
export default {
    
    //1.获取注册数据
    
    //2.获取登录数据
    //3.获取首页数据（get）
    getGoodsHome(){
        return http.get('/goods/home')
    },
    
    
    
}