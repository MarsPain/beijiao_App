window.onload = function(){
	
	//	首页上下滚动效果
	mui(".mui-scroll-wrapper").scroll({
		deceleration : 0.0005
	});
	
	//首页图片轮播效果
	var img_policy = mui('#img_policy');
		img_policy.slider({
			interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
	//对侧滑菜单栏进行取值的函数
	mui('body').on('tap','.industry',function(){
	    alert($(this).text());
	    window.top.location.href=this.href;
	});
}