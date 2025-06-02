var tl = gsap.timeline({scrollTrigger:{
    trigger: "#about-section",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
}})

tl.to("#drink",{
    top: "105%",
    left: "12%",
    rotate: "-20deg"
}, "chocolate")

tl.to("#chocolate", {
    top: "110%",
    left: "25%",
}, "chocolate")

tl.to("#chocolate2", {
    top: "160%",
    right: "10%",
    rotate: "-20deg",
},"chocolate")

tl.to("#chocolate3", {
    top: "100%",
    right: "10%",
    rotate: "-30deg",
},"chocolate")

tl.to("#chocolate4", {
    top: "130%",
    right: "10%",
    rotate: "-30deg",
    width: "18%"
},"chocolate")


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#footer",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
}})

tl2.to("#chocolate", {
    width: "22%",
    left: "50%",
    top: "235%"
}, "drink")

tl2.to("#drink", {
    width: "30%",
    left: "30%",
    top: "183%",
    rotate: "0deg"
}, "drink")