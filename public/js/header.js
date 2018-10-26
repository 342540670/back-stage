define(["jquery","bootstrap"], function($){

	function Header() {
		this.load();
		
    }
    Header.prototype = {
		constructor: Header,
		// 加载头部与尾部
		load: function() {
			$("header").load("/html/include/header.html");
			// 头部
			// $.get("/html/include/header.html", this.headerHandler.bind(this));
			// $.get("/html/include/header.html", $.proxy(this.heads, this));
     },
		//  heads: function(data) {
		// 	// 将读取到的头部复用HTML渲染到 <header> 内部
		// 	$("header").html(data);
		
			
		},



    
    new Header();
})