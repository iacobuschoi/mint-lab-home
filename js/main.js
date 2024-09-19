const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const bottomContainer = document.querySelector('.bottom-container');

// left -57 -40
// right 37 20
// bottom 57 40
function setContainerPosition(l,r,b) {
    leftContainer.style.transform = `translateX(${-57 + l}vw)`;
    rightContainer.style.transform = `translateX(${37 - r}vw)`;
    bottomContainer.style.transform = `translateY(${28 - b}vw)`;
}

leftContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(20,-20,-2);
})
leftContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})

rightContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(-5,20,-2);
})
rightContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})

bottomContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(-5,-20,20);
})
bottomContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})
