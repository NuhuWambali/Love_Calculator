
// listening the click event if user clicks the button with id calculate
window.onload=function(){
    let button=document.getElementById("calculate");
    button.addEventListener("click",calculateLove);
}

// this function will be executed if and only if the button calculate clicked
function calculateLove(){
    let yourName=document.getElementById("your-name").value;
    let crushName=document.getElementById("crush-name").value;

// to check if values are not empty string
    if(yourName != "" && crushName != ""){

        // calculating a random number
        percentage=Math.floor(Math.random() * 101 );
        document.getElementById("result-message").innerText=yourName + " and " + crushName + "'s chance of love"
        document.getElementById("result-percentage").innerText=percentage.toString() + " % ";
    }
}


