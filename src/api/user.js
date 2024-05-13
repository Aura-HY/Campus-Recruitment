import request from '../utils/request';
const moduleUrl = '/user';

const user = {
    // 查询某个用户的详细信息,这是模版
    // getUserInfo(data) {
    //     return request(`${moduleUrl}/getUserInfo`, data);
    // }

    //首页渲染
    getJobList() {
        return request(`${moduleUrl}/home/getJobList`);
    },
    //获取可选的职位类型
    getTypeList() {
        return request(`${moduleUrl}/home/getTypeList`);
    },
    //获取选择类型后的
    getTypeJob(typeId) {
        return request(`${moduleUrl}/home/getTypeJob`, typeId);
    },
    //添加收藏的职位到收藏表
    addCollect(userId, jobId) {
        return request(`${moduleUrl}/addCollect`, { userId, jobId });
    },
    //添加举报的职位到举报表
    addReport(userId, jobId) {
        return request(`${moduleUrl}/addReport`, { userId, jobId });
    },
    //用户注册
    addUser(userId, password, phoneNumber, mailbox, nickname, identityParam) {
        return request(`${moduleUrl}/addUser`, { userId, password, phoneNumber, mailbox, nickname, identityParam });
    },
    //获取用户密码
    getUserPassword(userId) {
        return request(`${moduleUrl}/getUserPassword`, { userId });
    },
    //获得当前登录用户的简历列表
    getResume(userId) {
        return request(`${moduleUrl}/getResume`, { userId });
    },
    addSendResume(resumeId, userId, recruitersId) {
        return request(`${moduleUrl}/addSendResume`, { resumeId, userId, recruitersId });
    },

    //我的 的区域 的后端

    //获得当前登录用户的简历列表
    getUserResumes(userId) {
        return request(`${moduleUrl}/getUserResumes`, { userId });
    },

    //获取用户简历的详细信息
    getUserResumesInfo(resumeId) {
        return request(`${moduleUrl}/getUserResumesInfo`, { resumeId });
    },
    //统计用户收藏的简历份数总数
    favoritesCollectionsSum(data) {
        return request(`${moduleUrl}/favoritesCollectionsSum`, data);
    },
    //统计用户沟通过的聊天总数
    sessionSum(data) {
        return request(`${moduleUrl}/sessionSum`, data);
    },
    //统计用户已投简历总数
    resumeTrueSum(data) {
        return request(`${moduleUrl}/resumeTrueSum`, data);
    },
    //统计用户待面试总数
    interviewedSum(data) {
        return request(`${moduleUrl}/interviewedSum`, data);
    },
    //读取用户的昵称和头像
    getUserBasic(data) {
        return request(`${moduleUrl}/getUserBasic`, data);
    },
    //添加用户新简历
    addNewResumeInfo(data){
        return request(`${moduleUrl}/addNewResumeInfo`, data);
    },
    //读取用户收藏的职位
    getUserFavoritesJob(data){
        return request(`${moduleUrl}/getUserFavoritesJob`, data);
    }
};

export default user;
