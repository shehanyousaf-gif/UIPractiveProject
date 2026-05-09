const personalcursor = document.getElementById("cursor");

let cursoractivator = document.querySelector("body");

cursoractivator.addEventListener("mouseenter", (dets) => {
  console.log(dets);
  gsap.to(personalcursor, {
    opacity: 1,
    ease: "power2.out",
    scale: 1,
  });
});

cursoractivator.addEventListener("mousemove", (dets) => {
  gsap.to(personalcursor, {
    left: dets.x,
    top: dets.y,
    duration: 0.2,
    ease: "power2.out",
  });
});


cursoractivator.addEventListener("mouseleave", (dets) => {
  gsap.to(personalcursor, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
    ease: "power2.out",
    left: dets.x,
    top: dets.y,
  });
});
