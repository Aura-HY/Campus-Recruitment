<template>
    <div class="leftRoleBox">
      <div>
        <img class="avatar" :src="avatarURL" />
      </div>
      <!-- 左侧的聊天气泡尖角 -->
      <div v-if="type === 'text'" class="triangle-top-left">
        <div class="triangle-top-left2"></div>
      </div>
      <!-- 聊天气泡 -->
      <div
        @contextmenu.prevent="openMenu($event)"
        v-html="content"
        :class="type === 'text' ? 'bubble-left' : 'multimediaBox'"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: String,
      content: String,
      avatarURL: String,
    },
    methods: {
      openMenu(e) {
        this.$emit("openMenu", e);
      },
    },
  };
  </script>
  
  <style scoped>
  .leftRoleBox {
    display: flex;
    align-items: flex-start;
  }
  
  .avatar {
    width: 30px;
  }
  
  .triangle-top-left {
    position: relative;
    border-top: 4px solid #409eff;
    border-left: 4px solid transparent;
    margin-top: 20px;
    margin-left: 2px;
  }
  
  .triangle-top-left2 {
    top: -2px;
    left: 0px;
    position: absolute;
    border-top: 4px solid #ffffff;
    border-left: 4px solid transparent;
  }
  
  .bubble-left {
    text-align: justify;
    border-radius: 4px;
    padding: 4px;
    border: 2px solid #409eff;
    font-size: 12px;
    line-height: 16px;
    margin-top: 10px;
  }
  
  .multimediaBox {
    padding: 10px;
  }
  </style>
  