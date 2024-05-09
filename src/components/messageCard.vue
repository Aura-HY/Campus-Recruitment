<template>
    
    <div class="cardbody">
        <div class="card" @click="goChat(item.recruitersId,item.nickname,item.userAvatar)" v-for="item in items" :key="item.recruitersId" style="margin-top: 20px">
            <div class="top" style="display: -webkit-flex; display: flex">
                
                <div class="time">{{ item.messageTime }} </div>
            </div>
            <div class="main">
                <div class="avatar"><img :src="item.userAvatar" /></div>
                <div class="side">
                    <div class="name" style="font-weight: bold;">{{ item.nickname}}</div>
                    <div class="content" >{{ item.messageContent }}</div>
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
            items: [],
            userId:localStorage.getItem('userId'),   
        };
    },
    created(){
        this.getMessageMan(this.userId);

    },
    methods: {
        goChat(recruitersId,nickname,userAvatar) {
            this.$router.push({
                name: 'chat',
                params: {
                    recruitersId: recruitersId,
                    nickname: nickname,
                    userAvatar:userAvatar
                }
            });
        },
        async getMessageMan(userId){
            const items = await user.getMessageMan(userId);
            this.items = items;
        }
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
border-radius: 10px;
}
.name {
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: medium;
    color: rgb(26, 26, 27);
}
.main{
    display: flex;
}
.time {
    position: absolute;
    right: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: xx-small;
    opacity: 0.5;
    color: rgb(92, 120, 203);
}

.avatar {
    width: 40px;
    height: 40px;
    margin-top:7px;
}
.avatar img {
    width: 100%; /* 设置图片宽度为容器宽度 */
    height: 100%; /* 设置图片高度为容器高度 */
    object-fit: cover; /* 让图片等比例缩放并填充整个容器 */
    border-radius: 50%;
}
.content{
    margin-left: 20px;
    margin-top: 8px;
    margin-bottom: 5px;
    font-size: x-small;
    color: rgb(82, 82, 85);

}


</style>
