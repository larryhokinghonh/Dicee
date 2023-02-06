

document.addEventListener("keypress", function(e) {
    var firstChoiceName = document.querySelectorAll("input")[0].value;
    var secondChoiceName = document.querySelectorAll("input")[1].value;

    var buttonAttribute = document.querySelectorAll("input")[0].getAttribute("readonly");

    if (e.key === "r" && firstChoiceName == "" && secondChoiceName == "") {
        alert("Please enter 2 choices.");
        return
    }

    if (e.key === "r" && buttonAttribute === "") {
        randomDiceGenerator();
        document.querySelector("h2").style.display = "none";
        document.querySelector("footer").style.marginTop = "13.4%";
    }
});

document.addEventListener("touchstart", function() {
    var buttonAttribute = document.querySelectorAll("input")[0].getAttribute("readonly");
    if (buttonAttribute === "") {
        randomDiceGenerator();
        document.querySelector("h2").style.display = "none";
        document.querySelector("footer").style.marginTop = "13.4%";
    }
});

document.querySelector("button").addEventListener("click", function() {
    if (document.querySelector("button").innerHTML === "Lock Choices") {
        lockChoices();
        document.querySelector("button").innerHTML = "Unlock Choices";
        return
    }

    unlockChoices();
    document.querySelector("button").innerHTML = "Lock Choices";
})

function randomDiceGenerator() {
    var firstChoiceName = document.querySelectorAll("input")[0].value;
    var secondChoiceName = document.querySelectorAll("input")[1].value;

    var randomNumber1 = (Math.ceil(Math.random() * 6));
    var newAttribute1 = "images/" + "dice" + randomNumber1 + ".png";
    document.querySelector("img.img1").setAttribute("src", newAttribute1);

    var randomNumber2 = (Math.ceil(Math.random() * 6));
    var newAttribute2 = "images/" + "dice" + randomNumber2 + ".png";
    document.querySelector("img.img2").setAttribute("src", newAttribute2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1.title").textContent = `🚩${firstChoiceName} Wins!`;
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1.title").textContent = `🚩${secondChoiceName} Wins!`;
    } else {
        randomDiceGenerator();
    }
}

function lockChoices() {
    document.querySelectorAll("input")[0].setAttribute("readonly", "");
    document.querySelectorAll("input")[1].setAttribute("readonly", "");
}

function unlockChoices() {
    document.querySelectorAll("input")[0].removeAttribute("readonly");
    document.querySelectorAll("input")[1].removeAttribute("readonly");
}