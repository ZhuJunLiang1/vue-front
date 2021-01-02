import request from '@/utils/request'
export default {
  //分页讲师查询
  getTeacherPagelist(page,limit) {
    return request({
      url: `/eduservice/teahcerfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  getTeacherInfoById(id) {
    return request({
      url: `/eduservice/teahcerfront/getTeacherInfoById/${id}`,
      method: 'get'
    })
  }
}