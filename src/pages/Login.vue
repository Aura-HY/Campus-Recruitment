<template>
    <div class="body" >
        <div class="aa">
            <h1 style="margin-top: 37%;margin-left: 5%;">Login To Your Account</h1>
            <div class="id">
                <var-input style="width:92%;height: 100%; background-color:rgba(2, 0, 0, 0.03);" variant="outlined" placeholder="id" v-model="userLogin.userId">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="account-circle-outline" />
                </template>
                </var-input>
                <var-input style="width:92%;margin-top: 20px;background-color:rgba(2, 0, 0, 0.03);" variant="outlined" placeholder="password" v-model="userLogin.password">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
        </div>
        <div class="login">
            <var-button @click="gotoHome" style="width:94%;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">Login</var-button>
            <var-button @click="gotoRegister" style="width:94%;margin-top: 20px;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">Register</var-button>
        </div>
        </div>
    </div>
</template>

<script>
import { Snackbar } from '@varlet/ui'
import user from '../api/user'
export default {
    data(){
        return{
            userLogin:{
                userId:"",
                password:""
            },
            result:false
        }
    },
    methods:{
        async gotoHome(){
            const password1 = await user.getUserPassword(this.userLogin.userId);
            if(this.userLogin.password === password1[0].password){
                this.result = true;
                Snackbar.success('登录成功');
                localStorage.setItem('userId',this.userLogin.userId);
                this.$router.push({name:'home'});
            }
            if(this.userLogin.userId === '' || this.userLogin.password === '' || this.result === false){
                console.log(this.result);
                Snackbar.error('登录失败,请检查id和密码');
            }
            
        },
        gotoRegister(){
            this.$router.push({
                name:'Register'
            });
        }
    }
}
</script>

<style name="login">

.id{
    margin-top: 10%;
    margin-left:5%;
}
.login{
    margin-top: 10%;
    margin-left:3%;
}
</style>