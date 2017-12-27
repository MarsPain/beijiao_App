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
	    //alert("测试"+$(this).text());
			var pClassName={"pClassName":$(this).text()}
			$.ajax({
				    type:"get",
		    		url:"http://192.168.1.102:8080/beijiao/policy/app_IndustryPolicy",
		    		data:pClassName,
		    		dataType : 'json', // 数据类型配置成json
		    		async:true,
		    		//contentType:"application/json;charset=utf-8",
		    		success : function(data,status){
		    			$("#pol").children().remove()
						for (var i = 0; i < data.length; i++) {
							//alert(data[i].polSource)
							var policy = "<li class='mui-table-view-cell mui-media' >" +
							        		"<a class='policy'  href='policy.html?policyId="+data[i].policyId+"'>"+
									        	"<div class='mui-media-body'>"+
										        	data[i].polSource +
										        "<p class='mui-ellipsis'>"+data[i].polTitle+"</p>"+
										        "<span class='time'>"+data[i].polTime+
										        "</span></div></a></li>"
							$("#pol").append(policy);
						}
		    		},
		    		error : function(data,status,e){
		    			alert("失败");
		    		}
			 });
			 
			mui('#offCanvasWrapper').offCanvas('close');
	});
	
	//	返回首页的取值函数
	mui('body').on('tap','#main',function(){
		$.ajax({
		    type:"get",
    		url:"http://192.168.1.102:8080/beijiao/policy/app_allPolicy",
    		data:{},
    		dataType : 'json', // 数据类型配置成json
    		async:true,
    		//contentType:"application/json;charset=utf-8",
    		success : function(data,status){
    			//alert("完成");
    			$("#pol").children().remove()
				for (var i = 0; i < data.length; i++) {
					var policy = "<li class='mui-table-view-cell mui-media'>" +
					        		"<a class='policy'  href='policy.html?policyId="+data[i].policyId+"'>"+
							        	"<div class='mui-media-body'>"+
								        	data[i].polSource +
								        "<p class='mui-ellipsis'>"+data[i].polTitle+"</p>"+
								        "<span class='time'>"+data[i].polTime+
								        "</span></div></a></li>"
					$("#pol").append(policy);
				}
    		},
    		error : function(data,status,e){
    			alert("失败");
    		}
		});
		mui('#offCanvasWrapper').offCanvas('close');
	});
}