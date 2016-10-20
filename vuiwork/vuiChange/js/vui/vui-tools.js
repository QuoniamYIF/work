/**
 * @version VUI-2.0
 * @author wang.hai
 * @date 2016-7-4
 * @description 公用工具 使用jquery包装
 */
(function($, w) {
	
	/**
	 * 格式化页面代码：封装formhtml方法,实现动态获取页面代码
	 */
	$.fn.vFormhtml = function() {
		var oldHTML = $.fn.html;
		if (arguments.length)
			return oldHTML.apply(this, arguments);
		$("input,button", this).each(function() {
			this.setAttribute('value', this.value);
		});
		$("textarea", this).each(function() {
			$(this).html(this.value);
		});
		$(":radio,:checkbox", this).each(function() {
			if (this.checked)
				this.setAttribute('checked', 'checked');
			else
				this.removeAttribute('checked');
		});
		$("option", this).each(function() {
			if (this.selected)
				this.setAttribute('selected', 'selected');
			else
				this.removeAttribute('selected');
		});
		return oldHTML.apply(this);
	};
	
	/**
	 * 给必输项添加样式
	 */
	$.fn.vuiRequired = function(option){
		var $container = this;
		var reqElemnts=$container.find("[vui-required]");
		for(var i=0,len=reqElemnts.length;i<len;i++){
			var $reqElemnt = $(reqElemnts[i]);
			$reqElemnt.before("<div style='position:relative'><span class='vRequired'></span></div>");
		}
	};
	
	//自定义jquery方法
	$.extend({
	
		/**
		 * 输出信息到控制台，供开发者查看，便于debug
		 */
		vLog:function(ex){
			if(w.console && w.console.log)
				w.console.log("--VUI日志-- " + ex);
		},
		
		/**
		 * 重写alert
		 * @author wang.hai
		 * @param msg
		 */
		vAlert:function(msg){
			setPopWindowContent({
				header:"提示信息",
				content:msg
			});
			showPopWindow();
		},
		
		/**
		 * 数据过滤
		 * @param s
		 * @returns
		 */
		vFilter:function(s){
			s = new String(s);
			return s.replace(/<|>/g,function(a){
				if(a == "<")
					return "&lt;";
				
				return "&gt;";
			});
		},
		
		/**
		 * 日期格式化字符串
		 */
		vDateToString:function(dateObj){
			var jsDate;
			
			if(dateObj){
			
				if(typeof dateObj === "object"){
					jsDate = new Date(dateObj.time);
				}else{
					jsDate = new Date(dateObj);
				}
				return jsDate.getFullYear() + "-" + (jsDate.getMonth() + 1) + "-" + jsDate.getDate();
			}else{
				return "";
			}
		}
	});

})(jQuery, window);