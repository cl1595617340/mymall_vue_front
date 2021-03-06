import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let state={


  /*分辨率提示*/
  Resolutionprompt:true,
  /*定时器的分*/
  secondsbb:0,
  /*定时器的秒*/
  minutesbb:0,

  //判断用户是购物车进的清单还是直接购买进入的清单,0是购物车,1是购买
  isCarOrOne:-1,
  //存放购物车的数据
  carPanelData: [],
  //直接购买商品存放的数据
  carPanelDataOne:[],
  /*登录的用户信息*/
  memberinfo: {
    memberName:"",
    sex:"",
  },
  //保存用户登录前的页面路径
  memberloginUrl:"",
  //保存用户退出前的页面路径
  memberExitUrl:"",

  /*商品名，给路由title的*/
  goodsname:"1233",
  //地址的数据
  receiveInfo: [{
    'name': '王某某',
    'phone': '13811111111',
    'areaCode': '010',
    'landLine': '64627856',
    'provinceId': 110000,
    'province': '北京市',
    'cityId': 110100,
    'city': '市辖区',
    'countyId': 110106,
    'county': '海淀区',
    'add': '上地十街辉煌国际西6号楼319室',
    'default': true,
    'checked': true
  },{
    'name': '李某某',
    'phone': '13811111111',
    'areaCode': '010',
    'landLine': '64627856',
    'provinceId': 110000,
    'province': '北京市',
    'cityId': 110100,
    'city': '市辖区',
    'countyId': 110106,
    'county': '海淀区',
    'add': '上地十街辉煌国际东6号楼350室',
    'default': false,
    'checked': false
  }],
  //弹出警告框
  maxOff:false,
  //商品组件是否显示
  carShow: false,
  //点击购物车小球的数据
  ball: {
    show: false,
    el: null,
    img: ''
  },
  orderData:[],

  navStyle:'position: fixed',


  /*显示头部*/
  headerStyle:true,
  /*显示底部*/
  footerStyle:true,
}
let mutations ={


  /*提示分辨率的提示只提示一次*/
  changResolutionprompt(state){
    state.Resolutionprompt = false;
  },

  /*订单的定时器*/
  changsecondsbb(state){
    if (state.secondsbb==0&&state.minutesbb==0){
      alert("取消")
    }
  },

  changNav(state){
    state.navStyle = 'position: relative';
  },
  changNav2(state){
    state.navStyle = 'position: fixed;display:block';
  },
  changNav3(state){
    state.navStyle = 'z-index: 100; display: block;';
  },


  /*使头部消失*/
  changheaderStyle(state,i){
    if (i==0){
      state.headerStyle = false;
    } else {
      state.headerStyle = true;
    }

  },
  /*使底部消失*/
  changfooterStyle(state,i){
    if (i==0){
      state.footerStyle = false;
    } else {
      state.footerStyle = true;
    }

  },

  //加入购物车
  addCarPanelData (state,data) {
    // data[0] = 表示存入的数据,data[1]表示存入的数量
    let bOff = true
    //判断是否是第一次加入
    state.carPanelData.forEach((goods) => {
      if(goods.sku_id === data[0].sku_id && goods.spec_json.show_name === data[0].spec_json.show_name){
        goods.count += data[1]
        if(goods.count>goods.limit_num){
          goods.count -= data[1]
          //加入的时候显示
          state.maxOff = true
          bOff = false
          return
        }
        state.ball.el = event.path[0]
        state.ball.show = true
        state.ball.img = data[0].ali_image
        bOff = false
        state.carShow = true
      }
    })
    if(bOff){
      let goodsData = data[0]
      Vue.set(goodsData,'count',data[1])
      //第一次加入的时候就设置状态
      Vue.set(goodsData,'checked',true)
      state.carPanelData.push(goodsData)
      /*for (const argument of state.carPanelData) {
        console.log("-----------"+argument)
      }
*/
      state.carShow = true
      state.ball.el = event.path[0]
      state.ball.show = true
      state.ball.img = data[0].ali_image
    }
  },
  //删除购物车功能(id相同的时候把购物车数据删除)
  delCarPanelData (state,item) {

    state.carPanelData.forEach((goods,index) => {
      if(goods.sku_id === item.sku_id && goods.spec_json.show_name === item.spec_json.show_name){
        state.carPanelData.splice(index,1)
        return
      }
    })
  },
 //更改支付状态
  payNow (state,id) {
    state.orderData.forEach((order,index) => {
      if(order.orderId === id){
        order.isPay = true
        return
      }
    })
  },
  //添加商品根据id->cart组件
  plusCarPanelData (state,id){
    state.carPanelData.forEach((goods,index) => {
      if(goods.sku_id === id){
        if(goods.count === goods.limit_num) return
        goods.count ++
        return
      }
    })
  },
  //减少商品根据id->cart组件
  subCarPanelData (state,id) {
    state.carPanelData.forEach((goods,index) => {
      if(goods.sku_id === id){
        if(goods.count === 1) return
        goods.count --
        return
      }
    })
  },
  //选中所有的按钮和非选择所有的按钮
  CheckAllbtn(state,checked){
    state.carPanelData.forEach((goods,index) => {
      goods.checked = !checked;
  })
  },
  //更改商品的状态，是否被选中不要的，因为有添加的属性
  Checked(state,id){
        //判断商品是否被选中
    state.carPanelData.forEach((goods,index)=>{
      if(goods.sku_id === id){
        goods.checked = !goods.checked;
      }
    })
  },
  alertPrompt (state) {
    state.maxOff = true
  },
  closePrompt (state) {
    state.maxOff = false
  },
  showCar (state) {
    state.carShow = true
  },
  hideCar (state) {
    state.carShow = false
  },
  delCheckGoods (state) {
    let i = state.carPanelData.length
    while(i--){
      if(state.carPanelData[i].checked){
        state.carPanelData.splice(i,1)
      }
    }
  },
  sumbitReceive(state,data){
    //把所有的默认状态都取消掉
    if(data.default){
            state.receiveInfo.forEach((item,index)=>{
               item.default = false
            })
    }
   state.receiveInfo.push(data);
  },
  //提交订单数据
  submitOrder(state,data){
       state.orderData.unshift(data); //订单
    if (state.isCarOrOne==0){
      //提交之后吧，购物车选中的数据清除，
      let i = state.carPanelData.length; //判断选中结算的清除
      while(i--){
        if(state.carPanelData[i].checked){
          state.carPanelData.splice(i,1)
        }
      }
    }else {
      /*let i = state.carPanelDataOne.length; //判断选中结算的清除
      while(i--){
        if(state.carPanelDataOne[i].checked){
          state.carPanelDataOne.splice(i,1)
        }
      }*/
    }

  }
}

