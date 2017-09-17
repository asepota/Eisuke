function setGlobalNav(id){
    if(id == undefined){
      return;
    }

    var element = $(id);

    if(element.hasClass('nav-item')){
        element.removeClass("nav-item");
        element.addClass("nav-item active"); 
    }else{
        element.addClass("nav-item active"); 
    }
}

function initPage(id){
  $(function(){
    console.log('set header');
    $("#header").load("header.html", null, function(){setGlobalNav(id)});
    $("#footer").load("footer.html");
  });
}

      
