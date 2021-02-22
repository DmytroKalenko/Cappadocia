//Pop_upsHotelPage
var pop_up1 = document.getElementsByClassName("Pop-upFirst")[0];
var pop_up2 = document.getElementsByClassName("Pop-upSecond")[0];
var pop_up3 = document.getElementsByClassName("Pop-upThreeth")[0];
var pop_up4 = document.getElementsByClassName("Pop-upFourth")[0];
var btn = document.getElementsByClassName("blok first")[0];
var btn2 = document.getElementsByClassName("blok second")[0];
var btn3 = document.getElementsByClassName("blok threeth")[0];
var btn4 = document.getElementsByClassName("blok fourth")[0];
var CloseButton = document.getElementsByClassName("ClosePop-upHotel")[0];
var CloseButton2 = document.getElementsByClassName("ClosePop-upHotel Second")[0];
var CloseButton3 = document.getElementsByClassName("ClosePop-upHotel Threeth")[0];
var CloseButton4 = document.getElementsByClassName("ClosePop-upHotel Fourth")[0];

btn.onclick = function() {
    pop_up1.style.display = "block"
}
btn2.onclick = function() {
    pop_up2.style.display = "block"
}
btn3.onclick = function() {
    pop_up3.style.display = "block"
}
btn4.onclick = function() {
    pop_up4.style.display = "block"
}

CloseButton.onclick = function() {
    pop_up1.style.display = "none"
}
CloseButton2.onclick = function() {
    pop_up2.style.display = "none"
}
CloseButton3.onclick = function() {
    pop_up3.style.display = "none"
}
CloseButton4.onclick = function() {
    pop_up4.style.display = "none"
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