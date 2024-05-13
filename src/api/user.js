import request from '../utils/request';
const moduleUrl = '/user';
import fileRequest from '../utils/fileRequest';

const user = {
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
    addReport(userId,jobId,reportTime){
        return request(`${moduleUrl}/addReport`,{ userId , jobId, reportTime });
    },
    //用户注册
    addUser(userId,password,identityParam){
        return request(`${moduleUrl}/addUser`,{ userId, password, identityParam, userAvatar })
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
    addSendResume(resumeId, userId, jobId, recruitersId, time){
        return request(`${moduleUrl}/addSendResume`,{ resumeId, userId, jobId, recruitersId, time });
    },
    //上传头像
    uploadAvatar(userAvatar){
        return fileRequest(`${moduleUrl}/uploadAvatar`,userAvatar);
    },
    //获取职位详情
    getJobDetail(jobId){
        return request(`${moduleUrl}/getJobDetail`,{ jobId });
    },
    //获取通知列表
    getNotice(){
        return request(`${moduleUrl}/getNotice`);
    },
    getMessageList(recruitersId){
        return request(`${moduleUrl}/getMessageList`,{ recruitersId });
    },
    addMessage(content,jobSeekerId,recruitersId,messageTime){
        return request(`${moduleUrl}/addMessage`,{ content, jobSeekerId, recruitersId, messageTime });
    },
    getMessageMan(userId){
        return request(`${moduleUrl}/getMessageMan`,{ userId });
    },
    getUserName(userId){
        return request(`${moduleUrl}/getUserPassword`,{ userId });
    },
    //撤回消息
    deleteMessage(messageId){
        return request(`${moduleUrl}/deleteMessage`,{ messageId });
    },



















    //我的 的区域 的后端
    
    //获得当前登录用户的简历列表
    getUserResumes(userId){
        return request(`${moduleUrl}/getUserResumes`, { userId });
    },

    //获取用户简历的详细信息
    getUserResumesInfo(resumeId){
        return request(`${moduleUrl}/getUserResumesInfo`, { resumeId });
    },
};

export default user;