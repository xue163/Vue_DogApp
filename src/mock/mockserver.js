import Mock from 'mockjs'
import apiData from './data.json'
import homeData from './newHomePage.json'

Mock.mock('/msite', {code:0, data:homeData})//图片轮播
Mock.mock('/class', {code:0, data:apiData.categorys})//分类列表
Mock.mock('/brand', {code:0, data:apiData.brand})//品牌
