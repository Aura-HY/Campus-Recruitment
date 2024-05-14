<template>
    <div class="top">
        <sResumeBar></sResumeBar>
    </div>
    <!-- 大简历卡片 -->
    <div class="resumeCards">
        <!-- 小简历卡片 -->
        <div v-for="item in userResumes" :key="item.resumeId" class="resumeCard">
            <!-- 左边的简历图标盒子 -->
            <div class="src-box">
                <var-icon name="file-document-outline" :size="80" />
            </div>

            <!-- 中间的简历内容盒子 -->
            <div class="text-box">
                <p style="font-size: 16px; margin: 0">{{ item.resumeName }}</p>
            </div>

            <!-- 右侧的箭头盒子 -->
            <div class="arrow-box" @click="goResume(item.resumeId)">
                <var-icon name="chevron-right" :size="35" style="margin-left: 10px" />
            </div>
        </div>
    </div>
</template>

<script>
import user from '../api/user';
import sResumeBar from '../components/sResumeBar.vue';

export default {
    name:'resumes',
    data() {
        return {
            userResumes: []
        };
    },
    created() {
        this.getUserResumes();
    },
    mounted() {},
    updated() {},
    methods: {
        async getUserResumes(){
            //console是调试bug时在控制台打印userId是否为字符串
            console.log(localStorage.getItem('userId'));
            const userResumes = await user.getUserResumes(localStorage.getItem('userId'));
            console.log(userResumes);
            this.userResumes = userResumes;
        },
        goResume(resumeId) {
            this.$router.push({ name: 'afterSelectResume', params: { resumeId } });
        }
    },
    components: {
        sResumeBar
    },
};
</script>

<style scoped>
.top {
    height: 10%;
    width: 100%;
}

.resumeCards {
    margin-bottom: 20px;
    overflow-y: auto;
    height: 90%;
}

.resumeCard {
    display: flex;
    align-items: center;
    /*border: 1px solid #000;  调试边框 */
    margin-bottom: 10px; /* 添加间隔 */

    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    margin: 15px;
}

.src-box {
    color: gray;
}

.text-box {
    flex: 1;
    text-align: left;
}

.arrow-box {
    color: black;
    cursor: pointer; /* 添加指针样式 */
}
</style>
