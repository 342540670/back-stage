require(["config"], function(){
    // 引入依赖模块
   
	require(["jquery","header"], function($){
		function Index(){
		    this.load()
			
        };
        Index.prototype = {
            constructor: Index,
            load:function(){
                $(".second>li:first").removeClass("active");
                $(".second>li:last").addClass("active");
            }
          
         },
           
                
           
        new Index();
    });
});