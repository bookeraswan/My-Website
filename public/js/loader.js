    document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == 'interactive') {
       document.getElementById('container').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('loader-container').style.visibility="hidden";
         document.getElementById('container').style.visibility="visible";
      },1);
  }
};