<template>
    
    <div class="cardbody">
        <div class="card" @click="goChat(item.recruitersId,item.nickename)" v-for="item in items" :key="item.recruitersId" style="margin-top: 20px">
            <div class="top" style="display: -webkit-flex; display: flex">
                
                <div class="salary">{{ item.messageTime }} </div>
            </div>
            <div class="name">
                <div class="avatar"><img :src="item.userAvatar" /></div>
                <div class="side">
                    <div class="title">{{ item.nickname}}</div>
                    <div class="location" >{{ item.messageContent }}</div>
                </div>
                
            </div>
           
            <div class="bottom" style="display: -webkit-flex; display: flex">

        
            </div>
        </div>
    </div>

</template>


<script>
import {useRouter} from 'vue-router'
import user from '../api/user';

// const router = useRouter()

export default {
    props: ['items'],
    data() {
        return {
            //items是个数组
            items: [{
                recruitersId:'123',
                messageTime:'21:00',
                messageType:'',
                userAvatar:'https://ts1.cn.mm.bing.net/th/id/R-C.b1d5ec243ab843e5288250b6c6b9d6b7?rik=rMHR1jTLg5nK9g&riu=http%3a%2f%2fcdn.ahjob.com.cn%2fehr%2fv6%2fimages%2fdef_male2.png%3fr%3d1584284428&ehk=e8O0GWvmpDwarizR5y9s1U6cfXYF2XGyvfwjbM0i%2btE%3d&risl=&pid=ImgRaw&r=0',
                nickname:'二饭姆斯汉堡',
                messageContent:'同学，您好',


            },
            {
                recruitersId:'555',
                messageTime:'21:00',
                messageType:'',
                userAvatar:'https://img.ixintu.com/download/jpg/201912/8b40d5fe24a54284f38b009654a265d4.jpg!con',
                nickname:'一饭杰西五',
                messageContent:'同学，我们还招兼职',


            }
        ],    
        };
    },
    methods: {
        goChat(recruitersId,nickname) {
            this.$router.push({
                name: 'chat',
                params: {
                    recruitersId: recruitersId 
                }
            });
            this.$emit('send-name',nickname)
        },
      
    }
};
</script>

<style scoped>
.cardbody{
    height: 100%;
}
.card{
opacity: 1;
background: rgba(255, 255, 255, 1);
border: 1px solid rgba(229, 229, 229, 1);
margin:4%;
position: relative;
padding:4%;
}
.title {
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: medium;
   ;
    color: rgb(26, 26, 27);
}
.salary {
    position: absolute;
    right: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: small;
   
    color: rgb(0, 0, 0);
}
.subtitle {
    font-size: x-small;
    margin-left: 15px;
    margin-top: 3px;
    padding-right: 5px;
    opacity: 1;
    border-radius: 2px;
    background: rgba(235, 233, 233, 0.773);
    display: inline-block;
    padding-left: 0.5em;
    white-space: nowrap;
}
.name{
    display: flex;

}
.avatar {
    width: 40px;
    height: 40px;
    
}
.avatar img {
    width: 100%; /* 设置图片宽度为容器宽度 */
    height: 100%; /* 设置图片高度为容器高度 */
    object-fit: cover; /* 让图片等比例缩放并填充整个容器 */
    border-radius: 50%;
}
.location{
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: small;
    color: rgb(26, 26, 27);

}


</style>
