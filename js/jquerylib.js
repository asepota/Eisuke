function setGlobalNav(id){
    var element = $(id);

    if(element.hasClass('nav-item')){
        element.removeClass("nav-item");
        element.addClass("nav-item active"); 
    }else{
        element.addClass("nav-item active"); 
    }
}

function setHeader(id){
  $(function(){
    console.log('set header');
    $("#header").load("header.html", null, function(){setGlobalNav(id)});
  });
}

      
