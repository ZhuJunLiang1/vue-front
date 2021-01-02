import request from '@/utils/request'

export default {
  //生成订单
  createOrder(courseId) {
    return request({
      url: `/orderservice/order/createOrder/${courseId}`,
      method: 'post'
    })
  },
  //根据订单号获取订单信息
  getOrderInfo(orderNo) {
    return request({
      url: `/orderservice/order/getOrderInfo/${orderNo}`,
      method: 'get'
    })
  },
  //生成二维码方法
  createNative(orderNo) {
    return request({
      url: `/orderservice/paylog/createNative/${orderNo}`,
      method: 'get'
    })
  },
  //查询订单状态
  queryOrderStatus(orderNo) {
    return request({
      url: `/orderservice/paylog/queryOrderStatus/${orderNo}`,
      method: 'get'
    })
  }
}