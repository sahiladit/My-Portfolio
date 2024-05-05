
const cursor1 = document.querySelector("#cursor1");

const main1 = document.querySelector(".main1")
const line1 = document.querySelector(".line1")

main1.addEventListener("mousemove",function(dets){
    gsap.to(cursor1,{
        x:dets.x,
        y:dets.y,
        ease:"back.out",
        duration:1,
    })
});


