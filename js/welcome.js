var age;
var icon;
var score=0;
var username="kullu";
var count1=1;
var count2=1,count3=1,count4=1,count5=1,count6=1,count7=1,count8=1,count9=1,count10=1;
		
function changeColor1(color) {
    document.getElementById('number1').style.backgroundColor = color;
}
			
function check1() {
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
    if(count10==3)
	{
        changeColor10('chartreuse');
    }
    count10++;
}	

function updateScore()
{
    score+=10;
}

function comparisonQ()
{
    var x=document.getElementById("q1n1");
    var y=document.getElementById("q1n2");
    x.value=Math.ceil(Math.random()*10);
    y.value=Math.ceil(Math.random()*10);
}
function checkQ()
{
    var result=document.getElementById("q1result");
    var max;
    if(parseInt(document.getElementById("q1n1").value)>parseInt(document.getElementById("q1n2").value))
        max.value=parseInt(document.getElementById("q1n1").value);
    else
        max.value=parseInt(document.getElementById("q1n2").value);
        
    if(document.getElementById("q1g").value==max.value)
    {
        result.innerHTML="CORRECT ANSWER! You earn 10 chocolates!";
        updateScore();
    }
    else
    {
        result.innerHTML="Wrong Answer :( It's okay you can try more!!";
    }
}