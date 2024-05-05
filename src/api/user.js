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
    },
    //添加收藏的职位到收藏表
    addCollect(userId,jobId){
        return request(`${moduleUrl}/addCollect`,{ userId , jobId });
    },
    //添加举报的职位到举报表
    addReport(userId,jobId){
        return request(`${moduleUrl}/addReport`,{ userId , jobId });
    },
    //用户注册
    addUser(userId,password,phoneNumber,nickname,identityParam){
        return request(`${moduleUrl}/addUser`,{ userId, password, phoneNumber, nickname, identityParam })
    },
    //获取用户密码
    getUserPassword(userId){
        return request(`${moduleUrl}/getUserPassword`,{ userId });
    },
    //获得当前登录用户的简历列表
    getResume(userId){
        return request(`${moduleUrl}/getResume`,{ userId });
    },
    //投递简历
    addSendResume(resumeId, userId, recruitersId){
        return request(`${moduleUrl}/addSendResume`,{ resumeId, userId, recruitersId });
    },
    //上传头像
    uploadAvatar(userAvatar){
        return request(`${moduleUrl}/uploadAvatar`,{ userAvatar });
    }
};

export default user;