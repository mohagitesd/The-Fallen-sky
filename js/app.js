gsap.fromTo("#cloud1", {
    x: -200,
}, {
    duration: 5,
    x: 0,

});

gsap.fromTo("#cloud4", {
    opacity: 0,
    x: 55,
    y: 55,
}, {
    duration: 6,
    opacity: 1,
    x: 0,
    y: 0,
});

gsap.fromTo("#cloud5", {
    x: 900,
}, {
    duration: 5,
    x: 0,

});

gsap.fromTo("#cloud6", {
    x: -500,
    y: 500,
}, {
    duration: 5,
    x: 0,
    y: 0,
});

gsap.fromTo("#paragraphCenter", {
    opacity: 0
}, {
    delay: 0.4,
    duration: 5,
    opacity: 1,
});

gsap.to("#cloud1", {
    y: 2,
    // Ce qui change par rapport à avant
    scrollTrigger: {

        trigger: "#cloud1",
        // position des marqueurs
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
});
gsap.to("#cloud2", {
    y: 2,
    // Ce qui change par rapport à avant
    scrollTrigger: {

        trigger: "#cloud1",
        // position des marqueurs
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
});
gsap.to("#cloud3", {
    y: 2,
    // Ce qui change par rapport à avant
    scrollTrigger: {

        trigger: "#cloud1",
        // position des marqueurs
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
});
gsap.to("#cloud4", {
    y: 2,
    // Ce qui change par rapport à avant
    scrollTrigger: {

        trigger: "#cloud1",
        // position des marqueurs
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
});
gsap.to("#cloud5", {
    y: 2,
    // Ce qui change par rapport à avant
    scrollTrigger: {

        trigger: "#cloud1",
        // position des marqueurs

        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
});
gsap.to("#cloud6", {
    y: 2,
    // Ce qui change par rapport à avant
    scrollTrigger: {

        trigger: "#cloud1",
        // position des marqueurs
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
});

cloud1.onmouseenter = function () {
    gsap.to("#cloud1", {
        duration: -1,
        filter: "brightness(0.8)",/*pour reduire l'intensité de la couleur*/


    });
}
cloud1.onmouseleave = function () {
    gsap.to("#cloud1", {
        duration: -1,
        filter: "brightness(1)",/*pour reduire l'intensité de la couleur*/


    });
}

cloud4.onmouseenter = function () {
    gsap.to("#eyes", {
        duration: -1,
        opacity: 1,


    });
}

cloud4.onmouseleave = function () {
    gsap.to("#eyes", {
        duration: -1,
        opacity: 0,


    });
}



cloud5.onmouseenter = function () {
    console.log("cloud 5 enter")

    gsap.to("#cloud5", {
        duration: -1,
        filter: "blur(0px)",


    });
}

cloud5.onmouseleave = function () {
    console.log("cloud 5 leave")

    gsap.to("#cloud5", {
        duration: -1,
        filter: "blur(10px)",


    });
}

cloud6.onmouseenter = function () {
    gsap.to("#cloud6", {
        duration: -1,
        filter: "brightness(0) saturate(100%) invert(14%) sepia(83%) saturate(7392%) hue-rotate(6deg) brightness(108%) contrast(123%)",


    });
}

cloud6.onmouseleave = function () {
    gsap.to("#cloud6", {
        duration: -1,
        filter: "invert(100%)",



    });
}

gsap.to("#bird1", {
    opacity: 1,
    // Ce qui change par rapport à avant
    scrollTrigger: {
        trigger: "#bird1",
        // afficher les marqueurs de ScrollTrigger
        // utile pour débugger
        markers: false,
        // position des marqueurs
        start: "top 40%",
        end: "bottom 60%",
        scrub: 1,
        pin: true,

    },
});

gsap.to("#bird2", {
    opacity: 1,
    // Ce qui change par rapport à avant
    scrollTrigger: {
        trigger: "#bird2",
        // afficher les marqueurs de ScrollTrigger
        // utile pour débugger
        markers: false,
        // position des marqueurs
        start: "top 30%",
        end: "bottom 70%",
        scrub: 1,
        pin: true,


    },
});

gsap.to("#bird3", {
    opacity: 1,
    // Ce qui change par rapport à avant
    scrollTrigger: {
        trigger: "#bird3",
        // afficher les marqueurs de ScrollTrigger
        // utile pour débugger
        markers: false,
        // position des marqueurs
        start: "top 30%",
        end: "bottom 70%",
        scrub: 1,
        pin: true,

    },
});

gsap.to("#bird4", {
    opacity: 1,
    // Ce qui change par rapport à avant
    scrollTrigger: {
        trigger: "#bird4",
        // afficher les marqueurs de ScrollTrigger
        // utile pour débugger
        markers: false,
        // position des marqueurs
        start: "top 30%",
        end: "bottom 70%",
        scrub: 1,
        pin: true,
    },
});

const timeline = gsap.timeline({
    // la partie ScrollTrigger avec l'ancrage
    scrollTrigger: {
        trigger: "#grandTitle",
        start: "top 70%",

        end: "bottom 30%",
        scrub: 1,
        markers: false,
        pin: true,
    },
});

// d'abord, on fait un zoom sur le titre
timeline.to("#grandTitle h1", {

    scale: 1,

});

// puis, on fait un fondu
timeline.to("#grandTitle", {
    opacity: 1,
});