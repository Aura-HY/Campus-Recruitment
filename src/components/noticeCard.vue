<template>
    <div class="cardbody">
        <div class="card" v-for="item in items" :key="item.Id" style="margin-top: 20px">
            <div class="top" style="display: -webkit-flex; display: flex">
                <div class="title">{{ item.title}}</div>
                <div class="time">{{ item.time }}</div>
            </div>

            <div class="subtitle">
                <div class="content">{{ item.content }}</div>
        </div>
    </div>
    </div>
</template>

<script>
import user from "../api/user"
export default {
    data() {
        return {
            items: [],
            
        };
    },
    created(){
        this.getNotice();
    },
    methods:{
        async getNotice(){
            const items = await user.getNotice();
            this.items = items;
        }
    }
}
</script>

<style scoped>
.cardbody{
    height: 100%;
}
.card{
opacity: 1;
background: rgba(255, 255, 255, 1);
border: 1px solid rgba(229, 229, 229, 1);
margin:15px;
position: relative;
border-radius: 5px;
}
.title {
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: large;
    font-weight: bold;
    color: rgb(26, 26, 27);
}
.time {
    position: absolute;
    right: 15px;
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: small;
    font-weight: bold;
    color: rgba(41, 128, 227, 0.401);
}
.subtitle {
margin: 10px;
padding:10px;
opacity: 1;
background: rgba(255, 255, 255, 1);
border-radius: 5px;
}
.content {
    font-size: small;
}
</style>