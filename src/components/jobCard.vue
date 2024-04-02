<template>
<div class="card" @click="goJobDetail()"  v-for="item in items" :key="item.id" style="margin-top:20px;">
    <div class="top" style="display: -webkit-flex;display: flex;">
        <div class="title" >{{ item.title_job }}</div>
        <div class="salary" >{{ item.salary }} / {{ item.salary_unit }}</div>
    </div>
   
    <div class="subtitle">{{ item.requirement_label }} </div>
    
    <div class="bottom" style="display: -webkit-flex;display: flex;">
        <div class="avatar" ><img :src=item.user_avatar ></div>
        <div class="recruiters" style="margin-left:10px;">{{ item.user_name }}</div>
        <div class="location" style="position:absolute;right:30px;">{{ item.location }}</div>
    </div>
    
</div>
  
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function goJobDetail(){
    router.push({name:'jobDetail'});
}

const items = [
    {
        id:1,
        title_job:'配送',
        user_avatar:'https://tse1-mm.cn.bing.net/th/id/OIP-C.N3QbpwZJUYZAn_6JRbWgXAAAAA?w=166&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        user_name:'鸡腿饭老板',
        requirement_label:'label3,label2',
        salary:'1',
        salary_unit:'单',
        location:'一饭'
    },
    {
        id:2,
        title_job:'打饭',
        user_avatar:'https://tse1-mm.cn.bing.net/th/id/OIP-C.N3QbpwZJUYZAn_6JRbWgXAAAAA?w=166&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        user_name:'鸡腿饭老板',
        requirement_label:'label1,label1',
        salary:'15',
        salary_unit:'h',
        location:'二饭'
    },
    {
        id:3,
        title_job:'修网线',
        user_avatar:'https://tse1-mm.cn.bing.net/th/id/OIP-C.N3QbpwZJUYZAn_6JRbWgXAAAAA?w=166&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        user_name:'广东医网办处',
        requirement_label:'label2,label1ghiu',
        salary:'6000',
        salary_unit:'月',
        location:'A22433'
    }
]
</script>

<style scoped>
.card{
/* left: 14px;
top: 232px; */
/* height: 100px; */
opacity: 1;
background: rgba(255, 255, 255, 1);
border: 1px solid rgba(229, 229, 229, 1);
}
.title{
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size:large;
    font-weight: bold;
    color: rgb(26, 26, 27);
}
.salary{
    position:absolute;
    right:30px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: large;
    font-weight: bold;
    color: rgba(41, 128, 227, 1);
}
.subtitle{
font-size:x-small;
margin-left: 15px;
margin-top:3px;
padding-right: 5px;
opacity: 1;
border-radius: 2px;
background: rgba(235, 233, 233, 0.773);
display: inline-block;
padding-left: 0.5em;
white-space: nowrap;
}
.bottom{
    margin-top:14px;
    margin-left:10px;
    margin-bottom: 5px;
    font-size: small;
    display: flex;
}
.avatar{
    width:20px;
    height: 20px;
    border-radius:50px;
}
.avatar img{
    width: 100%; /* 设置图片宽度为容器宽度 */
    height: 100%; /* 设置图片高度为容器高度 */
    object-fit: cover; /* 让图片等比例缩放并填充整个容器 */
}
</style>