let actions ={

}
let goodsb = {

}

let getters ={
  totleCount(state){
    //返回数量
    let count = 0;
    state.carPanelData.forEach((goods,index)=>{
      count+= goods.count ;
    })
       return count;
  },
  totlePrice (state) {
    let total = 0
    state.carPanelData.forEach((goods) => {
      total += goods.price * goods.count
    })
    return total
  },
  carShow(state){
    return state.carShow
  },
  ball(state) {
    return state.ball
  },
  //全选全不选对所有的状态取反
  checkAll(state){
     //获取按钮本身的状态
    let check = true;
    state.carPanelData.forEach((goods) => {
             if(!goods.checked){
               check = false
             }
    })
    return check;
  },
  checkedCount (state) {
    let count = 0
    state.carPanelData.forEach((goods) => {
      if(goods.checked)
        count += goods.count;
    })
    return count
  },
  checkedPrice (state) {
    let total = 0
    state.carPanelData.forEach((goods) => {
      if(goods.checked)
        total += goods.price * goods.count
    })
    return total
  },
  /*拿到直接购买商品的价钱*/
  getBuyGoodsPrice(state){
    let price = 0;
    state.carPanelDataOne.forEach((goods) => {
      if(goods.checked)
        price += goods.price * goods.count
    })
    return price
  },

  checkedCarPanelData (state) {
    let checkedCarPanelData = []
    state.carPanelData.forEach((goods) => {
      if(goods.checked)
        checkedCarPanelData.push(goods);
    })
    return checkedCarPanelData
  },

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


