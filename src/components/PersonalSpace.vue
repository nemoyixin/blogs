<template>
<div class="row">
	<div class="col-md-4">
		<div class="head-shot" style="text-align:center">
			<img src="static/download.svg" alt="..." style="width:140px;height:140px" class="img-circle">
		</div>
		<div class="username" style="text-align:center">
			<h3>Yixin_Nemo</h3>
		</div>
		<div class="account-setting-btn-wraper" style="text-align:center">
			<button type="button" class="btn btn-default" >
			  <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> 账号设置
			</button>
		</div>
		<div class="user-statistic" style="margin-top:10px;text-align:center">
			<button type="button" class="btn btn-default">积分<span class="badge">231</span></button>
			<button type="button" class="btn btn-default">粉丝<span class="badge">11</span></button>
			<button type="button" class="btn btn-default">关注<span class="badge">11</span></button>
			<button type="button" class="btn btn-default">收藏夹<span class="badge">63</span></button>
		</div>
		<div class="action" style="margin-top:10px;text-align:center">
			<button type="button" v-on:click="writeArtical" class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span> 写博客</button>:
			<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-folder-open"></span> 草稿箱<span class="badge">11</span></button>
		</div>
		<div class="technic-radar" style="margin-top:20px;padding: 0px 10px">
			<h4>技术雷达</h4>
			<div class="technic-list">
				<div class="technic-item">
					<b>专长领域:</b>   WEB开发, 服务器端开发
				</div>
				<div class="item">
					<b>开发平台:</b>   Java EE, Python, JavaScript
				</div>
			</div>
		</div>
		<div class="summary" style="margin-top:20px;padding: 0px 10px">
			<h4>统计</h4>
			<div class="summary-list">
				<div class="summary-item">
					今日访问： 0
				</div>
				<div class="summary-item">
					昨日访问： 3
				</div>
				<div class="summary-item">
					本周访问： 7
				</div>
				<div class="summary-item">
					本月访问： 19
				</div>
				<div class="summary-item">
					所有访问： 712
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-8">
		<div class="bs-example bs-example-tabs" data-example-id="togglable-tabs">
		<ul id="myTabs" class="nav nav-tabs" role="tablist">
		  <li role="presentation" class="dropdown active">
			<a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents" aria-expanded="false">全部博文 <span class="caret"></span></a>
			<ul class="dropdown-menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents">
			  <li><a href="#dropdown1" role="tab" id="dropdown1-tab" data-toggle="tab" aria-controls="dropdown1">NIO</a></li>
			  <li><a href="#dropdown2" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">JVM</a></li>
			  <li><a href="#dropdown2" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">线程安全</a></li>
			  <li><a href="#dropdown2" role="tab" id="dropdown2-tab" data-toggle="tab" aria-controls="dropdown2">前端</a></li>
			</ul>
		  </li>
		  <li role="presentation" ><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">热门博文</a></li>
		  <li role="presentation" class=""><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">动态</a></li>
		  <li role="presentation" class=""><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">动弹</a></li>
		</ul>
		<div id="myTabContent" class="tab-content" style="margin-top:25px">
			<div class="artical-wraper">
				<div class="artical-title"><a href="#"><h4 class="text">如何设计一个安全的对外接口</h4></a></div>
				<div class="artical-description">前言 最近有个项目需要对外提供一个接口，提供公网域名进行访问，而且接口和交易订单有关，所以安全性很重要；这里整理了一下常用的一些安全措施以及具体如何去实现。 安全措施 个人觉得安全...</div>
				<div class="artical-extra">
					<div class="horizontal-list">
						<div class="item" style="margin-top:10px">
							<a href="#" style="margin-right:20px">Redis</a>
							<a href="#" style="margin-right:20px">OpenSSL</a>
							<a href="#" style="margin-right:20px">Snowflake</a>
							<a href="#" style="margin-right:20px">Lua</a>
							<a href="#" style="margin-right:20px">Guava</a>
						</div>
					</div>
					<div class="horizontal-list">
						<div class="item" style="padding:5px 0">
							<a href="#" style="margin-right:20px">Nio</a>
							<a href="#" style="margin-right:20px">2019/11/22 17:28</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-eye-open"></span> 0</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-comment"></span> 0</a>
							<router-link :to="{path:'/artical/detail'}" style="margin-right:20px"><span class="glyphicon glyphicon-pencil"></span> 编辑</router-link>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-trash"></span> 删除</a>
						</div>
					</div>
				</div>
				<hr/>
			</div>
			<div class="artical-wraper">
				<div class="artical-title"><a href="#"><h4  class="text">如何设计一个安全的对外接口</h4></a></div>
				<div class="artical-description">前言 最近有个项目需要对外提供一个接口，提供公网域名进行访问，而且接口和交易订单有关，所以安全性很重要；这里整理了一下常用的一些安全措施以及具体如何去实现。 安全措施 个人觉得安全...</div>
				<div class="artical-extra">
					<div class="horizontal-list">
						<div class="item" style="margin-top:10px">
							<a href="#" style="margin-right:20px">Redis</a>
							<a href="#" style="margin-right:20px">OpenSSL</a>
							<a href="#" style="margin-right:20px">Snowflake</a>
							<a href="#" style="margin-right:20px">Lua</a>
							<a href="#" style="margin-right:20px">Guava</a>
						</div>
					</div>
					<div class="horizontal-list">
						<div class="item" style="padding:5px 0">
							<a href="#" style="margin-right:20px">Nio</a>
							<a href="#" style="margin-right:20px">2019/11/22 17:28</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-eye-open"></span> 0</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-comment"></span> 0</a>
							<router-link :to="{path:'/artical/detail'}" style="margin-right:20px"><span class="glyphicon glyphicon-pencil"></span> 编辑</router-link>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-trash"></span> 删除</a>
						</div>
					</div>
				</div>
				<hr/>
			</div>
			<div class="artical-wraper">
				<div class="artical-title"><a href="#"><h4  class="text">如何设计一个安全的对外接口</h4></a></div>
				<div class="artical-description">前言 最近有个项目需要对外提供一个接口，提供公网域名进行访问，而且接口和交易订单有关，所以安全性很重要；这里整理了一下常用的一些安全措施以及具体如何去实现。 安全措施 个人觉得安全...</div>
				<div class="artical-extra">
					<div class="horizontal-list">
						<div class="item" style="margin-top:10px">
							<a href="#" style="margin-right:20px">Redis</a>
							<a href="#" style="margin-right:20px">OpenSSL</a>
							<a href="#" style="margin-right:20px">Snowflake</a>
							<a href="#" style="margin-right:20px">Lua</a>
							<a href="#" style="margin-right:20px">Guava</a>
						</div>
					</div>
					<div class="horizontal-list">
						<div class="item" style="padding:5px 0">
							<a href="#" style="margin-right:20px">Nio</a>
							<a href="#" style="margin-right:20px">2019/11/22 17:28</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-eye-open"></span> 0</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-comment"></span> 0</a>
							<router-link :to="{path:'/artical/detail'}" style="margin-right:20px"><span class="glyphicon glyphicon-pencil"></span> 编辑</router-link>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-trash"></span> 删除</a>
						</div>
					</div>
				</div>
				<hr/>
			</div>
			<div class="artical-wraper">
				<div class="artical-title"><a href="#"><h4  class="text">如何设计一个安全的对外接口</h4></a></div>
				<div class="artical-description">前言 最近有个项目需要对外提供一个接口，提供公网域名进行访问，而且接口和交易订单有关，所以安全性很重要；这里整理了一下常用的一些安全措施以及具体如何去实现。 安全措施 个人觉得安全...</div>
				<div class="artical-extra">
					<div class="horizontal-list">
						<div class="item" style="margin-top:10px">
							<a href="#" style="margin-right:20px">Redis</a>
							<a href="#" style="margin-right:20px">OpenSSL</a>
							<a href="#" style="margin-right:20px">Snowflake</a>
							<a href="/artical/detail" style="margin-right:20px">Lua</a>
							<a href="#" style="margin-right:20px">Guava</a>
						</div>
					</div>
					<div class="horizontal-list">
						<div class="item" style="padding:5px 0">
							<a href="#" style="margin-right:20px">Nio</a>
							<a href="#" style="margin-right:20px">2019/11/22 17:28</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-eye-open"></span> 0</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-comment"></span> 0</a>
							<router-link :to="{path:'/artical/detail'}" style="margin-right:20px"><span class="glyphicon glyphicon-pencil"></span> 编辑</router-link>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-trash"></span> 删除</a>
						</div>
					</div>
				</div>
				<hr/>
			</div>
			<div class="artical-wraper">
				<div class="artical-title"><a href="#"><h4  class="text">如何设计一个安全的对外接口</h4></a></div>
				<div class="artical-description">前言 最近有个项目需要对外提供一个接口，提供公网域名进行访问，而且接口和交易订单有关，所以安全性很重要；这里整理了一下常用的一些安全措施以及具体如何去实现。 安全措施 个人觉得安全...</div>
				<div class="artical-extra">
					<div class="horizontal-list">
						<div class="item" style="margin-top:10px">
							<a href="#" style="margin-right:20px">Redis</a>
							<a href="#" style="margin-right:20px">OpenSSL</a>
							<a href="#" style="margin-right:20px">Snowflake</a>
							<a href="#" style="margin-right:20px">Lua</a>
							<a href="#" style="margin-right:20px">Guava</a>
						</div>
					</div>
					<div class="horizontal-list">
						<div class="item" style="padding:5px 0">
							<a href="#" style="margin-right:20px">Nio</a>
							<a href="#" style="margin-right:20px">2019/11/22 17:28</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-eye-open"></span> 0</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-comment"></span> 0</a>
							<router-link :to="{path:'/artical/detail'}" style="margin-right:20px"><span class="glyphicon glyphicon-pencil"></span> 编辑</router-link>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-trash"></span> 删除</a>
						</div>
					</div>
				</div>
				<hr/>
			</div>
			<div class="artical-wraper">
				<div class="artical-title"><a href="#"><h4  class="text">如何设计一个安全的对外接口</h4></a></div>
				<div class="artical-description">前言 最近有个项目需要对外提供一个接口，提供公网域名进行访问，而且接口和交易订单有关，所以安全性很重要；这里整理了一下常用的一些安全措施以及具体如何去实现。 安全措施 个人觉得安全...</div>
				<div class="artical-extra">
					<div class="horizontal-list">
						<div class="item" style="margin-top:10px">
							<a href="#" style="margin-right:20px">Redis</a>
							<a href="#" style="margin-right:20px">OpenSSL</a>
							<a href="#" style="margin-right:20px">Snowflake</a>
							<a href="#" style="margin-right:20px">Lua</a>
							<a href="#" style="margin-right:20px">Guava</a>
						</div>
					</div>
					<div class="horizontal-list">
						<div class="item" style="padding:5px 0">
							<a href="#" style="margin-right:20px">Nio</a>
							<a href="#" style="margin-right:20px">2019/11/22 17:28</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-eye-open"></span> 0</a>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-comment"></span> 0</a>
							<router-link :to="{path:'/artical/detail'}" style="margin-right:20px"><span class="glyphicon glyphicon-pencil"></span> 编辑</router-link>
							<a href="#" style="margin-right:20px"><span class="glyphicon glyphicon-trash"></span> 删除</a>
						</div>
					</div>
				</div>
				<hr/>
			</div>
		</div>
	  </div>
	</div>
</div>
</template>


<script>
export default{
	name: 'personal-space',
	methods:{
		writeArtical(){
			this.$router.push({path:"/artical/new"});
		}
	}
}
</script>


<style scoped>
.text-muted{
color: #9b9b9b;
}
.tab-content a{
	text-decoration: none
}
.artical-title .text{
	font-weight:600;
	color: black;
}
.artical-extra a{
	color: #9b9b9b;
	font-size:13px
}
</style>