window.onload = function(){
//	页面滚动效果
	mui(".mui-scroll-wrapper").scroll({
		deceleration : 0.0005
	});
	
//	选项卡切换效果
	mui('body').on('tap','#first_tab_option',function() {
	  $('#second_tab').hide();
	  $('#first_tab').show();
	});
	
	mui('body').on('tap','#second_tab_option',function() {
	  $('#first_tab').hide();
	  $('#second_tab').show();
	});
	
//	第二页选项卡中点击查看回复的上卷下拉效果
	mui('body').on('tap','.answer',function(){
		if($(this).text() == "查看回复"){
			$(this).text("关闭回复");
			$(this).nextAll().slideDown("fast", function(){
	
			});
		}else{
			$(this).text("查看回复");
			$(this).nextAll().slideUp("fast", function(){
	
			});
		}
	});
}
