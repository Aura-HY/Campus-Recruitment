<template>
    <div class="rightRoleBox">
      <div>
        <img class="avatar" :src="avatarURL" />
      </div>
  
      <!-- 左侧的聊天气泡尖角 -->
      <div v-if="type === 'text'" class="triangle-top-right">
        <div class="triangle-top-right2"></div>
      </div>
      <!-- 聊天气泡 -->
      <div
        @contextmenu.prevent="openMenu($event)"
        v-html="content"
        :class="type === 'text' ? 'bubble-right' : 'multimediaBox'"
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
  .rightRoleBox {
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
  }
  
  .avatar {
    width: 30px;
  }
  
  .triangle-top-right {
    position: relative;
    border-top: 4px solid #409eff;
    border-right: 4px solid transparent;
    margin-top: 20px;
    margin-right: 2px;
  }
  
  .triangle-top-right2 {
    top: -2px;
    right: 0px;
    position: absolute;
    border-top: 4px solid #ffffff;
    border-right: 4px solid transparent;
  }
  
  .bubble-right {
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
  