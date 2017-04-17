/**
 * Created by admin on 2017/4/16.
 */
import {user} from "./tempData/ucenter";

const getPromise = data =>  {
   return new Promise(function (resolve,reject) {
        resolve(data);
    });
}





const login = (name,password)=>{
   return new Promise(function (resolve,reject) {
        getPromise(user).then(function (result) {
          if(result.name == name && result.passWord == password){
              resolve({status:1,desc:'登录成功'})
          }else {
              resolve({status:0,desc:'登录失败!'})
          }
        })
   })
}
export {login}
