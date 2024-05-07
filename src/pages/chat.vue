<template>
    <div class="page">
      <div class="leftBox">
        <h1>二饭姆斯汉堡</h1>
        <div class="chatBox">
          <div class="chatRecordBox">
            <div v-for="(item, index) in chatRecordList" :key="index">
              <RightRole
                v-if="item.role === '我是陈景清'"
                :type="item.type"
                :content="item.content"
                :avatarURL="visitorAvatarURL"
                @openMenu="openMenu($event, index, true)"
              />
              <LeftRole
                v-if="item.role === '负责人'"
                :type="item.type"
                :content="item.content"
                :avatarURL="serviceAvatarURL"
                @openMenu="openMenu($event, index)"
              />
            </div>
          </div>
          <div class="toolBox">
            <ChooseEmotion @getEmo="chooseEmo($event, 'visitor')" />
            <img
              @click="chooseImg('visitor')"
              class="imgIcon"
              src="@/assets/images/图片.svg"
            />
            <img
              @click="chooseVideo('visitor')"
              class="videoIcon"
              src="@/assets/images/视频.svg"
            />
            <img
              @click="chooseAudio('visitor')"
              class="audioIcon"
              src="@/assets/images/音频.svg"
            />
          </div>
          <div
            ref="visitorSendContentBox_Ref"
            contenteditable="true"
            class="sendContentBox"
          ></div>
          <div class="btnBox">
            <el-button @click="visitorSend" size="small">发送</el-button>
          </div>
        </div>
      </div>
   
  </template>
  
  <script>
  import LeftRole from "../components/leftRole.vue";
  import RightRole from "../components/rightRole.vue";
  import ChooseEmotion from "../components/chooseEmotion.vue";

  
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
    components: { LeftRole, RightRole, ChooseEmotion },
    mounted() {
      let that = this;
  
      // 点击图片放大预览
      window.addEventListener("click", function (e) {
        let { target } = e;
        let nodeName = target.nodeName;
  
        if (nodeName === "IMG") {
          // 获取自定义的属性 preview
          let preview = target.getAttribute("preview");
          // 无 preview 属性的图片，不支持点击放大预览
          if (!preview) {
            return;
          }
          that.imgSrc = target.currentSrc;
          that.showPreviewImgWin = true;
        }
      });
    },
    data() {
      return {
        ifCan_rollBack: false,
        index: null,
        quickMenu_left: 0,
        quickMenu_top: 0,
        quickMenuVisible: false,
        imgSrc: "",
        showPreviewImgWin: false,
        visitorAvatarURL,
        serviceAvatarURL,
        chatRecordList: [],
      };
    },
    methods: {
      // 撤回消息
      rollBack() {
        this.chatRecordList.splice(this.index, 1);
      },
      // js 点击复制到剪贴板函数
      copy() {
        let content = this.chatRecordList[this.index].content;
  
        if (window.clipboardData) {
          window.clipboardData.setData("text", content);
        } else {
          (function (content) {
            document.oncopy = function (e) {
              e.clipboardData.setData("text", content);
              e.preventDefault();
              document.oncopy = null;
            };
          })(content);
          document.execCommand("Copy");
        }
      },
      // 显示右键快捷菜单
      openMenu(e, index, ifCan_rollBack) {
        this.ifCan_rollBack = ifCan_rollBack;
        this.index = index;
        this.quickMenu_top = e.pageY;
        this.quickMenu_left = e.pageX;
        this.quickMenuVisible = true;
      },
      // 隐藏右键快捷菜单
      closeMenu() {
        this.quickMenuVisible = false;
      },
      // 根据角色，确定编辑框
      getSendContentBox_Ref(role) {
        if (role === "visitor") {
          return "visitorSendContentBox_Ref";
        }
        if (role === "service") {
          return "serviceSendContentBox_Ref";
        }
      },
      // 在编辑框中插入内容
      sendContentBox_insert(role, insertContent) {
        let sendContentBox_Ref = this.getSendContentBox_Ref(role);
        let content = JSON.parse(
          JSON.stringify(this.$refs[sendContentBox_Ref].innerHTML)
        );
  
        let newContent = "";
  
        // 光标在编辑框内时
        if (window.getSelection().anchorNode) {
          // 获取光标在编辑框中的下标
          let startIndex = window.getSelection().anchorOffset;
          let ednIndex = window.getSelection().focusOffset;
  
          newContent =
            content.substring(0, startIndex) +
            insertContent +
            content.substring(ednIndex);
        } else {
          // 光标不在编辑框内时
          newContent = content + insertContent;
        }
  
        this.$refs[sendContentBox_Ref].innerHTML = newContent;
      },
      chooseEmo(emo, role) {
        this.sendContentBox_insert(role, emo);
      },
      // 访客发送消息
      visitorSend() {
        let content = this.$refs.visitorSendContentBox_Ref.innerHTML;
        if (!content) {
          this.$message({
            message: "请输入发送内容！",
            type: "warning",
          });
          return;
        }
  
        this.chatRecordList.push({
          role: "访客",
          content: content,
          type: "text",
        });
  
        // 发送后，清空发送框的内容
        this.$refs.visitorSendContentBox_Ref.innerHTML = "";
      },
      // 客服发送消息
      serviceSend() {
        let content = this.$refs.serviceSendContentBox_Ref.innerHTML;
        if (!content) {
          this.$message({
            message: "请输入发送内容！",
            type: "warning",
          });
          return;
        }
  
        this.chatRecordList.push({
          role: "客服",
          content: content,
          type: "text",
        });
  
        // 发送后，清空发送框的内容
        this.$refs.serviceSendContentBox_Ref.innerHTML = "";
      },
      // 选择图片
      chooseImg(role) {
        let that = this;
        let input = document.createElement("input");
        input.setAttribute("type", "file");
        // 支持多选
        input.setAttribute("multiple", "multiple");
        input.accept = "image/*";
        input.addEventListener("change", (e) => {
          let file = e.path[0].files[0];
          // 浏览器兼容性处理（有的浏览器仅存在 Window.URL）
          const windowURL = window.URL || window.webkitURL;
          // createObjectURL 函数会根据传入的参数创建一个指向该参数对象的URL
          let filePath = windowURL.createObjectURL(file);
  
          let tmp_imgDom = document.createElement("img");
          tmp_imgDom.setAttribute("src", filePath);
          tmp_imgDom.setAttribute("height", 30);
          tmp_imgDom.setAttribute("preview", true);
          tmp_imgDom.style.cursor = "pointer";
  
          let tmp_divDom = document.createElement("div");
          tmp_divDom.appendChild(tmp_imgDom);
  
          that.chatRecordList.push({
            role: role === "visitor" ? "访客" : "客服",
            content: tmp_divDom.innerHTML,
            type: "img",
          });
        });
        input.click();
      },
      // 选择视频
      chooseVideo(role) {
        let that = this;
        let input = document.createElement("input");
        input.setAttribute("type", "file");
        // 支持多选
        input.setAttribute("multiple", "multiple");
        input.accept = "video/*";
        input.addEventListener("change", (e) => {
          let file = e.path[0].files[0];
          // 浏览器兼容性处理（有的浏览器仅存在 Window.URL）
          const windowURL = window.URL || window.webkitURL;
          // createObjectURL 函数会根据传入的参数创建一个指向该参数对象的URL
          let filePath = windowURL.createObjectURL(file);
  
          let tmp_videoDom = document.createElement("video");
  
          tmp_videoDom.setAttribute("src", filePath);
          tmp_videoDom.setAttribute("height", 100);
          tmp_videoDom.setAttribute("controls", "controls");
          tmp_videoDom.style.cursor = "pointer";
  
          let tmp_divDom = document.createElement("div");
          tmp_divDom.appendChild(tmp_videoDom);
  
          that.chatRecordList.push({
            role: role === "visitor" ? "访客" : "客服",
            content: tmp_divDom.innerHTML,
            type: "video",
          });
        });
        input.click();
      },
  
      // 选择音频
      chooseAudio(role) {
        let that = this;
        let input = document.createElement("input");
        input.setAttribute("type", "file");
        // 支持多选
        input.setAttribute("multiple", "multiple");
        input.accept = "audio/*";
        input.addEventListener("change", (e) => {
          let file = e.path[0].files[0];
          // 浏览器兼容性处理（有的浏览器仅存在 Window.URL）
          const windowURL = window.URL || window.webkitURL;
          // createObjectURL 函数会根据传入的参数创建一个指向该参数对象的URL
          let filePath = windowURL.createObjectURL(file);
  
          let tmp_audioDom = document.createElement("audio");
  
          tmp_audioDom.setAttribute("src", filePath);
          tmp_audioDom.setAttribute("height", 30);
          tmp_audioDom.setAttribute("controls", "controls");
          tmp_audioDom.style.cursor = "pointer";
          let tmp_divDom = document.createElement("div");
          tmp_divDom.appendChild(tmp_audioDom);
  
          that.chatRecordList.push({
            role: role === "visitor" ? "访客" : "客服",
            content: tmp_divDom.innerHTML,
            type: "audio",
          });
        });
        input.click();
      },
    },
  };
  </script>
  
  <style scoped>
  .page {
    display: flex;
    justify-content: space-around;
  }
  .chatBox {
    width: 400px;
    padding: 10px;
    background: #409eff;
    border-radius: 10px;
  }
  .chatRecordBox {
    padding: 10px;
    height: 400px;
    border-radius: 10px;
    background: white;
    overflow: auto;
  }
  
  .sendContentBox {
    height: 100px;
    padding: 10px;
    background: white;
    overflow: auto;
    border: 1px solid rgb(195, 187, 187);
  }
  .btnBox {
    padding-top: 10px;
    text-align: right;
  }
  
  h1 {
    line-height: 40px;
    font-weight: bold;
  }
  .toolBox {
    padding: 4px;
    background: white;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  
  img {
    cursor: pointer !important;
    display: inline-block;
  }
  .imgIcon {
    margin-left: 4px;
    height: 20px;
    cursor: pointer;
  }
  .videoIcon {
    width: 22px;
    cursor: pointer;
    margin-left: 4px;
  }
  .audioIcon {
    width: 18px;
    cursor: pointer;
    margin-left: 4px;
    border-radius: 4px;
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
  
  