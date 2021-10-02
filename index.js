function SmallScreenLine(){
    let t3=gsap.timeline({
        scrollTrigger:{
            trigger:"#sidenav",
            start:"top 50%",
            // markers:true
        }
    })

    t3.from("#sidenav #line",{
        opacity:0,
        width:0,
        duration:0.8
    })
}
function animateText(){
$('.mp2 p').textillate({
    // the default selector to use when detecting multiple texts to animate
    selector: '.texts',
  
    // enable looping
    loop: false,
  
    // sets the minimum display time for each text before it is replaced
    minDisplayTime: 2000,
  
    // sets the initial delay before starting the animation
    // (note that depending on the in effect you may need to manually apply
    // visibility: hidden to the element before running this plugin)
    initialDelay: 0,
  
    // set whether or not to automatically start animating
    autoStart: true,
  
    // custom set of 'in' effects. This effects whether or not the
    // character is shown/hidden before or after an animation
    inEffects: [],
  
    // custom set of 'out' effects
    outEffects: [ 'hinge' ],
  
    // in animation settings
    in: {
        // set the effect name
    //   effect: 'rollIn',
      effect: 'fadeIn',
  
      // set the delay factor applied to each consecutive character
      delayScale: 1.8,
  
      // set the delay between each character
      delay: 50,
  
      // set to true to animate all the characters at the same time
      sync: false,
  
      // randomize the character sequence
      // (note that shuffle doesn't make sense with sync = true)
      shuffle: false,
  
      // reverse the character sequence
      // (note that reverse doesn't make sense with sync = true)
      reverse: false,
  
      // callback that executes once the animation has finished
      callback: function () {}
    },
  
  
    // callback that executes once textillate has finished
    callback: function () {},
  
    // set the type of token to animate (available types: 'char' and 'word')
    type: 'char'
  });
}

function AnimateFullScreen(){

let t1=gsap.timeline();
t1
.from("#onStart p",{
opacity:0,
ease:Expo.easeInOut,
y:100,
duration:1,
})

.to("#onStart p",{
y:-1000,
opacity:0,
duration:1,
ease:Expo.easeInOut,
})

.to("#onStart",{
opacity:0,
y:-122,
ease:Expo.easeInOut,
duration:0.7,
display:"none"
},"-=1.2")


.from(".link",{
opacity:0,
y:20,
// ease:Expo.easeInOut,
duration:1,
},"-=0.5")

.from(".mp2",{
opacity:0,
onStart:function(){
    animateText()
} 
},"-=0.5")
.from("#m1",{
opacity:0,
y:15
},"-=0.5")

.from("#line",{
opacity:0,
width:0,
duration:0.8
})

.from("#btm a",{
y:50,
stagger:0.2
},"-=0.5")

// .to("ovr1",{
//     clipPath:" polygon(0 0, 0 0, 0 100%, 0 100%)",
//     duration:4
// })

.to(".reveal",
{
clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
duration:1
},"-=2.5")
}

function AnimateSmallScreen(){
    let t2=gsap.timeline();
    t2

    .from("#onStart p",{
    opacity:0,
    ease:Expo.easeInOut,
    y:100,
    duration:1,
    })

    .to("#onStart p",{
    y:-1000,
    opacity:0,
    duration:1,
    ease:Expo.easeInOut,
    })

    .to("#onStart",{
    opacity:0,
    y:-122,
    ease:Expo.easeInOut,
    duration:0.7,
    display:"none"
    },"-=1.2")


    .from("#upr .link",{
    opacity:0,
    y:20,
    // ease:Expo.easeInOut,
    duration:1,
    },"-=0.5")

    .from(".mp2",{
    opacity:0,
    onStart:function(){
        animateText()
    } 
    },"-=0.5")

    .from("#m1",{
    opacity:0,
    y:15
    },"-=0.5")

    .from("#m1r #line",{
    opacity:0,
    width:0,
    duration:0.8
    })

    .from("#btm a",{
    y:50,
    stagger:0.2
    },"-=0.5")

    SmallScreenLine()

    let t4=gsap.timeline({
        scrollTrigger:{
            trigger:"#g1 .reveal",
            start:"80% 90%",
            // markers:true
        }
    })

    t4.to(".reveal",{
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration:1,
        stagger:1.6
    })

    
}

if(window.innerWidth>=650){
    AnimateFullScreen()
}

else{
    AnimateSmallScreen()
}



