/**
 * 弹出层
 * @version 1.0
 * @author wang.hai
 */

var setPopWindowContent = function(params,el){
	var $popWindowHeader="";
	var $popWindowContent="";
	if(el){
		$popWindowHeader=$("#newPopWindowHeader");
		$popWindowContent=$("#newPopWindowContent");
	}else{
		$popWindowHeader=$("#popWindowHeader");
		$popWindowContent=$("#popWindowContent");
	}
	$popWindowHeader.empty();
	$popWindowContent.empty();
	if(params){
		if(params["header"]){
			$popWindowHeader.append(params["header"]);
		}
		if(params["content"]){
			$popWindowContent.append(params["content"]);
		}
		if(params["initFunc"]){
			params["initFunc"]($popWindowContent);
		}
	}
};

var showPopWindow = function(el){
	var $popWindowContainer="";
	if(el){
		$popWindowContainer=$("#newPopWindowContainer");
	}else{
		$popWindowContainer=$("#popWindowContainer");
	}
	$("#mainContentContainer").css("overflow","hidden");
	$popWindowContainer.fadeIn(600);
	
	setPopWindow(el);
};

var setPopWindow = function(el){
	var $popWindowContentContainer="";
	if(el){
		$popWindowContentContainer=$("#newPopWindowContentContainer");
	}else{
		$popWindowContentContainer =$("#popWindowContentContainer");
	}
	
	var marginTop = $popWindowContentContainer.height();
	var marginLeft = $popWindowContentContainer.width();
	marginTop = marginTop > $("body").height() ? $("body").height() / 2 : marginTop / 2;
	marginLeft = marginLeft> $("body").width() ? $("body").width() / 2 -marginLeft: marginLeft / 2-marginLeft;
	$popWindowContentContainer.css("marginLeft",marginLeft);
	$popWindowContentContainer.css("marginTop",-marginTop);
};

var closePopWindow = function(){
	$("#mainContentContainer").css("overflow","auto");
	$("#popWindowContainer").fadeOut(600,function(){
		$("#popWindowHeader").empty();
		$("#popWindowContent").empty();
	});
	
};
/**
 * 点击取消或者关闭按钮
 */
var closeNewPopWindow = function(){
	$("#newPopWindowContainer").fadeOut(0,function(){
		var el=document.getElementById("content");
		$.data(el,"userData","");
		$("#newPopWindowHeader").empty();
		$("#newPopWindowContent").empty();
		
	});
};