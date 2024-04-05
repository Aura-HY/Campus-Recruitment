<template>
<!-- //这里可以通过点击卡片传卡片的jobId,传对应的值到detail路由中 -->
<div class="card" @click="goJobDetail(item.jobId,item.titleJob,item.jobDescription,item.requirementsL,item.salary,item.salaryUnit)"  v-for="item in items" :key="item.jobId" style="margin-top:20px;">
    <div class="top" style="display: -webkit-flex;display: flex;">
        <div class="title" >{{ item.titleJob }}</div>
        <div class="salary" >{{ item.salary }} / {{ item.salaryUnit }}</div>
    </div>
   
    <div class="subtitle">{{ item.requirementLabel }} </div>
    
    <div class="bottom" style="display: -webkit-flex;display: flex;">
        <div class="avatar" ><img :src=item.userAvatar ></div>
        <div class="recruiters" style="margin-left:10px;">{{ item.userName }}</div>
        <div class="location" style="position:absolute;right:30px;">{{ item.location }}</div>
    </div>
    
</div>
  
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

const props=defineProps(['items'])

function goJobDetail(jobId,titleJob,jobDescription,requirementsL,salary,salaryUnit){
    router.push({
        name:'jobDetail',
        params:{ 
            jobId:jobId ,
            titleJob:titleJob,
            jobDescription:jobDescription,
            requirementsL:requirementsL,
            salary:salary,
            salaryUnit:salaryUnit
        }
    });
}

const items = [
    {
        jobId:1,
        titleJob:'配送',
        userAvatar:'https://tse1-mm.cn.bing.net/th/id/OIP-C.N3QbpwZJUYZAn_6JRbWgXAAAAA?w=166&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        userName:'鸡腿饭老板',
        requirementLabel:'label3,label2',
        jobDescription:'1.时间：中午十一点到一点、下午五点到七点 2.工作内容：保障客人肚子的安全 3.地点：需要填饱肚子的地方 ',
        requirementsL:'1.善于沟通学习2.有相关经验3.为人老实4.做事认真',
        salary:'1',
        salaryUnit:'单',
        location:'一饭'
    },
    {
        jobId:2,
        titleJob:'打饭',
        userAvatar:'https://tse1-mm.cn.bing.net/th/id/OIP-C.N3QbpwZJUYZAn_6JRbWgXAAAAA?w=166&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        userName:'鸡腿饭老板',
        requirementLabel:'label1,label1',
        jobDescription:'1.时间：中午十一点到一点、下午五点到七点 2.工作内容：负责客人的出餐以及出餐台的卫生 3.地点： ',
        requirementsL:'1.善于沟通学习2.有相关经验3.为人老实4.做事认真',
        salary:'15',
        salaryUnit:'h',
        location:'二饭'
    },
    {
        jobId:3,
        titleJob:'修网线',
        userAvatar:'https://tse1-mm.cn.bing.net/th/id/OIP-C.N3QbpwZJUYZAn_6JRbWgXAAAAA?w=166&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        userName:'广东医网办处',
        requirementLabel:'label2,label1ghiu',
        jobDescription:'1.时间：早上8点到11点、下午五点到七点 2.工作内容：校园网的修理 3.地点：出故障的地方 ',
        requirementsL:'1.善于沟通学习2.有相关经验3.为人老实4.做事认真',
        salary:'6000',
        salaryUnit:'月',
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
margin:15px;
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