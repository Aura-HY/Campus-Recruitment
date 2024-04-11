<template>
    <div class="fruit">
        <li v-for="item in fruit" :key="id">{{ item }}</li>
        <img :src='item.imgurl'>
    </div>

</template>

<script cript>
const { id } = require('element-demo');
const { VueElement } = require('vue');

    const fruit = new Vue({
        el:'#fruit',
        data:{
            fruit:[{ id:1 , name:'西瓜', imgurl:'./public/ad.png'},{id:2 , name:'香蕉', imgurl:'./public/ad.png'},{id:3 , name:'菠萝', imgurl:'./public/ad.png'}]
        }
    })


</script>