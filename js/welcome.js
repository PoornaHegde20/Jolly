var age;
var icon;
var username="kullu";
var ele=document.getElementById("scoree");
var count1=1,count2=1,count3=1,count4=1,count5=1,count6=1,count7=1,count8=1,count9=1,count10=1;

var snd1 = new Audio("aud/audio1.ogg");
var snd2 = new Audio("aud/audio2.ogg");
var snd3 = new Audio("aud/audio3.ogg");
var snd4 = new Audio("aud/audio4.ogg");
var snd5 = new Audio("aud/audio5.ogg");
var snd6 = new Audio("aud/audio6.ogg");
var snd7 = new Audio("aud/audio7.ogg");
var snd8 = new Audio("aud/audio8.ogg");
var snd9 = new Audio("aud/audio9.ogg");
var snd10 = new Audio("aud/audio10.ogg");

function changeColor1(color) {
    document.getElementById('number1').style.backgroundColor = color;
}	
function check1() {
    snd1.play();
    if(count1==3)
	{
        changeColor1('chartreuse');
    }
    count1++;
}	

function changeColor2(color) {
    document.getElementById('number2').style.backgroundColor = color;
}	
function check2() {
    snd2.play();
    if(count2==3)
	{
        changeColor2('chartreuse');
    }
    count2++;
}

function changeColor3(color) {
    document.getElementById('number3').style.backgroundColor = color;
}
			
function check3() {
    snd3.play();
    if(count3==3)
	{
        changeColor3('chartreuse');
    }
    count3++;
}	

function changeColor4(color) {
    document.getElementById('number4').style.backgroundColor = color;
}
			
function check4() {
    snd4.play();
    if(count4==3)
	{
        changeColor4('chartreuse');
    }
    count4++;
}	

function changeColor5(color) {
    document.getElementById('number5').style.backgroundColor = color;
}		
function check5() {
    snd5.play();
    if(count5==3)
	{
        changeColor5('chartreuse');
    }
    count5++;
}	

function changeColor6(color) {
    document.getElementById('number6').style.backgroundColor = color;
}	
function check6() {
    snd6.play();
    if(count6==3)
	{
        changeColor6('chartreuse');
    }
    count6++;
}	

function changeColor7(color) {
    document.getElementById('number7').style.backgroundColor = color;
}	
function check7() {
    snd7.play();
    if(count7==3)
	{
        changeColor7('chartreuse');
    }
    count7++;
}	

function changeColor8(color) {
    document.getElementById('number8').style.backgroundColor = color;
}	
function check8() {
    snd8.play();
    if(count8==3)
	{
        changeColor8('chartreuse');
    }
    count8++;
}	

function changeColor9(color) {
    document.getElementById('number9').style.backgroundColor = color;
}
function check9() {
    snd9.play();
    if(count9==3)
	{
        changeColor9('chartreuse');
    }
    count9++;
}	

function changeColor10(color) {
    document.getElementById('number10').style.backgroundColor = color;
    
}
function check10() {
    snd10.play();
    if(count10==3)
	{
        changeColor10('chartreuse');
        updateScore();
        displayScore();
    }
    count10++;
}	

function updateScore()
{
    var score=localStorage.getItem("score");
    score= parseInt(score)+10;
    localStorage.setItem("score",score);
}

function comparisonQ(c)
{
    if(c==1)
    {
        var x=document.getElementById("q1n1");
        var y=document.getElementById("q1n2");
        x.value=Math.ceil(Math.random()*10);
        y.value=Math.ceil(Math.random()*10);
        x.innerHTML="The numbers are " +x.value+" and "+y.value+"!";
    }
    else if(c==2)
    {
        var x=document.getElementById("q2n1");
        var y=document.getElementById("q2n2");
        x.value=Math.ceil(Math.random()*10);
        y.value=Math.ceil(Math.random()*10);
        x.innerHTML="The numbers are " +x.value+" and "+y.value+"!";
    }
    else
    {
        var x=document.getElementById("q3n1");
        var y=document.getElementById("q3n2");
        x.value=Math.ceil(Math.random()*10);
        y.value=Math.ceil(Math.random()*10);
        x.innerHTML="The numbers are " +x.value+" and "+y.value+"!";
    }
}
