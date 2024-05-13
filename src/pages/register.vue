<template>
    <var-app-bar :title='title' fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" @click="goBack" round text>
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>
    </var-app-bar>
            <h1 style="margin-top: 30%;margin-left: 5%;">Register To Your Account</h1>
            <div class="id">
                <var-input style="width:92%; background-color:rgba(2, 0, 0, 0.03);" variant="outlined" placeholder="id" v-model="userRegister.userId">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="account-circle-outline" />
                </template>
                </var-input>
                <var-input style="width:92%;margin-top: 20px;background-color:rgba(2, 0, 0, 0.03);" variant="outlined" placeholder="password" v-model="userRegister.password">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
                <var-input style="width:92%;margin-top: 20px;background-color:rgba(2, 0, 0, 0.03);" variant="outlined" placeholder="phone-number" v-model="userRegister.phoneNumber">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
                <var-input style="width:92%;margin-top: 20px;background-color:rgba(2, 0, 0, 0.03);" variant="outlined" placeholder="mailbox" v-model="userRegister.mailbox">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
                <var-input style="width:92%;margin-top: 20px;background-color:rgba(2, 0, 0, 0.03);" variant="outlined" placeholder="nickname" v-model="userRegister.nickname">
                <template #prepend-icon>
                    <var-icon class="prepend-icon" name="lock-outline" />
                </template>
                </var-input>
                    <var-select style="width:92%;margin-top: 20px;background-color:rgba(2, 0, 0, 0.03);" variant="outlined" placeholder="identity" v-model="userIdentity.identity">
                        <var-option v-for="identity in userIdentity" :key="identity.identityParam" :label=identity.identity @click="identityFunction(identity.identityParam)"/>
                    </var-select>
        </div>
        <div class="verificationCode">
            <var-button style="width:95%;" @click="gotoCompareCaptcha" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">Get A Verification Code</var-button>
        </div>
</template>

<script>
import { Snackbar } from '@varlet/ui';
import user from '../api/user';
import { useRouter } from 'vue-router';
export default {
    data(){
        return{
            router:useRouter(),
            userRegister:{
                userId:'',
                password:'',
                phoneNumber:'',
                mailbox:'',
                nickname:'',
                identity:''
            },
            userIdentity:[{
                identityParam:'1',
                identity:'招聘人'
            },
            {
                identityParam:'2',
                identity:'求职者'
            }]
        }
    },
    methods:{
        async gotoCompareCaptcha(){
            if(this.userRegister.userId === '' || this.userRegister.password === '' || this.userRegister.phoneNumber === '' || this.userRegister.mailbox === '' || this.userRegister.nickname === '' || this.userRegister.identity === '' ){
                Snackbar.error('注册失败');
            }else{
                Snackbar.success('注册成功');
                user.addUser(this.userRegister.userId,this.userRegister.password,this.userRegister.phoneNumber,this.userRegister.mailbox,this.userRegister.nickname,this.userRegister.identity)
                this.$router.push({name:'compareCode'})
            }
            
        },
        identityFunction(identityParam){
            this.userRegister.identity = identityParam;
        },
        goBack() {
            this.router.go(-1);
        }
    }
}
</script>

<style name="Register" scoped>

.id{
    margin-top: 10%;
    margin-left:5%;
}
.verificationCode{
    /* position: absolute;
    top: 70%;
    left: 19%;
    transform: translate(-50%, -50%); */
    margin-top: 10%;
    margin-left:3%;
}
</style>