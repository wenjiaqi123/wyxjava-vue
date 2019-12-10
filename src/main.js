// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import SlideVerify from 'vue-monoplasty-slide-verify';
import domain from '@/tools/domain'
import Base64 from "js-base64";
import Md5 from "js-md5";

//关闭生产模式下给出的提示
Vue.config.productionTip = false

//全局配置axios
axios.defaults.baseURL="http://www.wyxjava.com:8001"
// axios.defaults.baseURL = "http://localhost:8001/"
axios.defaults.headers.common['Authorization'] = 'Token'
// 解决 options 预请求
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
};

//添加原型对象,组件中可以直接使用this.axios
Vue.prototype.axios = axios;
//全局定义,使用的时候用 this.qs.stringfy(data)
Vue.prototype.qs = qs;
//引入加密
Vue.prototype.Base64 = Base64;
Vue.prototype.Md5 = Md5;
Vue.prototype.domain = domain;

//使用IView样式
Vue.use(ViewUI)
//使用功能滑块验证
Vue.use(SlideVerify)



//iView 通知设置
Vue.prototype.$Notice.config({
  top: 300,
  duration: 3
});

//创建一个 Vue 对象
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
