function calc(){
          
    var height=document.getElementById("h").value;
    var weight=document.getElementById("w").value;
    var bmi=weight/(height/100*height/100);

     
    
    if( bmi.toFixed(2)<18.5){
    document.getElementById("result").innerHTML="Your BMI is "+ bmi.toFixed(2)+" you're in the underweight range";
    document.body.style.backgroundImage="linear-gradient(#808B96,#D5D8DC)";
    }
    if( bmi.toFixed(2)>=18.5 && bmi.toFixed(2)<25 ){
    document.getElementById("result").innerHTML="Your BMI is "+ bmi.toFixed(2)+" you're in the healthy weight range";
    document.body.style.backgroundImage="linear-gradient(#2ECC71,#76D7C4)";
    }
    if( bmi.toFixed(2)>=25 && bmi.toFixed(2)<30 ){
    document.getElementById("result").innerHTML="Your BMI is "+ bmi.toFixed(2)+" you're in the overweight range";
    document.body.style.backgroundImage="linear-gradient(#F1C40F,#F9E79F)";
    }
    if( bmi.toFixed(2)>=30){
    document.getElementById("result").innerHTML="Your BMI is "+ bmi.toFixed(2)+" you're in the obese range ";
    document.body.style.backgroundImage="linear-gradient(#CB4335,#F1948A )";
    }




} 