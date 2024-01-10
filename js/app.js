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
    gsap.to("#cloud5", {
        duration: -1,
        filter: "blur(0px)",


    });
}

cloud5.onmouseleave = function () {
    gsap.to("#cloud5", {
        duration: -1,
        filter: "blur(10px)",


    });
}

cloud6.onmouseenter = function () {
    gsap.to("#cloud6", {
        duration: -1,
        filter: 'hue-rotate(120deg)',/* Teinte ajustée pour passer de blanc à rouge */


    });
}

cloud6.onmouseleave = function () {
    gsap.to("#cloud6", {
        duration: -1,
        filter: "hue-rotate(0deg)",



    });
}

gsap.to("#bird", {

    opacity: 1,
    // Ce qui change par rapport à avant
    scrollTrigger: {
        trigger: "#bird",
        // afficher les marqueurs de ScrollTrigger
        // utile pour débugger
        markers: true,
        // position des marqueurs
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
    },
});