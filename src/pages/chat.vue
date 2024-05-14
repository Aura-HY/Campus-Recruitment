<template>
  <div class="bar">
      <chatBar :nickname="name"></chatBar>
  </div>
  <div class="body">
    <div class="chatBox">
      <div v-for="(item, index) in chatRecordList" :key="index">
        <!-- 1是学生发消息给招聘人 -->
        <!-- type是发送的信息的类型，后期再补充 -->
        <!-- :messageContent="item.messageContent"这里不要有空格 -->
        <rightRole
          v-if="item.messageType === 1"
          :messageContent="item.messageContent"
          :messageTime="item.messageTime"
          @openMenu="openMenu($event, index, true)"
        />
        <leftRole
          v-if = "item.messageType === 2"
          :messageContent="item.messageContent"
          :messageTime="item.messageTime"
          :userAvatar="userAvatar"
          @openMenu="openMenu($event, index)"
        />
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="input">
      <var-input variant="outlined" placeholder="请输入文本" v-model="content" />
    </div>
    <var-button @click="sendMessage" class="button" text-color="#fff" color="linear-gradient(to right bottom, #6AA6FF, #D0BCFF)" size="large">发送</var-button>
  </div>
  <ul
        v-show="quickMenuVisible"
        :style="{ left: quickMenu_left + 'px', top: quickMenu_top + 'px' }"
        class="contextmenu"
      >
        <li v-show="ifCan_rollBack" @click="rollBack">撤回</li>
        <li @click="copy">复制</li>
      </ul>
</template>

<script>
import chatBar from '../components/chatBar.vue';
import user from '../api/user';
import rightRole  from '../components/rightRole.vue';
import leftRole from '../components/leftRole.vue';
import { Snackbar } from '@varlet/ui';
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
  components: {
    chatBar,
    rightRole,
    leftRole
  },
  data() {
    return {
      ifCan_rollBack: false,
      index: null,
      quickMenu_left: 0,
      quickMenu_top: 0,
      quickMenuVisible: false,
      recruitersId: this.$route.params.recruitersId,
      name:this.$route.params.nickname,
      userAvatar:this.$route.params.userAvatar,
      content:'',
      currentTime:'',
      jobSeekerId:localStorage.getItem('userId'),
      chatRecordList: [],
    };
  },
  created(){
    this.getMessageList(this.recruitersId);
  },
  mounted() {
    this.getCurrentTime();
  },
  methods:{
    getCurrentTime() {
      const date = new Date();
      this.currentTime = date.toLocaleString(); 
    },
    async getMessageList(recruitersId){
      const chatList = await user.getMessageList(recruitersId);
      this.chatRecordList = chatList;
    },
    async sendMessage(){
      if(this.content === ''){
        Snackbar.error('请输入内容');
      }else{
        await user.addMessage(this.content,this.jobSeekerId,this.recruitersId,this.currentTime);
        this.content='';
        this.getMessageList(this.recruitersId);
      }      
    },
    // 撤回消息
    async rollBack() {
      await user.deleteMessage(this.chatRecordList[this.index].messageId);
      this.chatRecordList.splice(this.index, 1);
      
    },
    // js 点击复制到剪贴板函数
    copy() {
      let content = this.chatRecordList[this.index].messageContent;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(content)
        .then(function() {
      // 复制成功时的处理逻辑
          Snackbar.success('文本复制成功');
        })
        .catch(function(err) {
       // 复制失败时的处理逻辑
          Snackbar.error('文本复制失败');
          console.error('无法复制文本: ', err);
        });
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
      this.quickMenu_top = e.clientY;
      this.quickMenu_left = e.clientX;
      this.quickMenuVisible = true;
    },
    // 隐藏右键快捷菜单
    closeMenu() {
      this.quickMenuVisible = false;
    },
  },
}
</script>

<style scoped>
.chatBox {
  padding: 10px;
  height: 100%;
  border-radius: 10px;
  background: white;
  overflow: auto;
}
.bar{
  height: 7%;
}
.body{
  height: 83%;
  overflow: auto;
}
.bottom{
  margin-top:10%;
  display: flex;
}
.input{
  width: 70%;
  margin-left: 4%;
  margin-right: 3%;
}
.buttom{
  height: 35px;
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