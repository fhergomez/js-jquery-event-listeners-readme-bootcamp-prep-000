//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('hey!');
  });
}

function frameIt() {
  $('img').on('load', function () {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function() {
    if(key === 71) {
      alert('You\'ve preseed "G"');
    }
  });
}

function submitIt() {

}

$(document).ready(function(){

// call functions here
  getIt();
});
