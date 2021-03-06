import Vue from 'vue'
import Router from 'vue-router'
import "../assets/css/reset.css"
import "../assets/css/header.css"
import  Shop from "../views/shop/shop"
import Item from "../views/item"
import Cart from "../views/cart"
import Checkout from "../views/checkout"
import Payment from  "../views/Payment"
import Account from "../views/account"
import Order from '../views/account/order'
import Address from '../views/account/address'

import homes from '../views/homes'

import QueryGoods from '../views/shop/queryGoods'
import ShopInfo from '../views/shop/shopInfo'
import GoodsParameter from '../views/shop/goodsParameter'
import BuyGoods from '../views/shop/buyGoods'

import  shopsb from "../views/shopsb"

/*会员*/
import memLogin from '../views/member/memLogin'
import memUser from '../views/member/memUser'

/*订单详细信息*/
import orderInfo from '../views/account/orderInfo'
/*除了手机之外的商品*/
import AllOtherGoods from '../views/shop/AllOtherGoods'

import pay from '../views/pay'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name:"homes",
      component: homes,
      meta:{
        title:'C-Z(中国)'
      }
    },
    {
      path: '/Shop',
      name:"Shop",
      component: Shop,
      meta:{
        title:'全部机型(中国大陆)'
      }
    },
    {
      path: '/shopsb',
      name:"shopsb",
      component: shopsb,
    },
    {
      path: '/queryGoods',
      name:"QueryGoods",
      component: QueryGoods,
      meta:{
        title:'搜索结果(中国大陆)'
      }
    },
    {
      path: '/ShopInfo',
      name:"ShopInfo",
      component: ShopInfo,
      meta:{
        title:'商品详情-Apple(中国大陆)'
      }
    },
    {
      path: '/GoodsParameter',
      name:"GoodsParameter",
      component: GoodsParameter,
      meta:{
        title:'商品参数-Apple(中国大陆)'
      }
    },
    {
      path: '/BuyGoods',
      name:"BuyGoods",
      component: BuyGoods,
      meta:{
        title:'购买'
      }
    },
    /*会员登录*/
    {
      path: '/memLogin',
      name:"memLogin",
      component: memLogin,
      meta:{
        title:'登录'
      }
    },
    {
      path: '/memUser',
      name:"memUser",
      component: memUser,
      meta:{
        title:'绑定安全手机'
      }
    },



    {
      path: '/item',
      name:"Item",
      component: Item
    },
    {
      path: '/cart',
      name:"Cart",
      component: Cart,
      meta:{
        title:'购物车'
      }
    },
    {
      path: '/checkout',
      name:"Checkout",
      component: Checkout,
      meta:{
        title:'清单'
      }
    },
    {
      path: '/payment',
      name:"Payment",
      component: Payment,
      meta:{
        title:'支付'
      }
    },
    /*----------------------除了手机之外的商品--*/
    {
      path: '/AllOtherGoods',
      name:"AllOtherGoods",
      component: AllOtherGoods,
      meta:{
        title:'全部商品'
      }
    },
    {
      path: '/pay',
      name:"pay",
      component: pay,
      meta:{
        title:'支付成功'
      }
    },
    {
      path: '/account',
      component: Account,
      meta:{
        title:'个人中心'
      },
      children: [
        {
          path: '/Order',
          name: 'Order',
          component: Order,
          meta:{
            title:'个人中心-订单'
          },
          children:[

          ]
        },
        {
          path: '/orderInfo',
          name: 'orderInfo',
          component: orderInfo,
          meta:{
            title:'个人中心-订单详细信息'
          },
        },
        {
          path: '/address',
          name: 'Address',
          component: Address
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }

  ]
})
