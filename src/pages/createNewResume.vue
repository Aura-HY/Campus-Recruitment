<template>
    <div class="top">
        <cnResumeBar></cnResumeBar>
    </div>

    <!-- 大简历卡片 -->
    <div class="resumeCards">
        <!-- 小简历卡片 -->
        <div v-for="(item, index) in items" :key="index" class="resumeCard">
            <!-- 输入框横线盒子 -->
            <div class="line-box">
                <!-- 根据条件来决定是否显示。输入框的placeholder属性为item.label，v-model用于双向绑定输入框的值。-->
                <var-input v-if="index !== 10 && index !== 11 && index !== 12" :placeholder="item.label" v-model="item.value" />
                <div v-else>
                    <!-- 用来决定是否渲染箭头图标，只有当index的值等于10、11或12时才会显示箭头图标。-->
                    <div class="personal-info">
                        <var-input :placeholder="item.label" v-model="item.value" />
                        <var-icon v-if="index === 10 || index === 11 || index === 12" name="chevron-right" @click="goUploade(index)" class="right-icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cnResumeBar from '../components/cnResumeBar.vue';

export default {
    components: {
        cnResumeBar
    },
    data() {
        return {
            items: [
                { label: '简历名称', value: '' },
                { label: '姓名', value: '' },
                { label: '性别', value: '' },
                { label: '年级', value: '' },
                { label: '学院', value: '' },
                { label: '班级', value: '' },
                { label: '学号', value: '' },
                { label: '微信号', value: '' },
                { label: '联系电话', value: '' },
                { label: '是否拥有健康证', value: '' },
                { label: '个人简历', value: '' },
                { label: '工作经历', value: '' },
                { label: '荣誉证书', value: '' },
                { label: '测试', value: '' },
            ]
        };
    },
    methods: {
        goUploade(index) {
            this.$router.push('/fraudPreventionGuide');
        }
    }
};
</script>

<style scoped>
.top {
    height: 10%;
    width: 100%;
}

.resumeCards{
    overflow-y: auto;
    height: 90%;
}
/* 设置小简历卡片 */
.resumeCard {
    display: flex;
    flex-direction: column;
    /* border: 1px solid #000; 调试边框 */
    margin-bottom: 10px;
}

/* 设置输入盒子 */
.line-box {
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

/* 设置个人信息盒子 */
.personal-info {
    display: flex;
    align-items: center;
}

/* 设置个人信息-箭头盒子 */
.right-icon {
    margin-left: auto;
    margin-top: 4px; /* 修改箭头的垂直位置 */
}

.line-box var-input {
    flex: 1;
}

/* 选择所有具有类名为 var-icon 的元素，但是只有当这些元素是 .line-box 的子元素时才会应用这段样式 */
.line-box var-icon {
    cursor: pointer;/* 设置了鼠标悬停在被选择元素上时的鼠标指针样式为手型指针 */
    margin-right: 10px;/* 置了被选择元素的右侧外边距为 10 像素，这将在元素的右侧留出一定的空间 */
}
</style>
