/* gsap.from(".contact",{
    duration: 2, 
    y: -100, 
    opacity: 0, 
    ease: "bounce",
    stagger: 0.5
}) */

gsap.to("nav h1",{
    fontSize: "2.5vw",
    left :"45%",
    scrollTrigger: {
        trigger : "nav h1",
        scroll: "main",
        start : "top 5px",
        end : "top -60%",
        scrub: 1,
        pin : "nav"
    }
})