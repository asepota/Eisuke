var se = $('#btnsound');
$('#btn').on('click', function(){
//  se[0].currentTime = 0;
  se[0].play();
});


var TARGET = $('#btnsound');
function play(){
  console.log(Object.keys(TARGET));
    TARGET[0].play();
}
