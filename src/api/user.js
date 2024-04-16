import request from '../utils/request';

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
    }
};

export default user;