<template>
<div class="row">
	<div class="nav-path">
		<ol class="breadcrumb">
		  <li><a href="#">Yixin_Nemo的个人空间</a></li>
		  <li><a href="#">写博客</a></li>
		</ol>
	</div>
	<div class="artical-form" style="margin-bottom:100px">
		<form>
		  <div class="flex-fields">
			<div class="" style="width: 62.5%!important">
				<div class="form-group">
					<label for="title">文章标题</label>
					<input type="text" class="form-control" id="title" placeholder="文章标题">
				  </div>
			</div>
			<div class="" style="width: 37.5%!important;margin-right:1px;margin-left:15px">
				<div class="form-group" style="width:100%">
				<label for="artical-category">文章分类</label>
				<select class="form-control" style="width:100%">
				  <option>CSS</option>
				  <option>Tomcat</option>
				  <option>JVM</option>
				  <option>数据结构</option>
				  <option>设计模式</option>
				</select>
			  </div>
			</div>
		  </div>
		  
		  
		  <div class="form-group">
			<div id="editor" style="height:420px">
				
			</div>
			<!--<script>
				ClassicEditor
					.create( document.querySelector( '#editor' ) )
					.catch( error => {
						console.error( error );
					} );
			</script>-->
		  </div>
		  <div class="inline-fields">
			<div class="item" style="display:inline-block">
				<div class="form-group">
					<label for="system-category">系统分类</label>
					<select class="form-control">
					  <option>前端开发</option>
					  <option>服务端开发</option>
					  <option>移动端开发</option>
					  <option>人工智能</option>
					  <option>游戏开发</option>
					</select>
				 </div>
			</div>
			<div class="item">
				<div class="checkbox">
				<label>
				  <input type="checkbox"> 原创
				</label>
			  </div>
			</div>
			<div class="item">
				<div class="checkbox">
				<label>
				  <input type="checkbox"> 置顶
				</label>
			  </div>
			</div>
			<div class="item">
				<div class="checkbox">
				<label>
				  <input type="checkbox"> 仅自己可见
				</label>
			  </div>
			</div>
			<div class="item">
				<div class="checkbox">
				<label>
				  <input type="checkbox"> 禁止评论
				</label>
			  </div>
			</div>
			<div class="item">
				<div class="checkbox">
				<label>
				  <input type="checkbox"> 下载外站图片到本地
				</label>
			  </div>
			</div>
		  </div>
		  <div class="form-action">
			<button type="button" class="btn btn-primary">发表文章</button>
			<button type="button" class="btn btn-default">保存草稿</button>
		  </div>
		</form>
	</div>
</div>
</template>


<script>
	export default{
		name: 'artical-new'
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
.inline-fields{
	display:inline-block;
}
.inline-fields .item{
	margin-right: 20px;
	display: inline-block
}
.artical-form select{
	width:200px
}
.ck-editor__editable_inline {
    min-height: 400px;
}
.flex-fields{
	display: flex;flex-direction: row;
}
</style>