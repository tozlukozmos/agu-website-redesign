// ====================================================================================================================================== //
// ============================================ responsive navbar ======================================================================= //
// ====================================================================================================================================== //

const resNavBtn = document.getElementById("responsive-nav-button"); // select the button to listen a click event
resNavBtn.addEventListener("click", () => {
    const resNav = document.getElementById("responsive-nav"); // then select the navbar
        if (resNav.style.visibility === "hidden" && resNav.style.opacity === "0") { 
            // this means that the navbar is not visible so make it visible
            resNav.style.visibility = "visible";
            resNav.style.opacity = "1";
        } else if (resNav.style.visibility === "visible" && resNav.style.opacity === "1") {
            // this means that the navbar is visible so make it hidden
            resNav.style.visibility = "hidden";
            resNav.style.opacity = "0";
        }
})

// ====================================================================================================================================== //
// ============================================ slider box ============================================================================== //
// ====================================================================================================================================== //

const leftBtn = document.getElementById("slider-box-left-btn"); // select the left button
const rightBtn = document.getElementById("slider-box-right-btn"); // select the right button
const slides = document.getElementsByClassName("slider-box-slide"); // select the all slides

let slideIndex = 1;
slides[slideIndex - 1].style.display = "block";

// set a function for the right button
const rightBtnClick = () => {
    if (slideIndex == slides.length) {
        slideIndex = 0;
        slides[slides.length - 1].style.display = "none";
        slides[slideIndex].style.display = "block";
        slideIndex++;
    } else if (slideIndex < slides.length) {
        slides[slideIndex - 1].style.display = "none";
        slides[slideIndex].style.display = "block";
        slideIndex++;
    }
};

// to make the slider automatic we should use setInterval()
setInterval(function() {
    rightBtnClick()
}, 7000);

// set a function for the left button
const leftBtnClick = () => {
    if (slideIndex == 1) {
        slideIndex = slides.length;
        slides[0].style.display = "none";
        slides[slideIndex - 1].style.display = "block";
    } else if (slideIndex > 1) {
        slides[slideIndex - 1].style.display = "none";
        slides[slideIndex - 2].style.display = "block";
        slideIndex--;
    }
};

// listen each button 
rightBtn.addEventListener("click", rightBtnClick);
leftBtn.addEventListener("click", leftBtnClick);

// ====================================================================================================================================== //
// ============================================ announcements box ======================================================================= //
// ====================================================================================================================================== //

const upBtn = document.getElementById("announcements-box-up-button"); // select the up button
const downBtn = document.getElementById("announcements-box-down-button"); // select the down button
const announcements = document.getElementsByClassName("announcement-box"); // select the all announcements

let announcementIndex = 0;

// set a function for the up button
const upBtnClick = async () => {
    if (announcementIndex < announcements.length - 2) {
        announcements[announcementIndex].style.display = "none";
        announcementIndex++;
    } else if (announcementIndex == announcements.length - 2) {
        for (let aIndex = 0; aIndex < announcements.length; aIndex++) {
            const announcement = announcements[aIndex];
            announcement.style.display = "block";
            announcementIndex = 0;
        }
    }
};

// to make the slider automatic we should use setInterval()
setInterval(function() {
    upBtnClick()
}, 5000);

// set a function for the down button
const downBtnClick = () => {
    if (announcementIndex > 0) {
        announcementIndex--;
        announcements[announcementIndex].style.display = "block";
    }
};

// listen each button 
upBtn.addEventListener("click", upBtnClick);
downBtn.addEventListener("click", downBtnClick);

// ====================================================================================================================================== //
// ============================================ events box ============================================================================== //
// ====================================================================================================================================== //

const eventUpBtn = document.getElementById("events-box-up-button"); // select the up button
const eventDownBtn = document.getElementById("events-box-down-button"); // select the down button
const events = document.getElementsByClassName("event-box"); // select the all events

let eventIndex = 0;

// set a function for the up button
const eventUpBtnClick = () => {
    if (eventIndex < events.length - 2) {
        events[eventIndex].style.display = "none";
        eventIndex++;
    }
    else if (eventIndex == events.length - 2) {
        for (let eIndex = 0; eIndex < events.length; eIndex++) {
            const event = events[eIndex];
            event.style.display = "block";
            eventIndex = 0;
        }
    }
};

// to make the slider automatic we should use setInterval()
setInterval(function() {
    eventUpBtnClick()
}, 5000);

// set a function for the down button
const eventDownBtnClick = () => {
    if (eventIndex > 0) {
        eventIndex--;
        events[eventIndex].style.display = "block";
    }
};

// listen each button 
eventUpBtn.addEventListener("click", eventUpBtnClick);
eventDownBtn.addEventListener("click", eventDownBtnClick);





