const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAni(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut

    })
    t1.to(".boundingelem",{
        y:'0',
        duration:2,
        delay:-1,
        ease:Expo.easeInOut,
        stagger: .2
})
t1.from("#herofooter",{
    y:'-10',
    opacity:0,
    duration:1.5,
    delay:-1,
    ease:Expo.easeInOut

})
}

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform=  `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
document.querySelectorAll(".elem").forEach(function(elem){
    var diffrot=0;
    var rotate = 0;


    elem.addEventListener("mouseleave",function(dets){
        
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            
        })
    })
})


document.querySelectorAll(".elem").forEach(function(elem){
    var diffrot=0;
    var rotate = 0;


    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY-elem.getBoundingClientRect().top;
        diffrot = dets.clientX-rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot)
        })
    })
})


circleMouseFollower();
firstPageAni();