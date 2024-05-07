<template>
    <div class="chatIcon">
      <el-popover placement="top-start" width="400" trigger="hover">
        <div class="emotionList">
          <a
            href="javascript:void(0);"
            @click="getEmo(index)"
            v-for="(item, index) in faceList"
            :key="index"
            class="emotionItem"
            >{{ item }}</a
          >
        </div>
        <img height="20" slot="reference" src="@/assets/images/表情.svg" />
      </el-popover>
    </div>
  </template>
  <script>
  import emojiData from "@/assets/data/emoji.json";
  export default {
    mounted() {
      for (let i in emojiData) {
        this.faceList.push(emojiData[i].char);
      }
    },
    data() {
      return {
        faceList: [],
      };
    },
    methods: {
      getEmo(index) {
        this.$emit("getEmo", this.faceList[index]);
      },
    },
  };
  </script>
  
    
  <style scoped>
  .chatIcon {
    font-size: 25px;
  }
  .emotionList {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
  }
  
  .emotionItem {
    width: 10%;
    font-size: 20px;
    text-align: center;
  }
  /*包含以下四种的链接*/
  .emotionItem {
    text-decoration: none;
  }
  /*正常的未被访问过的链接*/
  .emotionItem:link {
    text-decoration: none;
  }
  /*已经访问过的链接*/
  .emotionItem:visited {
    text-decoration: none;
  }
  /*鼠标划过(停留)的链接*/
  .emotionItem:hover {
    text-decoration: none;
  }
  /* 正在点击的链接*/
  .emotionItem:active {
    text-decoration: none;
  }
  </style>
  