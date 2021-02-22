var modal = document.getElementsByClassName("pop_up")[0];
var btn = document.getElementsByClassName("OpenPop_upBtn")[0];
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
  modal.style.opacity = "1"
}

span.onclick = function(){
  modal.style.opacity = "0"
}