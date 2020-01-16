<template>
<div>
<nav class="navbar navbar-inverse">
      <div class="container-fluid" >
        <div id="navbar">
          <ul class="nav navbar-nav">
            <li class="active"><router-link :to="{path:'/'}" class="navbar-brand"><span class="glyphicon glyphicon-home" style="margin-right:5px" aria-hidden="true"></span>首页</router-link></li>
            <li><a href="#about">开源软件</a></li>
            <li><a href="#contact">问答</a></li>
			<li><a href="#contact">动弹</a></li>
			<li><a href="#contact">博客</a></li>
			<li><a href="#contact">翻译</a></li>
			<li><a href="#contact">资讯</a></li>
			<li><a href="#contact">码云</a></li>
			<li><a href="#contact">众包</a></li>
			<li><a href="#contact">活动</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-left" >
            <div class="input-group">
			  <input type="text" class="form-control" style="width:300px" placeholder="在 48586 款开源软件中搜索">
			  <span class="input-group-btn">
				<button class="btn btn-primary" type="button">搜索</button>
			  </span>
			</div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">投递新闻/软件</a></li>
			<li><a class="navbar-brand" href="#"><span class="glyphicon glyphicon-bell" style="margin-right:5px" aria-hidden="true"></span></a></li>
            <li class="dropdown">
              <a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
			  <img src="static/50x50.jpg" style="height:25px;width:25px" alt="..." class="img-circle"><span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><router-link :to="{path:'/userspace'}" >个人主页</router-link></li>
                <li><a href="#">发帖提问</a></li>
                <li><router-link :to="{path:'/artical/new'}" >写博客</router-link></li>
                <li><a href="#">我的收藏</a></li>
                <li><a href="#">个人资料修改</a></li>
				<li><a href="#">退出</a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
	<div class="container"style="width:1300px">
		<router-view></router-view>
	</div>
	<footer class="footer">
      <div class="container">
        <p class="text-muted" style="margin:20px 0">© 2020 GitHub, Inc.Terms Privacy Security Status Help Contact GitHub Pricing API Training Blog About</p>
      </div>
    </footer>
</div>  
</template>

<script>
import DashBoard from './components/DashBoard'
import NavBox from './components/NavBox'
import PersonalSpace from './components/PersonalSpace'
import ArticalNew from './components/ArticalNew'
import ArticalDetail from './components/ArticalDetail'
export default {
  name: 'App',
  components: {
    'dashboard': DashBoard,
	'nav-box': NavBox,
	'personal-space': PersonalSpace,
	'artical-new': ArticalNew,
	'artical-detail': ArticalDetail
  }
}
</script>

<style>
.text{
	max-width:100%;
}

.footer {
	bottom:0;
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
	position: absolute;
}
.text-muted{
	color: #9b9b9b;
}
</style>
