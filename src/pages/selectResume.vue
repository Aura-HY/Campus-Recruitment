<template>
    <div class="top">
        <sResumeBar></sResumeBar>
    </div>
    <!-- 大简历卡片 -->
    <div class="resumeCards">
        <!-- 小简历卡片 -->
        <div v-for="(item,index) in userResumes" :key="index" class="resumeCard" @contextmenu.prevent="openMenu($event,index)">
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
        <ul
        v-show="quickMenuVisible"
        :style="{ left: quickMenu_left + 'px', top: quickMenu_top + 'px' }"
        class="contextmenu"
        >
        <li @click="rollBack">删除</li>
        </ul>
    </div>
</template>

<script>
import user from '../api/user';
import sResumeBar from '../components/sResumeBar.vue';

export default {
    watch: {
    quickMenuVisible(value) {
        if (value) {
            document.body.addEventListener("click", this.closeMenu);
        } else {
            document.body.removeEventListener("click", this.closeMenu);
        }
    },
    },
    name:'resumes',
    data() {
        return {
            userResumes: [],
            quickMenu_left: 0,
            quickMenu_top: 0,
            quickMenuVisible: false,
            index:null
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
        },
        openMenu(e,index) {
            this.index = index
            this.quickMenu_top = e.clientY;
            this.quickMenu_left = e.clientX;
            this.quickMenuVisible = true;
            
        },
        async rollBack() {
            await user.deleteResume(this.userResumes[this.index].resumeId);
            this.userResumes.splice(this.index, 1);
        },
        closeMenu() {
            this.quickMenuVisible = false;
        },
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
/* 右键快捷菜单的样式 */
.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
}

.contextmenu li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
}

.contextmenu li:hover {
    background: #eee;
}
</style>
