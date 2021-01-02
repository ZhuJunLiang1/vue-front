import request from '@/utils/request'
export default {
  getPageComment(page,limit,courseId) {
    return request({
      url: `/eduservice/comment/${page}/${limit}`,
      method: 'get',
      params : {courseId}
    })
  },
  addComment(comment) {
    return request({
        url: `/eduservice/comment/save`,
        method: 'post',
        data: comment
      })
  }
}