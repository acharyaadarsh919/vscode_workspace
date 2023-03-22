const burger = document.querySelector('nav svg');
burger.addEventListener('click', ()=>{
    if(burger.classList.contains("active")){
        gsap.to(".links", {x: "100%"});
        gsap.to(".line", {stroke: "white"});
        // to re-enable scrollbar
        gsap.set("body", {overflow: "auto"});
        gsap.set("body", {overflowX: "hidden"})  

    }else {
        gsap.to(".links", {x: "0%"});
        gsap.to(".line", {stroke: "black"});
        gsap.fromTo(".links a" ,
                    {opacity: 0 , y: 0},
                    {opacity: 1 , y: 20 , delay: 0.25 , stagger: 0.25})
                    // goes from opacity 0 -- 1 and in y direction goes from initaial 0 -- 2o down with a delay of 0.25 s and stagger is 1 comes at a time(1st our story then pract....)
        gsap.set("body", {overflow: "hidden"}) 
        // to disable scrollbar during active state but also gets diabled in non active so in true part
    }
    burger.classList.toggle("active");
})

const videos = gsap.utils.toArray('.video'); 
gsap.set(videos , {opacity: 0}); 
// adds all the video in an array
// initially all video not visible


// every time we scroll and hit the video its going to do something
videos.forEach(video => {
    ScrollTrigger.create({
        trigger: video,
        start: "top center",
        end: "bottom center",
        markers: true,
        onEnter: ()=>{
            gsap.to(video, {opacity: 1})
            video.play();
        },
        onEnterBack: ()=> video.play(),
        onLeave : ()=> video.pause(),
        onLeaveBack: ()=> video.pause(),
    });
});