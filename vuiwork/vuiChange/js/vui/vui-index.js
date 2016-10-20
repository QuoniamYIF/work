var paymd_url = $("#remote_url").val();

var loadPage = function(action,resource){
	$.ajax({
		url:action,
		data:{"resourceID":resource},
		dataType:"html",
		type : "post",
		global : false,
		async : true,
		success:function(data){
			var $el = $(data).find("#loginContainer");
			if($el.html()){
				alert("登录超时，请重新登录");
				window.location.href = "firstLogin.do";
				return;
			}
			$("#changeContent").html(data);
		},
		error:function() {
			alert("加载页面失败！");
		}
	});
};

$("[vui-link]").click(function(e){
	var $el = $(e.target);
	var $parent = $el.parent().parent();
	$el.siblings().removeClass("subMenu-selected");
	$el.siblings().removeClass("menutest");
	$el.parent().removeAttr("style");
	$el.siblings().removeAttr("style");
	$el.removeAttr("style");
	$el.addClass("subMenu-selected");
	$el.siblings().children().hide("slow");
	if($parent.parent().parent()){
		var firtMenuName=$parent.parent().parent().html().toString().split("<UL>")[0].split("<ul>")[0];
	}
	var secondMenuName =($parent.html()).toString().split("<UL>")[0].split("<ul>")[0];
	var thirdMenuName =$el.html();
	if($parent[0].tagName.toLowerCase() == "li"){
		$parent.siblings().removeClass("menu-selected");
		$parent.parent().parent().siblings().removeClass("menu-selected");
		if(($parent.parent().parent())[0].tagName.toLowerCase() == "li"){
			$parent.parent().parent().addClass("menu-selected");
		}else{
			$parent.addClass("menu-selected");
		}
		var thirdMenu=$parent.children().clone(true);
		$("#subMenuContent").html("");
		$("#subMenuContent").append(thirdMenu).children().children().children().hide();

		if($("#subMenu").css("display") == "none"){
			$("#subMenu").children().children().children().attr("vui-menu","");
			$("#subMenu").children().children().children().children().children().siblings().attr("vui-thirdmenu","");
			$("#subMenu").slideDown(600);
		}
		if(($parent.parent().parent())[0]&&($parent.parent().parent())[0].tagName.toLowerCase() == "li"){
			$("#navMenu").html("/&nbsp;&nbsp;"+firtMenuName);
			$("#navSubMenu").html("/&nbsp;&nbsp;"+secondMenuName);
			$("#navThirdMenu").html("/&nbsp;&nbsp;"+thirdMenuName);
		}else{
			if($el.attr("class").split(" ")[0]=="tMenu"){
				$("#navSubMenu").html("/&nbsp;&nbsp;"+secondMenuName );
				$("#navThirdMenu").html("/&nbsp;&nbsp;"+thirdMenuName);
			}else{
				$("#navThirdMenu").html("");
				$("#navMenu").html("/&nbsp;&nbsp;"+secondMenuName );
				$("#navSubMenu").html("/&nbsp;&nbsp;" + thirdMenuName);
			}
		}
	}
	
	if($el.attr("class").split(" ")[0]=="tMenu"){
		$("#navThirdMenu").html("/&nbsp;&nbsp;"+thirdMenuName);
	}else{
		$("#navSubMenu").html("/&nbsp;&nbsp;" +thirdMenuName);
		$("#navThirdMenu").html("");
	}
	var url = $el.attr("vui-link");
	var userId = $("#e_userId").val();
	var token = $("#token").val();
	url = url + "?_userId=" + userId + "&_token=" + token;
	
	if(url.indexOf("http:")>=0||url.indexOf("https:")>=0){
		$("#changeContent").html("<div id='pageLoading' class='base' style='text-align: center; height: 200px;'><div style='font-weight: bold; font-size: 20px; line-height: 200px;'>请稍等,正在努力加载页面<img src='img/page_loading.gif' style='width: 50px; vertical-align: middle;margin-left:10px'></div></div>"+"<iframe id='iframe' onload='iframeLoad()' style='width:100%;height:568px;display:none' frameborder='no' border='0'   src='"+url+"'>");
	}else{
		loadPage(url,$el.attr("vui-resource"));
	}
});
function iframeLoad(){
	$("#iframe").css("display","block");
	$("#pageLoading").remove();
}
$("[vui-menu]").hover(
		function(e){
			var $el = $(e.target);
			var $parent=$el.parent().parent();
			if($parent.attr("id")=="subMenuContent"){
				if($el.children()){
					$el.siblings().children().css("display","none");
					$el.children().css("display","block");
					$el.children().css("background","#fff");
					$el.children().css("padding","6px 0");
					$el.children().css("box-shadow","0 0 8px #666");
					$el.children().css("border-radius","6px");
					$el.children().css("position","absolute");
					$el.children().css("margin-left","88%");
					$el.children().css("z-index","2");
					$el.children().css("float","left");
					$el.children().css("margin-top","-25%");
				}
			}
		},
		function (e) { 
			var $el = $(e.target);
			var $parent=$el.parent().parent();
			if($parent.attr("id")=="subMenuContent"){
				if($el.children()){
					$el.children().css("display","none");
				}
			}
		}
);

