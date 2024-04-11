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
    }
};

export default user;