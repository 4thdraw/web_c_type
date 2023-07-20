$(function(){
    let count =0;
    setInterval(function(){  
        count++;        
        count %= $(".ani > div").length;       
        $(".ani > div").eq(count).addClass("on").siblings().removeClass("on")
    }, 3000)


    $(".tab2 h2").click(function(){
        $(this).parent("li").addClass('act').siblings().removeClass('act')
    })
    
    $(".notice li").eq(0).click(function(){
        $(".pop").addClass("show")
    })
    $(".pop button").click(function(){
        $(".pop").removeClass("show")
    })
})