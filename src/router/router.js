/**
 * Created by admin on 2017/4/13.
 */
import  App from "../App"
import  login from '../page/ucenter/login'
import  game from '../page/game/game'
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/ucenter'
        },
        {//首页城市列表页
            path: '/ucenter',
            component: login
        },{//游戏
            path: '/game',
            component: game
        }
        ]
}]