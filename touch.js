/*
Touch
touchStart
touchmove
touchend
touchcancel
*/
/*
const touchArea = document.getElementById("touchArea");   //TouchStart
touchArea.addEventListener("touchstart", function (e) {
    e.preventDefault();
    touchArea.style.backgroundColor = "blue";
    touchArea.textContent = "Touch Started !";
});

touchArea.addEventListener("touchmove", function (e)  {//TouchMove
    e.preventDefault();
    touchArea.style.backgroundColor = "palegreen";
    touchArea.textContent = "Touch Moved !";
});

touchArea.addEventListener("touchend", function (e) {   //TouchEnd
    e.preventDefault();
    touchArea.style.backgroundColor = "grey";
    touchArea.textContent = "Touch Ended !";
});

touchArea.addEventListener("touchcancel", function (e) {  //TouchCancel
    e.preventDefault();
    touchArea.style.backgroundColor = "red";
    touchArea.textContent = "Touch Canceld !";
});
*/

//------------------------------------------------------------------------------------------------------


const game = document.getElementById("game");
const ball = document.getElementById("ball");
let startX, startY;

game.addEventListener("touchstart", function (e) {
    const touch = e.changedTouches[0];
    startX = touch.clientX;
    startY = touch.clientY;
});

game.addEventListener("touchmove", function (e) {
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - startX;
    const diffY = touch.clientY - startY;
    ball.style.left = Math.max(0, Math.min(350, ball.offsetLeft + diffX)) + "px";
    ball.style.top = Math.max(0, Math.min(175, ball.offsetTop + diffY)) + "px";
    startX = touch.clientX;
    startY = touch.clientY;
    e.preventDefault();
}) ;