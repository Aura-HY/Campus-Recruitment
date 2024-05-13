<template>
    <div class="top">
        <fCollectionsBar></fCollectionsBar>
    </div>
    <div class="main">
        <div 
            class="card" 
            @click="goJobDetail(   
                item.jobId, 
                item.titleJob, 
                item.jobDescription, 
                item.requirementsL, 
                item.salary, 
                item.salaryUnit
            )" 
            v-for=" item in items" 
            :key="item.jobId" 
            style="margin-top: 20px"
        >
            <div class="Jobtop" style="display: -webkit-flex; display: flex">
                <div class="title">{{ item.titleJob }}</div>
                <div class="salary">{{ item.salary }} / {{ item.salaryUnit }}</div>
            </div>

            <div class="subtitle">{{ item.requirementLabel }}</div>

            <div class="bottom" style="display: -webkit-flex; display: flex">
                <div class="avatar"><img :src="item.userAvatar" /></div>
                <div class="recruiters" style="margin-left: 10px">{{ item.userName }}</div>
                <div class="location" style="position: absolute; right: 30px">{{ item.location }}</div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { userStore } from '@/stores/userStore';
import fCollectionsBar from '../components/fCollectionsBar.vue';
import user from '@/api/user';

export default {
    components: {
        fCollectionsBar
    },
    data() {
        return {
            items:[]
        };
},
    created() {
        const userInfo = userStore();
        this.queryFavoritesJob(userInfo.userId);
    },
    mounted() {
    },
    updated() {
    },
    methods: {
        goJobDetail(jobId, titleJob, jobDescription, requirementsL, salary, salaryUnit) {
            this.$router.push({
                name: 'jobDetail',
                params: {
                    jobId: jobId,
                    titleJob: titleJob,
                    jobDescription: jobDescription,
                    requirementsL: requirementsL,
                    salary: salary,
                    salaryUnit: salaryUnit
                }
            });
        },
        async queryFavoritesJob(userId) {
            const favoritesJobInfo = await user.getUserFavoritesJob({userId});
            this.items = favoritesJobInfo;
        }
    }
}

</script>

<style scoped>
.top {
    height: 10%;
    width: 100%;
}
.main{
    overflow-y: auto;
    height: 90%;
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
    background: rgba(235, 233, 233, 0.773);
    display: inline-block;
    padding-left: 0.5em;
    white-space: nowrap;
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
