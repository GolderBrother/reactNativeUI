/*
 * @Author: james.zhang 
 * @Date: 2019-05-16 10:35:39 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-05-16 10:40:48
 * @Description: api 请求列表 
 */

import XgHttp from '../config/xgHttp';

/**
 * 聚合数据 API，GET，查询历史上的今天
 * urlPar Object 具体的参数列表如下
 * @param {String} key   应用APPKEY
 * @param {String} v     当前固定值 1.0
 * @param {Number} month 月份，如 10
 * @param {Number} day   月份，如 1
 */
const todayOnHistory = urlPar => XgHttp('GET', '/japi/toh', {
    urlParams: urlPar
});

export default {
    todayOnHistory
}