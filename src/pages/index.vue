<template>
    <div>
      <router-view></router-view>
      <tabbar></tabbar>
    </div>
  </template>
  
  <script>
  import Home from './Home'
 
  import tabbar from '../components/Tabbar/tabbar'
  export default {
    name:'index',
    components:{
      Home,
      tabbar
    }
  }
  </script>
  
  <style>
  
  </style>