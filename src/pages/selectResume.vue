<template>
    <div class="top">
        <sResumeBar></sResumeBar>
    </div>
    <!-- 大简历卡片 -->
    <div class="resumeCards">
        <!-- 小简历卡片 -->
        <div v-for="resume in resumes" :key="resume.id" class="resumeCard">
            <!-- 左边的简历图标盒子 -->
            <div class="src-box">
                <var-icon name="file-document-outline" :size="80" />
            </div>

            <!-- 中间的简历内容盒子 -->
            <div class="text-box">
                <p style="font-size: 16px; margin: 0">{{ resume.content }}</p>
            </div>

            <!-- 右侧的箭头盒子 -->
            <div class="arrow-box" @click="goResume(resume.id)">
                <var-icon name="chevron-right" :size="35" style="margin-left: 10px" />
            </div>
        </div>
    </div>
</template>

<script>
import sResumeBar from '../components/sResumeBar.vue';

export default {
    data() {
        return {
            resumes: [
                { id: 1, content: '洗碗' }, // 示例简历数据，可以从后端获取
                { id: 2, content: '其他简历内容' }
                // 可以根据后端数据结构调整或从后端获取更多数据
            ]
        };
    },
    components: {
        sResumeBar
    },
    methods: {
        goResume(id) {
            // 处理跳转到用户页面的逻辑，可以根据简历id进行跳转
        }
    }
};
</script>

<style>
.top {
    margin-bottom: 20px;
    margin-top: 76px;
}

.resumeCards {
    margin-bottom: 20px;
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
