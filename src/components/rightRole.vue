<template>
    <div class="rightRoleBox">
        
    <div class="triangle-top-right">
        
        <div class="triangle-top-right2" @contextmenu.prevent="openMenu($event)"
      v-html="messageContent"></div>
        
    </div>
    </div>
    <div class="time">{{ messageTime }}</div>
</template>

<script>
export default {
  emits: ['openMenu'],
    props: {
        messageContent:String,
        messageTime:String
    },
    methods: {
      openMenu(e) {
        this.$emit("openMenu", e);
      },
  },
}
</script>

<style scoped>
.rightRoleBox {
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
}
.triangle-top-right {
    margin: 10px;
    padding:10px;
    opacity: 1;
    background: #569de9cf;
    border: 1px solid  rgba(137, 177, 222, 0.823);
    border-radius: 5px;
    color: aliceblue;
}
.time{
    font-size: xx-small;
    opacity: 0.5;
    color: rgb(92, 120, 203);
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
}

</style>