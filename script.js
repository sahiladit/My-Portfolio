const cursor = document.querySelector("#cursor");
const main = document.querySelector(".main");
const heading = document.querySelector("#mainheading");
const image = document.querySelector(".sec1 img");
const links = document.querySelector(".con_links");
const sec2 = document.querySelector(".sec2");
const head2 = document.querySelector(".sec2 h2");
const line = document.querySelector(".line")
const line2 = document.querySelector(".line2")
const dot2  = document.querySelector(".dot2")
const dot3 = document.querySelector(".dot3");
const line3 = document.querySelector(".line3");
const nav_links = document.querySelector("nav a");

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
        start:"top 40%",
        end:"top -70%",
        pin:true
    }
})
image.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        height:"40px",
        width:"40px",
        background:"transparent"
    })
});
image.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        height:"5px",
        width:"5px",
        background:"black"
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

image.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        background:"transparent",
    })
})

image.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        background:"black",
    })
});


links.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        height:"4rem",
        width:"4rem",
        background:"gold",
    })
    cursor.innerHTML="Click Here";
})

links.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        height:"5px",
        width:"5px",
        background:"black",
        
    })
    cursor.innerHTML="";
})

gsap.to(line,{
    height:"18.5rem",
    scrollTrigger:{
        trigger:line,
        start:"top:30%",
        end:"top 40%",
        scrub:2
    }
})

gsap.to(line2,{
    height:"18.5rem",
    opacity:1,
    scrollTrigger:{
        trigger:line2,
        start:"top 20%",
        end:"top 45%",
        opcaity:0,
        scrub:2
    }
});
gsap.from(dot2,{
    opacity:0,
    scrollTrigger:{
        trigger:dot2,
        start:"top 43%",
        end:"top 50%",
        scrub:2
    }
});

gsap.to(line3,{
    height:"17.5rem",
    opacity:1,
    scrollTrigger:{
        trigger:line3,
        start:"top 20%",
        end:"top 45%",
        opcaity:0,
        scrub:2
    }
});
gsap.from(dot3,{
    opacity:0,
    scrollTrigger:{
        trigger:dot3,
        start:"top 60%",
        end:"top 65%",
        scrub:2
    }
});

nav_links.addEventListener("mouseenter",()=>{
    gsap.to(nav_links,{
        color:"purple",
    })
})

nav_links.addEventListener("mouseleave",()=>{
    gsap.to(nav_links,{
        color:"black",
    })
})