var crsr=document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"

})


var tl=gsap.timeline()
tl.from(".page1 img, p",{
    y:-250,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:.5

},"x")
tl.from(".page1 h2 ,i",{
    duration:1,
    delay:2,
    opacity:0,
    stagger:.5

},"x")
tl.to(".page1 h1",{
  duration:2,
  delay:2,
  opacity:0,
  stagger:.5

},"x")

// tl.to(".arr i",{
//   y:80,
//   repeat:-1,
//   duration:1,
//   yoyo:true
// },"x")



// tl.from(".page3 h1",{
//     duration:1,
//     opacity:0,
//     delay:1,
//     ScrollTrigger:{
//         trigger:".page3 h1",
//         scroller:".main",
//         markers:true,
//         start:"top 50%",
//         end:"top 30%",
//         scrub:1
//     }

// })

function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

tl.from(".qq,.h11,.aa,.bb,.cc",{
  x:-700,
  opacity:0,
  scrollTrigger:{
      trigger:".qq",
      scroller:".main",
      // markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:2
      // stagger:.5
  }

},"x")

// tl.to(".page2 button",{
//   opacity:0,
//   scrollTrigger:{
//       trigger:".page2 button",
//       scroller:".main",
//       // markers:true,
//       start:"top 50%",
//       end:"top 30%",
//       scrub:2
//       // stagger:.5
//   }

// },"x")

tl.from(".right1,.right2",{
  x:-700,
  opacity:0,
  scrollTrigger:{
      trigger:".qq",
      scroller:".main",
      // markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:2,
      stagger:.5
  }

},"x")



tl.from(".page4 h1",{
  x:500,
  opacity:0,
  scrollTrigger:{
      trigger:".page4 h1",
      scroller:".main",
      // markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:2,
  }

},"x")


// tl.from(".page4-right i",{
//   y:80,
//   repeat:-1,
//   duration:1,
//   yoyo:true
// },"x")


tl.from(".page3 h1",{
  x:500,
  delay:1,
  opacity:0,
  scrollTrigger:{
      trigger:".page3 h1",
      scroller:".main",
      // markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:2,
  }

},"x")


