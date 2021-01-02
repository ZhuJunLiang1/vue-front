import request from '@/utils/request'
export default {
  //分页课程查询
  pageList(page,limit,searchObj) {
    return request({
      url: `/eduservice/coursefront/pageList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },
  getCrouseInfo(courseId) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  },

}