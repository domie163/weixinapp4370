import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import huowucaigou from '@/views/modules/huowucaigou/list'
    import news from '@/views/modules/news/list'
    import yuangong from '@/views/modules/yuangong/list'
    import aboutus from '@/views/modules/aboutus/list'
    import gongyingshang from '@/views/modules/gongyingshang/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import zaixiangoutong from '@/views/modules/zaixiangoutong/list'
    import shangpinruku from '@/views/modules/shangpinruku/list'
    import huowupandian from '@/views/modules/huowupandian/list'
    import gongyingshanghuowu from '@/views/modules/gongyingshanghuowu/list'
    import systemintro from '@/views/modules/systemintro/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import shangpinchuku from '@/views/modules/shangpinchuku/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/huowucaigou',
        name: '货物采购',
        component: huowucaigou
      }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/gongyingshang',
        name: '供应商',
        component: gongyingshang
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/zaixiangoutong',
        name: '在线沟通',
        component: zaixiangoutong
      }
      ,{
	path: '/shangpinruku',
        name: '商品入库',
        component: shangpinruku
      }
      ,{
	path: '/huowupandian',
        name: '货物盘点',
        component: huowupandian
      }
      ,{
	path: '/gongyingshanghuowu',
        name: '供应商货物',
        component: gongyingshanghuowu
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/shangpinfenlei',
        name: '商品分类',
        component: shangpinfenlei
      }
      ,{
	path: '/shangpinchuku',
        name: '商品出库',
        component: shangpinchuku
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
