var nums = document.querySelectorAll("#keyboaed>div");
var bag = document.querySelector("#display");



for(var i=0; i<nums.length; i++){
    nums[i].addEventListener("click",myCalculator);

}

function myCalculator(){
    var targetNumber = event.target.innerText;
    console.log(targetNumber);


    switch(targetNumber){
        case "C":
            bag.innerHTML="";
            break;
        case"=":
            bag.innerHTML=eval(bag.innerHTML);
            break;
            default:
                bag.innerHTML+= targetNumber;
    }

}