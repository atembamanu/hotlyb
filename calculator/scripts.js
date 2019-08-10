

function getHistory(){
    return document.getElementById("history-value").innerText;
}
//test the getHistory();
// console.log(getHistory());

function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
//test the printHistory();
//printHistory("99");

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){

    if (num == ""){

        document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText = num;
    }
    
}

function getFormattedNumber(num){
    var n = Number(num);
    var value  = n.toLocaleString("en");
    return value;

}
//test the printOutput function

// var num = 20;
// var num2 = 30;



 //replacing the coma seperated values
 function reverseNumberFormat(num){
     return Number(num.replace(/, /g,''));

 }

//console.log(getOutput());

var operator = document.getElementsByClassName("operator");

for(var i  = 0; i < operator.length; i++ ){
    operator[i].addEventListener('click', function(){

        if(this.id == 'clear'){
            printHistory("");
            printOutput("");
        }
        else if(this.id == 'backspace'){
            output = getOutput();

           if(output){
               output = output.substr(0, output.length-1);
               printOutput(output);
           }


        }
        else{
            var output = getOutput();
            var history = getHistory();

            if(output!=""){
                history = history+output;

                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                   
                     
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");

                }
            }

        }
        
    })
}

 var number = document.getElementsByClassName("number");

 for (var i = 0; i < number.length; i++){
     number[i].addEventListener('click', function(){
         var output = getOutput();
         if(output != NaN){
            output = output+this.id;
             if(output.length>=17){
                 document.getElementById("output-value").style.fontSize = "17"; 
                 if(output.length>30){
                    // document.getElementById("output-value").style.fontSize = "10"; 
                    alert("You can noot enter more than 39 characters, ")
                    
                
             }
             }
            
             printOutput(output);
             

         }
     })

     

 }
