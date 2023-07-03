

var totalPrice = Number(20000)
var six = 0.06;
var twelve = 0.12;
var eighteen = 0.18;
var twentyfour = 0.24;
var thirty = 0.3;

document.getElementsByName("money")[0].placeholder = totalPrice; 

var btn1=document.getElementsByClassName("six");
for(let i = 0 ; i< btn1.length ; i++){
    btn1[i].addEventListener("click",takes_6month);
}

var btn2=document.getElementsByClassName("twelve");
for(let i = 0 ; i< btn2.length ; i++){
    btn2[i].addEventListener("click",takes_12month);
}

var btn3=document.getElementsByClassName("eighteen");
for(let i = 0 ; i< btn3.length ; i++){
    btn3[i].addEventListener("click",takes_18month);
}

var btn4=document.getElementsByClassName("twentyfour");
for(let i = 0 ; i< btn4.length ; i++){
    btn4[i].addEventListener("click",takes_24month);
}

var btn5=document.getElementsByClassName("thirty");
for(let i = 0 ; i< btn5.length ; i++){
    btn5[i].addEventListener("click",takes_30month);
}

function takes_6month() { 

    pinifits = six * totalPrice;
    final =pinifits + totalPrice;
    finalPerMonth=Math.round(final/6);
    document.getElementById("loan").innerHTML="Your Loan Per Month  "+six+ " Of Benifts";
    document.getElementsByName("money")[0].placeholder = finalPerMonth;
}

function takes_12month() {
    pinifits = twelve * totalPrice;
    final =pinifits + totalPrice;
    finalPerMonth=Math.round(final/12);
    document.getElementById("loan").innerHTML="Your Loan Per Month  "+twelve+ " Of Benifts";
    document.getElementsByName("money")[0].placeholder = finalPerMonth;
}

function takes_18month() {
    pinifits = eighteen * totalPrice;
    final =pinifits + totalPrice;
    finalPerMonth=Math.round(final/18);
    document.getElementById("loan").innerHTML="Your Loan Per Month  "+eighteen+ " Of Benifts";
    document.getElementsByName("money")[0].placeholder = finalPerMonth;
}

function takes_24month() {
    pinifits = twentyfour * totalPrice;
    final =pinifits + totalPrice;
    finalPerMonth=Math.round(final/24);
    document.getElementById("loan").innerHTML="Your Loan Per Month with  "+twentyfour+ " Of Benifts";
    document.getElementsByName("money")[0].placeholder = finalPerMonth;
}

function takes_30month() {
    pinifits = thirty * totalPrice;
    final =pinifits + totalPrice;
    finalPerMonth=Math.round(final/30);
    document.getElementById("loan").innerHTML="Your Loan Per Month   " +thirty+ " Of Benifts" ;
    document.getElementsByName("money")[0].placeholder = finalPerMonth;
}