const cursor = document.querySelector("#cursor");
const main = document.querySelector(".main");
const heading = document.querySelector("#mainheading")
const image = document.querySelector("img")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"back.out",
        duration:1,
    })
});

gsap.to(image,{
    scrollTrigger:{
        trigger:image,
        start:"top 30%",
        end:"top -80%",
        scrub:2,
        pin:true,
        markers:true
    }
})
image.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        height:"40px",
        width:"40px",
    })
})
image.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        height:"20px",
        width:"20px",
        background:"transparent"
    })
})