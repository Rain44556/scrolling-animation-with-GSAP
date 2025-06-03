var tl = gsap.timeline({
    defaults: { duration: 1, ease: "power1.inOut" },
    scrollTrigger:{
    trigger: "#about-section",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
}})

tl.to("#drink",{
    top: "122%",
    left: "12%",
    rotate: 20
}, "chocolate")

tl.to("#chocolate", {
    top: "126%",
    left: "25%",
}, "chocolate")

tl.to("#chocolate2", {
    top: "170%",
    right: "10%",
    rotate: -30,
},"chocolate")

tl.to("#chocolate3", {
    top: "110%",
    right: "10%",
    rotate: -50,
},"chocolate")

tl.to("#chocolate4", {
    top: "150%",
    right: "10%",
    rotate: -30,
    width: "18%"
},"chocolate")


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#footer",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
}})

tl2.fromTo("#chocolate",
  { width: "15%" },
  { width: "20%", left: "48%", top: "269%" },
  "drink"
)

tl2.to("#drink", {
    width: "29%",
    left: "30%",
    top: "217%",
    rotate: 0
}, "drink")

tl2.to("#chocolate2", {
    width: "10%",
    left: "30%",
    top: "236%",
    rotate: 290
}, "drink")