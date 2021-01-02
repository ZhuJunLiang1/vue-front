import request from '@/utils/request'

export default {
  //登录
  submitLogin(userInfo) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data:userInfo
    })
  },
  getLoginInfo() {
      return request({
        url: `/educenter/member/getUserInfo`,
        method: 'get'
      })
  }
}