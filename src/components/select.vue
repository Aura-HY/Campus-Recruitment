<template>
  <div class="select">
    <var-select placeholder="筛选兼职类型" size="small" variant="outlined" validate-trigger="" chip   v-model="value10" >
            <var-option 
              v-for="item in items" 
              :key="item.paramId"
              :label=item.paramMeaning 
              @click="sendId(item.paramId)"
              />
    </var-select>
</div>
</template>

<script name="select">
import { ref } from 'vue'
import user from '../api/user'

export default{
  data(){
    return{
      items:[],
      value10 : ref([])
    }
  },
  methods:{
    
    async queryType() {
            const items = await user.getTypeList();
            this.items = items;
    },
    sendId(paramId){
      this.$emit('send-id',paramId);
    }
  },
  created(){
    this.queryType()
  }
}
</script>

<style>
.select{
  margin-top:3%;
}
</style>