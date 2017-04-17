<template>
    <div class="whole">
        <div class="title">{{$t('login.title')}}</div>
        <div class="coordinates-icon">
            <div class="coordinates topAct">
                <img src="../../image/coordinates.png" />
            </div>
            <div class="circle-1-1 circle-show-2"></div>
            <div class="circle-2-2 circle-show-1"></div>
            <div class="circle-3-3 circle-show"></div>
        </div>
        <div class="login-form">
            <form action="#">
                <div class="user-name common-div">
                    <span class="eamil-icon common-icon">
                        <img src="../../image/eamil.png" />
                    </span>
                    <input type="email"   placeholder="E-mail address" v-model="userName"/>
                </div>
                <div class="user-pasw common-div">
                    <span class="pasw-icon common-icon">
                        <img src="../../image/password.png" />
                    </span>
                    <input type="password"   placeholder="******"  v-model="passWord" />
                </div>
                <div class="login-btn common-div" @click="login">{{$t("login.login")}}</div>
            </form>
        </div>
        <div class="forgets">
            <router-link to="/findPassWord">{{$t("login.forgetPassword")}}</router-link>
            <router-link to="/register">{{$t("login.regist")}}</router-link>
        </div>
    </div>
</template>
<style>
 @import '../../css/layer.css';
 @import '../../css/login.css';
</style>
<script>
    import {login} from "../../service/getData";
    export default{
         data(){
             return{
                  userName:'',
                  passWord:''
             }
         },
        methods:{
             login(){
                 login(this.userName,this.passWord).then(function (result) {
                     if(result.staus==1){
                         alert(result.desc)
                     }else{
                         alert(result.desc)
                     }
                 });
             }
        }
    }

</script>
