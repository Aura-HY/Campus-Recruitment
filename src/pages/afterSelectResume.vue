<template>
    <div class="top">
        <asResumeBar></asResumeBar>
    </div>

    <!-- 大简历卡片 -->
    <div class="resumeCards">
            <!-- 输入个人信息框盒子 -->
                <div class="personal-info">
                    <var-input placeholder="简历名称" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="姓名" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="性别" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="年级" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="学院" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="班级" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="学号" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="微信号" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="练习电话" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="是否拥有健康证" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="个人简历" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="工作经历" v-model="value" />
                </div>
                <div class="personal-info">
                    <var-input placeholder="荣誉证书" v-model="value" />
                </div>
            </div>
</template>

<script>
import asResumeBar from '../components/asResumeBar.vue';
import user from '../api/user';

export default {
    components: {
        asResumeBar
    },
    name: 'intoResume',
    data() {
        return {
            userResumesInfo:[],
        };
    },
    created() {
        this.getUserResumesInfo(this.$route.params.resumeId);
    },
    mounted() {},
    updated() {},
    methods: {
        handleResumeClick(resumeId){
            this.getUserResumesInfo(resumeId);
        },
        async getUserResumesInfo(resumeId) {
            console.log(resumeId);
            const userResumesInfo = await user.getUserResumesInfo(resumeId);
            console.log(userResumesInfo);
            this.userResumesInfo = Object.keys(userResumesInfo[0]).map(key => ({ [key]: userResumesInfo[0][key] }));
        }
        
        
    }
};
</script>

<style scoped>
.top {
    height: 10%;
    width: 100%;
}

.resumeCards {
    overflow-y: auto;
    height: 90%;
}

/* 设置个人信息盒子 */
.personal-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding:  10px; /* 如果输入框要下移 可在前添加3px */
    /* border-bottom: 1px solid #ccc;  调试边框 */

    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    margin: 15px;
}

</style>