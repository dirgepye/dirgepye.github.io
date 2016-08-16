document.addEventListener("DOMContentLoaded", function(event) {
    titleFunction();
});

var shawn = document.getElementById("shawn")
sten = document.getElementById("sten")
house = document.getElementById("house")
lastName = document.getElementById("last-name")
img1 = document.getElementById("img-1")
img2 = document.getElementById("img-2")
img3 = document.getElementById("img-3")
img4 = document.getElementById("img-4")
img5 = document.getElementById("img-5")
img6 = document.getElementById("img-6")
img7 = document.getElementById("img-7")
img8 = document.getElementById("img-8")
img9 = document.getElementById("img-9")
img10 = document.getElementById("img-10")
img11 = document.getElementById("img-11")
img12 = document.getElementById("img-12")
img13 = document.getElementById("img-13")
img14 = document.getElementById("img-14")
links = document.getElementsByClassName("links")
aboutRight = document.getElementsByClassName("right")
aboutLeft = document.getElementsByClassName("left")
navbarFixed = document.getElementsByClassName("navbar-fixed")
navbarBg = document.getElementsByClassName("navbar-bg")


var one = document.getElementById("bar-one");
var two = document.getElementById("bar-two");
var three = document.getElementById("bar-three");
var four = document.getElementById("bar-four");
var five = document.getElementById("bar-five");
var six = document.getElementById("bar-six");
var seven = document.getElementById("bar-seven");
var eight = document.getElementById("bar-eight");
var nine = document.getElementById("bar-nine");
var ten = document.getElementById("bar-ten");



//speeds
var speeds = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];
var directions = ["-3000px", "3000px"];

function randSpeed() {
    var speed = speeds[Math.floor(Math.random() * speeds.length)];
    return speed;
}

function randDirect() {
    var direction = directions[Math.floor(Math.random() * directions.length)]
    return direction;
}

function removeCover() {
    $(".cover").css("display","none");
}

function bgFunction() {
    console.log("fnewafe")
    TweenLite.to(one, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(two, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(three, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(four, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(five, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(six, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(seven, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(eight, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(nine, randSpeed(), {
        left: randDirect(),
    });
    TweenLite.to(ten, randSpeed(), {
        left: randDirect(),
        onComplete: removeCover
    })
}


function clickAss() {
    console.log("fdsagdsa");
}


function titleFunction() {
    console.log("fdsafw")
    TweenLite.to(shawn, 1.5, {
        opacity: 1,
        bottom: -3
    });
    TweenLite.to(lastName, 1.5, {
        opacity: 1,
        bottom: 3
    })
    TweenLite.to(house, 2, {
        bottom: 8
    })

    TweenLite.to(img1, 1.5, {
        bottom: "-45px"
    })
    TweenLite.to(img2, 1.75, {
        bottom: "-35px"
    })
    TweenLite.to(img3, 2, {
            bottom: "-6px"
        })
        //stenhouse
    TweenLite.to(img6, 1.5, {
        bottom: "20px"
    })
    TweenLite.to(img7, 1.5, {
        bottom: "10px"
    })
    TweenLite.to(img8, 2, {
        bottom: "6px"
    })
    TweenLite.to(img9, 1.5, {
        bottom: "6px"
    })
    TweenLite.to(img10, 2, {
        bottom: "60px"
    })
    TweenLite.to(img11, 1.5, {
        bottom: "30px"
    })
    TweenLite.to(img12, 2, {
        bottom: "65px"
    })
    TweenLite.to(img13, 1.5, {
        bottom: "65px",
        onComplete: onComplete
    })
    TweenLite.to(img14, 1.5, {
        bottom: "60px"
    })

}

function onComplete() {
    console.log("onComplete function fired")
    var about = document.getElementById("about");
    work = document.getElementById("work")
    contact = document.getElementById("contact")

    TweenLite.to(about, 0.5, {
        opacity: 1,
        onComplete: showWork
    });

    function showWork() {
        TweenLite.to(work, 0.5, {
            opacity: 1,
            onComplete: showContact
        });

        function showContact() {
            TweenLite.to(contact, 0.5, {
                opacity: 1
            });
        }
    }

}

function undo() {
    TweenLite.to(shawn, 1.5, {
        opacity: 0,
        bottom: 3
    });
    TweenLite.to(lastName, 1.5, {
        opacity: 0,
        bottom: -3
    });
    TweenLite.to(house, 2, {
        bottom: -8
    });

    TweenLite.to(img1, 1.5, {
        bottom: "45px"
    });
    TweenLite.to(img2, 1.5, {
        bottom: "35px"
    });
    TweenLite.to(img3, 2, {
        bottom: "6px"
    });
    //stenhouse
    TweenLite.to(img6, 0.75, {
        bottom: "-20px"
    });
    TweenLite.to(img7, 1.5, {
        bottom: "-10px"
    });
    TweenLite.to(img8, 1.5, {
        bottom: "-6px"
    });
    TweenLite.to(img9, 1, {
        bottom: "-6px"
    });
    TweenLite.to(img10, 1.75, {
        bottom: "-60px"
    });
    TweenLite.to(img11, 2, {
        bottom: "-30px"
    });
    TweenLite.to(img12, 0.5, {
        bottom: "-65px"
    })
    TweenLite.to(img13, 1, {
        bottom: "-65px",
        onComplete: onComplete
    })
    TweenLite.to(img14, 2.5, {
        bottom: "-60px"
    })

}
