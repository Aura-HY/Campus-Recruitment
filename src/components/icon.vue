<template>
    <i class="iconfont" :class="[iconclass, extraclass]"></i>
</template>

<script>
var map = {
    massenge: 'icon-xiaoxi',
    massenge1: 'icon-xiaoxi1'
};
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        extraclass: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconclass() {
            return map[this.type];
        }
    }
};
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4464063_1d7u273nktg.css';
</style>
