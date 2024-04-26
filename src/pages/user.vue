<template>
    <!--调试阶段设置头像区域文本-->
    <div class="headImage">
        <!--设置头像的大小 + 形状 + 填充模式 + 头像悬浮-->
        <div class="avatar">
            <!--手机端得点击方可悬浮 但电脑端滑到上面即可-->
            <var-space align="center">
                <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="78" fit="cover" bordered="true" hoverable="true" />
            </var-space>
        </div>

        <!-- 用户名称 -->
        <div class="nickname">
            <p class="name">{{ user.name }}</p>
            <p class="subtext" @click="goSelectResume">我要找工作</p>
        </div>
    </div>

    <var-card  
        
    />

    <!-- 跳转栏 -->
    <div class="jumpBar">
        <div class="stat-item">
            <p class="stat-number">23</p>
            <p class="stat-text">沟通过</p>
        </div>
        <div class="stat-item">
            <p class="stat-number">18</p>
            <p class="stat-text">已投简历</p>
        </div>
        <div class="stat-item">
            <p class="stat-number">23</p>
            <p class="stat-text">待面试</p>
        </div>
        <div class="stat-item" @click="goFavoritesCollections">
            <p class="stat-number">11</p>
            <p class="stat-text">收藏</p>
        </div>
    </div>

    <!-- 广告 今麦郎打钱！！！ -->
    <div class="ad">
        <var-image width="390.4px" height="300px" fit="cover" src="../assets/ad.jpg" />
    </div>

    <!-- 功能栏 -->
    <div class="controlBar">
        <div class="smallControlBar" @click="goSelectResume">
            <img src="" alt="Icon 1" @click="goSelectResume" />
            <p class="text">我的简历</p>
        </div>
        <div class="smallControlBar" @click="goFraudPreventionGuide">
            <img src="" alt="Icon 2" @click="goFraudPreventionGuide" />
            <p class="text">防诈指南</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                avatar: 'path/to/avatar.jpg', // 用户头像路径
                name: '' // 用户名称，从数据库获取
            }
        };
    },
    mounted() {
        this.getUserInfo();
    },
    methods: {
        getUserInfo() {
            // 模拟从数据库获取用户信息
            setTimeout(() => {
                this.user.name = '陈景清'; // 从数据库获取的用户名称
            });
        },
        goSelectResume() {
            this.$router.push('/selectResume');
        },
        goFraudPreventionGuide() {
            this.$router.push('/fraudPreventionGuide');
        },
        goFavoritesCollections() {
            this.$router.push('/favoritesCollections');
        }
    }
};
</script>

<style scoped>
/* 设置用户信息盒子 */
.headImage {
    /* border: 1px solid  #2E4E7E;  藏青色边框 */
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 添加阴影 */
    /*border: 1px solid #000;*/
    display: flex;
    align-items: center;
    margin-bottom: 20px; /* 设置用户信息盒子与统计信息盒子之间的间距 */

    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    margin: 15px;
}


/* 设置头像与信息之间的间距 */
.avatar {
    margin-right: 10px;
}

/* 名字填充剩余空间 */
.user-info {
    flex: 1;
}

/* 设置名字样式 */
.name {
    font-weight: bold; /* 字体加粗 */
    margin-top: -25px; /* 将名称向上移动5像素 */
}

/* 设置简介样式 */
.subtext {
    color: gray;
    font-size: 12px;
    margin-top: 10px; /* 调整间距为 10px */
}

/* 设置统计信息盒子 */
.jumpBar {
    /* border: 1px solid  #2E4E7E; 藏青色边框 */
    /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 添加阴影 */
    /* border: 1px solid #000; */
    display: flex;
    margin-bottom: 20px; /* 设置统计信息盒子与广告盒子之间的间距 */

    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    margin: 15px;
}

/* 设置跳转小盒子的布局样式 */
.stat-item {
    flex: 1;
    text-align: center;
}

/* 设置跳转小盒子阿拉伯数字的粗细程度和字体大小 */
.stat-number {
    font-size: 18px;
    font-weight: bold;
}

/* 设置跳转小盒子文本的粗细程度、字体大小和颜色 */
.stat-text {
    font-size: 14px;
    color: #666;
    margin-top: 5px; /* 将文字向下移动5像素 */
}

/* 设置广告盒子 */
.ad {
    margin-bottom: 20px; /* 设置统计信息盒子与广告盒子之间的间距 */
    height: 300px;

}

/* 设置功能栏布局样式 */
.controlBar {
    /* border: 1px solid #2E4E7E;  藏青色边框 */
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 添加阴影 */
    display: flex;
    height: 150px;

    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    margin: 15px;
}

/* 设置功能栏小盒子样式 */
.smallControlBar {
    margin: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 设置文本样式 */
.text {
    color: gray;
}
</style>
