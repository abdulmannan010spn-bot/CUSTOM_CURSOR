var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var box = document.querySelector(".box");

main.addEventListener("mousemove" ,function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        ease:"back.out(1.7)"
    })
})

box.addEventListener("mouseenter",function(){
    cursor.innerHTML="❤️"
    gsap.to(cursor,{
        scale:2.5,
        duration:0.5,
        ease:"back.out(1.7)",
    })
})

box.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        duration:0.5,
        ease:"back.out(1.7)"
    })
})