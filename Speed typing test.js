let quoteDisplay = document.getElementById("quoteDisplay");
let resetBtn = document.getElementById("resetBtn");
let timer = document.getElementById("timer");
let submitBtn = document.getElementById("submitBtn");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");
let speedTypingTest = document.getElementById("speedTypingTest");
let a = quoteInput.value;
let randomText = ""
resetBtn.onclick = function() {



    let option = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            randomText = jsonData.content
            console.log(jsonData)
            spinner.classList.add("d-none");
            quoteDisplay.classList.remove("d-none");
            quoteDisplay.textContent = jsonData.content;

        })

}

let c = "You have typed in ";
resetBtn.addEventListener("click", function() {

    let count = 0;
    let setTime = setInterval(function() {
        count = count + 1;
        timer.textContent = count;
    }, 1000);

    submitBtn.onclick = function() {
        clearInterval(setTime);
        let result = document.getElementById("result");
        result.textContent = c + count + " Secounds"
        result.style.fontSize = "25px"
        result.style.color = "#9aa5b1"
    };


});