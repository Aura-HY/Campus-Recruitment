<template>
    <!-- //这里可以通过点击卡片传卡片的jobId,传对应的值到detail路由中 -->
    <div class="cardbody">
        <div class="card" @click="goJobDetail(item.jobId)" v-for="item in items" :key="item.jobId" style="margin-top: 20px">
            <div class="top" style="display: -webkit-flex; display: flex">
                <div class="title">{{ item.titleJob }}</div>
                <div class="salary">{{ item.salary }} / {{ item.salaryUnit }}</div>
            </div>

            <div class="subtitle">{{ item.requirementLabel }}</div>

            <div class="bottom" style="display: -webkit-flex; display: flex">
                <div class="avatar"><img :src="item.userAvatar" /></div>
                <div class="recruiters" style="margin-left: 10px; ">{{ item.nickname }}</div>
                <div class="location" style="position: absolute; right: 30px;">{{ item.location }}</div>
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
        };
    },
    props:{
        paramId:{
            type:String,
            default:''
        }
    },
    methods: {
        goJobDetail(jobId) {
            console.log(localStorage.getItem('token')); 
            this.$router.push({
                name: 'jobDetail',
                params: {
                    jobId: jobId
                }
            });
        },
        //拿到全部职业列表
        async queryJob() {
            const items = await user.getJobList();
            this.items = items;
        },
        //拿到部分职业
        async typeJob(paramId){
            const items = await user.getTypeJob({paramId:paramId});
            this.items=items;
        }
    },
    created() {
            this.queryJob();
    },
    watch:{
        //筛选
        paramId(newVal,oldVal){
            if(newVal=='5'){
                this.queryJob();
            }else if (oldVal !== undefined) {   
                this.typeJob(newVal);  
            }
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
margin:15px;
position: relative;
}
.title {
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: large;
    font-weight: bold;
    color: rgb(26, 26, 27);
}
.salary {
    position: absolute;
    right: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: large;
    font-weight: bold;
    color: rgba(41, 128, 227, 1);
}
.subtitle {
    font-size: x-small;
    margin-left: 15px;
    margin-top: 3px;
    padding-right: 5px;
    opacity: 1;
    border-radius: 2px;
    background: rgba(219, 216, 216, 0.773);
    display: inline-block;
    padding-left: 0.5em;
    white-space: nowrap;
    opacity: 0.6;
}
.bottom {
    margin-top: 14px;
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: small;
    display: flex;
}
.avatar {
    width: 20px;
    height: 20px;
    border-radius: 50px;
}
.avatar img {
    width: 100%; /* 设置图片宽度为容器宽度 */
    height: 100%; /* 设置图片高度为容器高度 */
    object-fit: cover; /* 让图片等比例缩放并填充整个容器 */
}
</style>
