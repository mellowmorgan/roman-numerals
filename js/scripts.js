const I="I"; //1
const V="V"; //5
const X="X"; //10
const L="L"; //50
const XL ="XL"; //40
const C="C"; //100
const D="D"; //500
const CD = "CD" //400;
const M="M"; //1000
const CM = "CM" //900
const IV="IV"; //4
const IX="IX"; //9
const XC = "XC"; //90


function translator(number){
  let romanString = "";
  while(number>0){
    if (number-1000>=0){
      romanString+=M;
      number=number-1000;
    }
    else if(number-900>=0){
      romanString+=CM; 
      number=number-900;
     }
    else if (number-500>=0){
      romanString+=D;
      number=number-500;
    }
    else if (number-400>=0){
      romanString+=CD;
      number=number-400;
    }
    else if (number-100>=0){
      romanString+=C;
      number=number-100;
    }
    else if (number-90>=0){
      romanString+=XC;
      number=number-90;
    }
    else if (number-50>=0){
      romanString+=L;
      number=number-50;
    }
    else if (number-40>=0){
      romanString+=XL;
      number=number-40;
    }
    else if (number-10>=0){
      romanString+=X;
      number=number-10;
    }
    else if(number-9>=0){
      romanString+=IX;
      number=number-9;
    }
    else if (number-5>=0){
      romanString+=V;
      number=number-5;
    }

    else if (number-4>=0){
      romanString+=IV;
      number=number-4;
    }
    else if (number-1>=0){
    romanString+=I;
    number--;
    }

  }
  return romanString;
}

$(document).ready(function(){
  $("form#translator").submit(function(event){
    event.preventDefault();
    const input = parseInt($("#text").val());
    $("#roman").html(translator(input));
  });
});