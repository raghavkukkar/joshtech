// variable(dom + local + slider) start here
let slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    navPosition: 'bottom',
    controls: false,
    autoplayButtonOutput: false,
    navContainer : '#control-buttons-container'
});
let vidId = ['5M_I3Zatkpc','v_LPm6P-du4','8I4f-kIIl5w','J5ZjBZgtSsQ'];
let thumb = Array.from(document.getElementsByClassName("vid-pop"));
let prev = document.getElementById("prev");
let next = document.getElementById("next")
let player = document.getElementById("player");
let close = document.getElementById("close");
let pop = document.getElementsByClassName("popup")[0];
let playLink = "https://www.youtube.com/embed/";
let id;
// variable end

// function to get thumbnail link
function thumbParser(x) {
return `//img.youtube.com/vi/${vidId[x]}/0.jpg`;
}

//adding bgImage and click event listner
thumb.map((x) => {
    x.style.backgroundImage = `url(${thumbParser(x.id)})`
    x.addEventListener("click",(e)=> {
        id = parseInt(e.currentTarget.id);
        player.src = playLink + vidId[id];
        pop.classList.add('show')
    })
})

// popup close event listener
close.addEventListener("click", () => {
    pop.classList.remove('show');
})

//previous video button event listener
prev.addEventListener("click", () => {
    if (id != undefined) {
        if (id > 0) {
            player.src = playLink + vidId[--id];
        }
        else {
            id = 3;
            player.src = playLink + vidId[id]
        }
    }
        
    
});
//previous video button event listener
next.addEventListener("click", () => {
    player.src = playLink + vidId[(id = (++id)%4)];
})