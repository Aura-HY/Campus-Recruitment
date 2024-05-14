<template>
    <div class="top">
        <fpGuideBar></fpGuideBar>
    </div>
    <!-- 防诈骗文本框 -->
    <div class="main">
        <div class="text">
            <p class="text1">防诈小指南</p>
            <p>1.不要轻易透露个人敏感信息，如身份证号码、银行账户信息等。</p>
            <p>2.警惕任何要求你提前支付费用的兼职机会，这可能是诈骗。</p>
            <p>3.确保了解清楚薪酬结构，避免虚假承诺或不合理的付款要求</p>
            <p>4.避免在不知名或不可靠的网站上发布个人信息或寻找工作。</p>
            <p>5.告知家人或朋友你的兼职计划，让他们知道你的位置和工作安排。</p>
        </div>

        <!-- 骚话框 -->
        <div class="sh">
            <var-image width="390.4px" height="200px" fit="cover" src="../assets/诈骗.jpg" />
        </div>

        <!-- 广告 今麦郎打钱！！！ -->
        <div class="ad">
            <var-image width="390.4px" height="200px" fit="cover" src="../assets/ad.jpg" />
        </div>
    </div>
</template>

<script>
import fpGuideBar from '../components/fpGuideBar.vue';
export default {
    components: {
        fpGuideBar
    }
};
</script>

<style scoped>
.top {
    height: 10%;
    width: 100%;
}

.text1 {
    font-weight: bold;
}

/* 设置防诈小指南盒子 */
.text {
    border: 1px solid #000;
    margin-bottom: 20px; /* 设置防诈小指南与骚话之间的间距 */
    opacity: 1;

    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    margin: 15px;
}

/* 设置骚话和广告盒子 */
.sh,.ad {
    margin-bottom: 20px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* 隐藏溢出的部分 */
}

/* 设置骚话和广告盒子中的图片样式 */
.image {
    width: 100%; /* 图片宽度填满父容器 */
    height: 100%; /* 图片高度填满父容器 */
    object-fit: cover; /* 图片填充整个容器，可能会裁剪部分图片 */
}
</style>
