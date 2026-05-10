// Quiz function
function checkQuiz() {
    let score = 0;

    let answers = document.querySelectorAll('input[type="radio"]:checked');
    let totalQuestions = 4;

    if (answers.length < totalQuestions) {
        document.getElementById("quizResult").textContent = "Please answer all questions.";
        document.getElementById("quizResult").style.color = "red";
        return;
    }

    answers.forEach(function(answer) {
        if (answer.value === "correct") {
            score++;
        }
    });

    
    alert("You scored " + score + " out of " + totalQuestions);

   
    let result = document.getElementById("quizResult");
    result.textContent = "You scored " + score + " out of " + totalQuestions;
}
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("userName").value.trim();
    let email = document.getElementById("userEmail").value.trim();
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    nameError.textContent = "";
    emailError.textContent = "";
    let valid = true;
    if (name === "") {
    nameError.textContent = "Name required";
    valid = false;
    }
    if (email === "") {
    emailError.textContent = "Email required";
    valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Invalid email";
    valid = false;
    }
    if (valid) {
    document.getElementById("successMsg").textContent = "Form submitted successfully!";    }
});


// videos
let reels = document.querySelectorAll(".reel");

reels.forEach(reel => {
    let video = reel.querySelector("video");
    let button = reel.querySelector(".play-btn");

    button.addEventListener("click", () => {

        
        reels.forEach(r => {
            let v = r.querySelector("video");
            if (v !== video) {
                v.pause();
                r.classList.remove("playing");
            }
        });

        if (video.paused) {
            video.play();
            reel.classList.add("playing");
        } else {
            video.pause();
            reel.classList.remove("playing");
        }
    });

   
    video.addEventListener("click", () => {
        button.click();
    });

   
    video.addEventListener("ended", () => {
        reel.classList.remove("playing");
    });
});


// Cart
let cart = [];


function addToCart(product) {
    cart.push(product);
 updateCart();
}


function removeFromCart(index) {
 cart.splice(index, 1);
updateCart();
}


// cart function
function updateCart() {
    let cartList = document.getElementById("cartItems");
    let count = document.getElementById("cartCount");

    cartList.innerHTML = "";

    cart.forEach(function(item, index) {
        let li = document.createElement("li");
        li.textContent = item;
        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = function() {
            removeFromCart(index);
        };
        li.appendChild(btn);
        cartList.appendChild(li);
    });

    count.textContent = cart.length;
}