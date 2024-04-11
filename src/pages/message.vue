
<template>
  <div class="chat-container">
    <div class="chat-list">
      <div v-for="(chat, index) in chatList" :key="index" @click="selectChat(index)" class="chat-item">
        <div class="chat-avatar"></div>
        <div class="chat-info">
          <div class="chat-name">{{ chat.name }}</div>
          <div class="last-message">{{ chat.messages[chat.messages.length - 1].text }}</div>
          <div class="message-time">{{ chat.messages[chat.messages.length - 1].timestamp }}</div>
        </div>
      </div>
    </div>
    <div v-if="selectedChat !== null" class="chat-messages">
      <div v-for="(message, index) in chatList[selectedChat].messages" :key="index" class="message-item">
        <div v-if="message.sentByMe" class="sent-message">
          {{ message.text }}
        </div>
        <div v-else class="received-message">
          {{ message.text }}
        </div>
        <div class="message-time">{{ message.timestamp }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatList: [
        {
          name: '小明',
          messages: [
            { text: '你好！', timestamp: '2024-04-09 15:30:00', sentByMe: false },
            { text: '嗨！', timestamp: '2024-04-09 15:35:00', sentByMe: true }
          ]
        },
        {
          name: '小红',
          messages: [
            { text: '在吗？', timestamp: '2024-04-09 16:00:00', sentByMe: false }
          ]
        }
      ],
      selectedChat: null
    };
  },
  methods: {
    selectChat(index) {
      this.selectedChat = index;
    }
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  height: 100vh;
}

.chat-list {
  flex: 1;
  overflow-y: auto;
}

.chat-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.chat-avatar {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-info {
  flex: 1;
}

.chat-messages {
  flex: 2;
  overflow-y: auto;
  padding: 10px;
}

.message-item {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}

.sent-message {
  background-color: #07c160;
  color: white;
  padding: 10px;
  border-radius: 10px;
  align-self: flex-end;
}

.received-message {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
}

.message-time {
  font-size: 12px;
  color: #999;
}
</style>
```

这个示例包含一个显示聊天对象和消息时间的移动端聊天界面，您可以点击不同的聊天对象切换到对应的聊天界面查看消息记录。您可以根据需要进行样式和功能的定制。如果您有任何其他问题或需要进一步的帮助，请随时告诉我！