import request from '../utils/request';
//request2是没有返回值的，可以用于添加等可以不要返回值的，但目前有报错，但能成
import request2 from '../utils/request2';
const moduleUrl = '/user';

const user = {
    // 查询某个用户的详细信息,这是模版
    // getUserInfo(data) {
    //     return request(`${moduleUrl}/getUserInfo`, data);
    // }

    //首页渲染
    getJobList(){
        return request(`${moduleUrl}/home/getJobList`);
    },
    //获取可选的职位类型
    getTypeList(){
        return request(`${moduleUrl}/home/getTypeList`);
    },
    //获取选择类型后的
    getTypeJob(typeId){
        return request(`${moduleUrl}/home/getTypeJob`,typeId);
    },
    //添加收藏的职位到收藏表
    addCollect(userId,jobId){
        request2(`${moduleUrl}/addCollect`,{ userId , jobId });
    },
    //添加举报的职位到举报表
    addReport(userId,jobId){
        request2(`${moduleUrl}/addReport`,{ userId , jobId });
    },
};

export default user;