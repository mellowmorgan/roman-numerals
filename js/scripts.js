const I="I"; //1
const V="V"; //5
const X="X"; //10
const L="L"; //50
const C="C"; //100
const D="D"; //500
const M="M"; //1000
const IV="IV"; //4
const IX="IX"; //9
const XC = "XC"; //90


function translator(number){
  let romanString = "";
  while(number>0){
    if (number-9===0){
      romanString+=IX;
      number=number-9;
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
    const input = $("#text-passage").val();
    $("#pig-latin").html(passageTranslator(input));
  });
});