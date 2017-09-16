function setGlobalNav(id){
  $(function(){
    $(id).removeClass("nav-item");
    $(id).addClass("nav-item active");
  });
}

function setHeader(id){
  $(function(){
    $("#header").load("header.html", setGlobalNav(id));
  });
}
      
