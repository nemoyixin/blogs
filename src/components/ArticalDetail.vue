<template>
<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-8">
				<div class="nav-path">
					<ol class="breadcrumb">
					  <li><a href="#">Yixin_Nemo的个人空间</a></li>
					  <li><a href="#">JAVA</a></li>
					  <li class="active">正文</li>
					</ol>
				</div>
				<div class="artical-title">
					<h3 class="text" style="font-weight:600">Make footer stick to bottom of page correctly</h3>
				</div>
				<div class="artical-extra" style="display:inline-block;">
					<div class="item" style="display:inline-block">
						<a href="#" style="color:#337ab7;text-decoration:none">Yixin_Nemo</a> 发布于 今天 11:28 
					</div>
					<div class="item" style="display:inline-block">
						字数 121
					</div>
					<div class="item" style="display:inline-block">
						阅读 20  
					</div>
					<div class="item" style="display:inline-block">
						收藏 10 
					</div>
					<div class="item" style="display:inline-block">
						点赞 10 
					</div>
					<div class="item" style="display:inline-block">
						评论 10 
					</div>
					<div class="item" style="display:inline-block">
						<div class="btn-group">
						  <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							管理 <span class="caret"></span>
						  </button>
						  <ul class="dropdown-menu">
							<li><a href="#"><span class="glyphicon glyphicon-edit"></span>  编辑</a></li>
							<li><a href="#"><span class="glyphicon glyphicon-remove"></span>  删除</a></li>
						  </ul>
						</div>
					</div>
				</div>
				<div class="artical-content" style="margin-top:10px">
					<p>
					The simplest solution is to use min-height on the &lt;html&gt; tag and position the &lt;footer&gt; with position:absolute;

					Demo: jsfiddle and SO snippet:
					</p>
					 
					<pre>
					<code>html {
						position: relative;
						min-height: 100%;
					}

					body {
						margin: 0 0 100px;
						/* bottom = footer height */
						padding: 25px;
					}

					footer {
						background-color: orange;
						position: absolute;
						left: 0;
						bottom: 0;
						height: 100px;
						width: 100%;
						overflow: hidden;
					}
					</code>
					</pre>
					<pre>
					<code>
					&lt;article&gt;
						<!-- or <div class="container">, etc. -->
						&lt;h1&gt;James Dean CSS Sticky Footer&lt;/h1&gt;
						&lt;p&gt;Blah blah blah blah&lt;/p&gt;
						&lt;p&gt;More blah blah blah&lt;/p&gt;
					&lt;/article&gt;
					&lt;footer&gt;
						&lt;h1&gt;Footer Content&lt;/h1&gt;
					&lt;/footer&gt;
					</code>
					</pre>
				</div>
				<div class="copy-right" style="text-align:center;margin-top:15px">
					<h4>© 著作权归作者所有</h4>
				</div>
				<div class="artical-action" style="text-align:center;margin-top:15px">
					<div class="btn-group" role="group" aria-label="Default button group">
					  <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-usd"></span>打赏</button>
					  <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-thumbs-up"></span>点赞(5)</button>
					  <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-star-empty"></span>收藏(10)</button>
					  <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon glyphicon-share"></span>分享</button>
					</div>
				</div>
				<div class="pre-next-artical">
					<nav aria-label="...">
					  <ul class="pager">
						<li class="previous"><a href="#"><span aria-hidden="true">&larr;</span> 上一篇：你可能不知道的 5 个强大的 HTML5 API</a></li>
						<li class="next"><a href="#">下一篇：html <span aria-hidden="true">&rarr;</span></a></li>
					  </ul>
					</nav>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name: 'artical-detail'
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
	font-size:14px
}
.artical-extra .item{
	margin-right:10px
}

</style>