<template>
	<div id="main" style="background: #F5F5F5;padding-bottom: 100px">
		<div class="content clear">
			<div class="account-wrapper">
				<div class="account-sidebar">
					<div class="avatar gray-box clear">
						<div class="js-account-sidebar-info">
              <img class="user_img" :src="this.$store.state.memberinfo.avatar">
              <p class="member_p" style="padding-top: 10px">好久不见</p>
              <p class="member_p">
                <label>
                  {{this.$store.state.memberinfo.memberName}}
                  <label v-if="this.$store.state.memberinfo.sex=='f'">女士</label>
                  <label v-if="this.$store.state.memberinfo.sex=='m'">先生</label>
                </label>
              </p>
						</div>
						<div class="box-inner">
							<ul class="account-nav">
						    <router-link :to="{name: 'Order'}" exact tag="li" activeClass="current">
						        <a>我的订单</a>
						    </router-link>
                <router-link :to="{name: 'Address'}" tag="li" activeClass="current">
                  <a>售后服务(待开发)</a>
                </router-link>
                <router-link :to="{name: 'Address'}" tag="li" activeClass="current">
                  <a>我的优惠(待开发)</a>
                </router-link>
                <router-link :to="{name: 'Address'}" tag="li" activeClass="current">
                  <a>账号资料(待开发)</a>
                </router-link>
                <router-link :to="{name: 'Address'}" tag="li" activeClass="current">
                  <a>收货地址(待开发)</a>
                </router-link>

							<!--	<router-link :to="{name: 'Address'}" tag="li" activeClass="current">
                    <a>配送地址</a>
                </router-link>
                <router-link :to="{name: 'Address'}" tag="li" activeClass="current">
                  <a>优惠卷</a>
                </router-link>
                <router-link :to="{name: 'Address'}" tag="li" activeClass="current">
                  <a>账户管理</a>
                </router-link>-->
							</ul>
						</div>
					</div>
				</div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
.user_img{
  border-radius: 50% 50%;
  width: 130px !important;
  height: 130px !important;
}
  #main{
    font-size: 14px;
  }
  .member_p{
    font-family: OPPOfont2;
  }

.content{
	clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
}
.account-wrapper{
	position: relative;
    min-height: 550px;
  top: 40px;
}
.account-sidebar{
	position: absolute;
    left: 0;
    top: 0;
    width: 210px;

}
.gray-box, .gray-btn-menu-on:hover{
	background: #FFF;
}
.gray-box{
	overflow: hidden;
   /* border: 1px solid #D1D1D1;
    border-color: rgba(0,0,0,.14);*/
   /* border-radius: 8px;*/
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.account-sidebar .avatar{
	padding-top: 20px;
    margin: 0 0 20px;
   /* border-radius: 10px;*/
    text-align: center;
  padding-bottom: 20px;
}
.account-sidebar .avatar img{
	width: 168px;
    height: 168px;
    display: inline-block;
}
.account-sidebar .account-nav{
	padding-top: 15px;
  font-family: OPPOfont1;
}
.account-sidebar .account-nav li{
	position: relative;
    height: 48px;
   /* border-top: 1px solid #EBEBEB;*/
    line-height: 48px;
}
.account-sidebar .account-nav .current{
	border: none;
}
.account-sidebar .account-nav a{
	display: block;
    height: 48px;
    padding: 0 30px;
    color: #666;
    -moz-transition: none;
    -webkit-transition: none;
    transition: none;
}
.account-sidebar .account-nav .current a, .account-sidebar .account-nav a:hover{
	position: relative;
    top: -1px;
    z-index: 1;
    height: 50px;
   /* background-color: #98AFEE;*/
    line-height: 50px;
    color: #D5001C;
}
.account-content{
	margin-left: 230px;
}
.gray-box .title{
	height: 60px;
    padding: 0 10px 0 28px;
    background: #F5F5F5;
   /* background: linear-gradient(#FFF,#F5F5F5);*/
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    line-height: 60px;
    color: #646464;
}
.gray-box .pre-title{
	position: relative;
    z-index: 2;
}
.gray-box .title h2{
	font-size: 18px;
    font-weight: 400;
    color: #626262;
}
</style>
