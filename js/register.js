window.onload = function(){
	
	mui('body').on('tap','.industry',function(){
		var ind = $(this).text();
		$("#industry_select").text(ind);
		$("#industry_wrapper").removeClass("mui-active");
	});
	
//	$(".industry").click(function(){
//		var ind = $(this).text();
//		$("#industry_select").text(ind);
//		$("#industry_wrapper").removeClass("mui-active");
//	})
}
