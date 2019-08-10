var numb1 = 90;
var num2 = 2;


function multiplyTwo(numb1, num2){
    return numb1 - num2;


}
console.log("This is the result >> "+multiplyTwo(numb1,num2));




function functionBrands(theCarObject){
    theCarObject.brand = "Benz";

   // console.log(x);

}


var myCars = {
    brand : "Toyota",
    model : "Accord",
    released : 2019
}

//logs toyota   
console.log(myCars.brand);

//pass object reference to a function.
functionBrands(myCars);


//now it will log Benz
console.log(myCars.brand);