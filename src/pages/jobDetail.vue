<template>
  <div class="top">
    <jobNavigationBarVue></jobNavigationBarVue>
  </div>

  <div class="jobName" style="display: -webkit-flex;display: flex;">
    <div class="job">{{ data.titleJob }}</div>
    <div class="salary" >{{ data.salary }} / {{ data.salaryUnit }}</div>
  </div>

  <div class="main">
    <div class="title">职位描述</div>
    <div class="content">
        {{ data.jobDescription }}
    </div>
  </div>

  <div class="main">
    <div class="title">任职要求</div>
    <div class="content">
        {{ data.requirementsL }}
    </div>
  </div>

  <div class="main">
    <div class="title">安全小贴士</div>
    <div class="content">
      <p>1.不要轻易透露个人敏感信息，如身份证号码、银行账户信息等。<br>2.警惕任何要求你提前支付费用的兼职机会，这可能是诈骗。<br>3.确保了解清楚薪酬结构，避免虚假承诺或不合理的付款要求。<br>4.避免在不知名或不可靠的网站上发布个人信息或寻找工作。<br>5.告知家人或朋友你的兼职计划，让他们知道你的位置和工作安排。</p>
    </div>
  </div>

  <div class="select">
    <var-select variant="outlined" size="small" placeholder="选择简历" v-model="value13">
      <var-option  v-for="item in items" :key="item.resumeId" :label=item.resumeName :v-model=item.resumeId />
    </var-select>
  </div>
  
    <var-button class="button" color="linear-gradient(to right bottom, #2A82E4, #D0BCFF)"
      text-color="#fff" type="success" @click="handleClick()" >确定投递</var-button>
  
</template>

<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'
import jobNavigationBarVue from '../components/jobNavigationBar.vue';

const value13 = ref()

components:{
    jobNavigationBarVue
}

function handleClick() {
  Snackbar.success('投递成功')
}

const data = {
  jobDescription:'1.时间：中午十一点到一点、下午五点到七点\n2.工作内容：负责客人的出餐以及出餐台的卫生\n3.地点： ',
  requirementsL:'1.善于沟通学习2.有相关经验3.为人老实4.做事认真',
  titleJob:'配送',
  salary:'1',
  salaryUnit:'单'
}
const items = [
  {
    resumeId:'234544',
    resumeName:'后端简历'
  },
  {
    resumeId:'343245',
    resumeName:'所测试岗简历'//最多六个字
  }
]
</script>

<style scoped>
.top{
  margin-bottom: 20px;
  margin-top:80px;
}
.jobName{
  justify-content: center;
  align-items: center;
}
.job{
  font-size:x-large;
  font-weight: bold;
  color: rgb(26, 26, 27);
}
.salary{
    position:absolute;
    right:30px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: large;
    font-weight: bold;
    color: rgba(41, 128, 227, 1);
}
.title{
    margin-bottom: 10px;
    font-size:medium;
    font-weight: bold;
    color: rgb(26, 26, 27);
}
.main{
margin: 10px;
padding:10px;
opacity: 1;
background: rgba(255, 255, 255, 1);
border: 1px solid  rgba(166, 194, 227, 0.823);
border-radius: 5px;
}
.select{
  position: fixed;
  width: 150px;
  bottom:50px;
  left: 20px;
}
.button{
  position: fixed;
  width: 170px;
  right:20px;
  bottom:53px;
  height: 35px;
}
</style>