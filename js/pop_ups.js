//Pop_upsHotelPage
var pop_up1 = document.getElementsByClassName("Pop-upFirst")[0];
var pop_up2 = document.getElementsByClassName("Pop-upSecond")[0];
var btn = document.getElementsByClassName("blok first")[0];
var btn2 = document.getElementsByClassName("blok second")[0];
var CloseButton = document.getElementsByClassName("ClosePop-upHotel")[0];

btn.onclick = function() {
    pop_up1.style.display = "block"
}

btn2.onclick = function() {
    pop_up2.style.display = "block"
}


CloseButton.onclick = function() {
    pop_up1.style.display = "none"
    pop_up2.style.display = "none"
}



// BookingTout_pop_up
var modal = document.getElementsByClassName("pop_up")[0];
var btn = document.getElementsByClassName("OpenPop_upBtn")[0];
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}