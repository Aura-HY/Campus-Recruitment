<template>
    <div class="leftRoleBox">
    <div>
        <img class="avatar" :src="userAvatar" />
    </div>
        <div class="triangle-top-left"  @contextmenu="openMenu"
      v-html="messageContent">
            
            
    </div>
    </div>
    <div class="time">{{ messageTime }}</div>
</template>

<script>
export default {
  emits: ['openMenu'],
    props: {
        messageContent:String,
        messageTime:String,
        userAvatar:String
    },
    methods: {
      openMenu(e) {
        e.preventDefault();
        this.$emit("openMenu", e);
      },
  },
}
</script>

<style scoped>
.avatar {
  width: 30px;
}
.leftRoleBox {
    display: flex;
    align-items: flex-start;
}
.triangle-top-left {
    margin: 10px;
    padding:10px;
    opacity: 1;
    background: #eff3f985;
    border: 1px solid  rgba(166, 194, 227, 0.823);
    border-radius: 5px;
    color: rgb(108, 108, 113);
}
.time{
    font-size: xx-small;
    opacity: 0.5;
    color: rgb(92, 120, 203);
    margin-left: 40px;
}

</style>