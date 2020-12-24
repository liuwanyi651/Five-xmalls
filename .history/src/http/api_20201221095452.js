//封装所有的请求
import http from './index'
export default {
    //对象的属性就是请求的方法名
    login({uesrname,password}){
        return http.post('/login',{
            username,
            password
        })
    },
    //1.获取首页数据（get）
    getRecommend(){
        return http.get('/goods/recommend')
    },
   
    
    
}