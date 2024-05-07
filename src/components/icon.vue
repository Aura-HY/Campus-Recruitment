<template>
    <i class="iconfont" :class="[iconclass, extraclass]"></i>
  </template>
  
  <script>
  var map = {
    notice: 'icon-xiaoxi1-copy'
   
  };
  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      extraclass: {
        type: String,
        default: '',
      },
    },
    computed: {
      iconclass() {
        return map[this.type];
      },
    },
  };
  </script>
  
  <style scoped>
   
  @import '//at.alicdn.com/t/c/font_4464063_aok80datchm.css';
  </style>