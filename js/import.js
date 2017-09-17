//import javascript file
document.write('<script src="./js/jquery-3.2.1.js"></script>');
document.write('<script src="./js/jquerylib.js"></script>');

var trackingId = "UA-106616136-1";                                                         
var scriptAsyncSrc = "https://www.googletagmanager.com/gtag/js?id=" + trackingId;
//google analytics
function initGA(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', trackingId); 
} 
document.write('<!-- Global Site Tag (gtag.js) - Google Analytics -->');
document.write('<script async src=' + scriptAsyncSrc + '></script>');
document.write("<script>initGA();</script>");
