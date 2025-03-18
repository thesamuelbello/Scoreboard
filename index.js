// HOME SCORE BOARD
// HOME BUTTON ONE
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let firstHomeScoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    firstHomeScoreEl.textContent = homeScore
}

// HOME BUTTON TWO
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let secondHomeScoreEl =document.getElementById("home-score")

function increaseHomeScoreTwo(){
    homeScore += 2
    secondHomeScoreEl.textContent = homeScore
}

// HOME BUTTON THREE
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let thirdHomeScoreEl =document.getElementById("home-score")

function increaseHomeScoreThree(){
    homeScore += 3
    thirdHomeScoreEl.textContent = homeScore
}

// GUEST SCORE BOARD
// GUEST BUTTON ONE
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let firstGuestScoreEl =document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1
    firstGuestScoreEl.textContent = guestScore
}

// GUEST BUTTON TWO
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let secondGuestScoreEl =document.getElementById("guest-score")

function increaseGuestScoreTwo(){
    guestScore += 2
    secondGuestScoreEl.textContent = guestScore
}

// GUEST BUTTON THREE
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let thirdGuestScoreEl =document.getElementById("guest-score")

function increaseGuestScoreThree(){
    guestScore += 3
    thirdGuestScoreEl.textContent = guestScore
}