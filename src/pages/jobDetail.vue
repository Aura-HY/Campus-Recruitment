<template>
  <div class="top">
    <NavigationBarVue 
    title="职位详情" 
    select1="收藏" 
    select2="举报" 
    @cellClick1="collect" 
    @cellClick2="report"
    />
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
      <var-option  @click="sendResumeId(item.resumeId)" v-for="item in items" :key="item.resumeId" :label=item.resumeName :v-model=item.resumeId />
    </var-select>
  </div>
  
    <var-button class="button" color="linear-gradient(to right bottom, #2A82E4, #D0BCFF)"
      text-color="#fff" type="success" @click="handleClick()" >确定投递</var-button>
  <!-- //点击投递，将简历id传送至后端，应该同时也要将当前职位的id传送 -->
</template>

<script>
import { ref,onMounted } from 'vue'
import { Snackbar } from '@varlet/ui'
import NavigationBarVue from '../components/navigationBar.vue';
import user from '../api/user'

export default {
  name: 'jobDetail',
  data(){
    return{
      selectedObject:{},
      currentResume : null,
      items: [],
      value13:ref(),
      currentTime: '',
      data:{
        jobId: this.$route.params.jobId,
        titleJob: '',
        jobDescription: '',
        requirementsL: '',
        salary: '',
        salaryUnit: '',
        recruitersId: ''
      },
      job:{
        userId:localStorage.getItem('userId'),
        jobId:this.$route.params.jobId,
      }
    };
  },
  created() {
    this.getResume()
    this.getJobDetail(this.$route.params.jobId)
  },
  mounted() {
    this.getCurrentTime();
  },
  updated() {},
  methods: {
    getCurrentTime() {
      const date = new Date();
      this.currentTime = date.toLocaleString(); // 可以根据需要使用不同的Date对象方法来格式化时间
    },
        async handleClick() {
          if(this.currentResume!=null){
            Snackbar.success('投递成功');
            user.addSendResume(this.currentResume,this.job.userId,this.data.jobId,this.data.recruitersId,this.currentTime);
          }else{
            Snackbar.error('请选择简历');
          }
        },
        //将选择的当前简历的id赋值给currentResume，方便之后的的传送
        sendResumeId(resumeId){
          this.currentResume=resumeId;
        },
        
        //添加收藏
        async collect(){
          Snackbar.success('收藏成功');
          user.addCollect(this.job.userId,this.job.jobId);
        },

        report(){
          Snackbar.success('举报成功');
          user.addReport(this.job.userId,this.job.jobId,this.currentTime);
        },
        share(){
          console.log(this.data.jobId);
        },
        async getResume(){
          const userId = localStorage.getItem('userId');
          const resume = await user.getResume(userId);
          this.items = resume;
        },
        //获取当前职位的相关信息
        async getJobDetail(jobId) {
            const items = await user.getJobDetail(jobId);
            this.data = items[0];
        },
    },
    components:{
      NavigationBarVue
    },

}

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