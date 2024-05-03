const cursor = document.querySelector("#cursor");
const main = document.querySelector(".main");
const heading = document.querySelector("#mainheading");
const image = document.querySelector("img");
const links = document.querySelector(".con_links");
const sec2 = document.querySelector(".sec2");
const head2 = document.querySelector(".sec2 h2");
let end = gsap.matchMedia();
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
    }
});
image.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        height:"40px",
        width:"40px",
    })
});
image.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        height:"20px",
        width:"20px",
        background:"transparent"
    })
});

links.addEventListener("mouseenter",function(){
    gsap.to(links,{
        y:5
    })
});

links.addEventListener("mouseleave",function(){
    gsap.to(links,{
        y:-5
    })
});

gsap.from(sec2,{
    opacity:"0",
    scrollTrigger:{
        trigger:sec2,
        start:"top 60%",
        end:"top -60%",
    }
});

head2.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        height:"40px",
        width:"40px"
    })
});

head2.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        height:"20px",
        width:"20px"
    })
})

end.add("(max-width:425px)",()=>{
    gsap.to(sec2,{
        opacity:"100%",
    })
    gsap.to(image,{
        scrollTrigger:{
            trigger:image,
            start:"top 50%",
            end:"top 10%",
        }
    })
})
