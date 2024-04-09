<template>
    <div class="top">
        <sResumeBar></sResumeBar>
    </div>

    <div class="resumeCards">
        <div v-for="resume in resumes" :key="resume.id" class="resumeCard">
            <!-- 左边的 src 盒子，显示简历图标 -->
            <div class="src-box">
                <var-icon name="file-document-outline" :size="80" />
            </div>

            <!-- 中间的 text 盒子，显示后端数据库数据 -->
            <div class="text-box">
                <p>{{ resume.content }}</p>
            </div>

            <!-- 右侧的箭头盒子 -->
            <div class="arrow-box">
                <var-button color="transparent" text-color="#fff" round text @click="goResume(resume.id)">
                    <var-icon name="chevron-right" :size="30" />
                </var-button>
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
    border: 1px solid #000;
    margin-bottom: 10px; /* 添加间隔 */
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
}
</style>