$(".tMenu").parent().hover(
		function(e){
		},
		function (e) { 
			var $el = $(e.target);
			var $parent=$el.parent().parent().parent().parent();
			if($parent.attr("id")=="subMenuContent" || $parent.attr("id")=="subMenu"){
//				$el.siblings().parent().css("display","none");
				$(this).css("display","none");
			}
		}
);

$("#subMenu").click(function(e){
	var $el = $(e.target);
	if($el.attr("class").split(" ")[0]=="tMenu"){
		$el.siblings().removeClass("subMenu-selected");
		$el.addClass("subMenu-selected");
		$("#navThirdMenu").html("/&nbsp;&nbsp;"+$el.html());
//		loadPage($el.attr("vui-link"),$el.attr("vui-resource"));
	}
});
/**
 * 复核录入页面标签更改
 */
var turnPageTags = function(){
	var inputs=$("#ApprovalPage").find("input");
	for(var i=0;i<inputs.length;i++){
		var $input=$(inputs[i]);
		var type=$input.attr("type");
		var value=$input.val();
		switch(type){
			case "text":$input.after("<span>"+value+"</span>").remove();
				break;
			case "button":$input.remove();
				break;
			case "radio":$input.attr("disabled","true");
				break;
			case "checkbox":$input.attr("disabled","true");
				break;
			case "file":$input.remove();
				break;
			case "reset":$input.remove();
				break;
			case "submit":$input.remove();
				break;
			default:break;
		}
	}
	var textareas =$("#ApprovalPage").find("textarea");
	for(var i=0;i<textareas.length;i++){
		var $textarea=$(textareas[i]);
		var value=$textarea.val();
		if(value.length>40){
			$textarea.after("<div class='remark-input'><span class='remark-input'>" + value + "</span></div>").css("display","none").remove();
		}else{
			$textarea.after("<span>"+value+"</span>").remove();
		}
	}
	var selects=$("#ApprovalPage").find("select");
	for(var i=0;i<selects.length;i++){
		var $select=$(selects[i]);
		var value=$select.val();
		$select.after("<span>"+value+"</span>").remove();
	}
};

var resultHanddle=function(data,el,sucessTips){
	var result=data.result||"";
	var resultType = data.resultType||"";
	var pendingApprovalNo=data.pendingApprovalNo;
	var authStrategy= data.authStrategy;
	if(pendingApprovalNo){
		return
	}
	if(authStrategy){
		return
	}
	
	var tips="操作成功！";
	if(sucessTips&&sucessTips!=""){
		tips= sucessTips;
	}
	
	if(result.toString()=="true"){
		if(data.errorMsg){
			alert(data.errorMsg);
		} else {
			alert(tips);
		}
		if(el&&el!=""){
			el.trigger("reloadGrid");
		}
		closePopWindow();
	}
	
	else if(resultType&&resultType.toString()=="N"){
		alert(tips);
		if(el&&el!=""){
			$(el).trigger("reloadGrid");
		}
		closePopWindow();
	}
	else if(resultType&&resultType.toString()=="E"){
		if(data.errorMsg){
			alert(data.errorMsg);
		}else{
			alert("系统错误,请联系管理员！");
		}
		
	}else{
		if(data.errorMsg){
			alert(data.errorMsg);
		}else{
			alert("系统错误,请联系管理员！");
		}
	}
};


var resultDelHanddle=function(data,el){
	var result=data.result||"";
	var pendingApprovalNo=data.pendingApprovalNo;
	var authStrategy= data.authStrategy;
	if(pendingApprovalNo){
		return
	}
	if(authStrategy){
		return
	}
	if(result==true || "true" == result){
		if(data.errorMsg){
			alert(data.errorMsg);
		} else {
			alert("删除成功！");
		}
		el.trigger("reloadGrid");
		closePopWindow();
	}else if(result!=true){
		if(data.errorMsg){
			alert(data.errorMsg);
		}else{
			alert("删除失败");
		}
	}
};

var vuiErrorMsg = function(msg){
	var message = "<label>"+msg+"</label>";
	setPopWindowContent({
		header:"提示信息",
		content:message
	});
	showPopWindow();
};

$("#logout").click(function(){
	if(confirm("是否退出？")){
		window.location.href = "logoutProcess.do";	
	}
});