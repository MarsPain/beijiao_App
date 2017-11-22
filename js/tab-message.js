window.onload = function(){
//	页面滚动效果
	mui(".mui-scroll-wrapper").scroll({
		deceleration : 0.0005
	});
	
//	选项卡切换效果
	$("#first_tab_option").click(function() {
	  $('#second_tab').hide();
	  $('#third_tab').hide();
	  $('#first_tab').show();
	});
	
	$("#second_tab_option").click(function() {
	  $('#first_tab').hide();
	  $('#third_tab').hide();
	  $('#second_tab').show();
	});
	
	$("#third_tab_option").click(function() {
	  $('#first_tab').hide();
	  $('#second_tab').hide();
	  $('#third_tab').show();
	});
	

}
