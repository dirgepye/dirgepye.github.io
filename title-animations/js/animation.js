$(document).ready(function(){
    console.log("suck it")
})

var isOpen = false;
var twoIsOpen = false;
var threeIsOpen =false;

var animOne = document.getElementById("anim__one");
var animTwo = document.getElementById("anim__two");
var animThree = document.getElementById("anim__three");

$(document).ready(function() {
    $('a').click(function() {
        animOneFunctionRev();
        console.log("heck yeah")
        var href = $(this).attr('href');

        setTimeout(function() {
            window.location = href;

        }, 1000);
        return false;
    });


});

// document.addEventListener("DOMContentLoaded", function(event) {
//     animOneFunction();
// });


var shawn = document.getElementById("shawn"),
sten = document.getElementById("sten"),
house = document.getElementById("house"),
lastName = document.getElementById("last-name"),
img1 = document.getElementById("img-1"),
img2 = document.getElementById("img-2"),
img3 = document.getElementById("img-3"),
img4 = document.getElementById("img-4"),
img5 = document.getElementById("img-5"),
img6 = document.getElementById("img-6"),
img7 = document.getElementById("img-7"),
img8 = document.getElementById("img-8"),
img9 = document.getElementById("img-9"),
img10 = document.getElementById("img-10"),
img11 = document.getElementById("img-11"),
img12 = document.getElementById("img-12"),
img13 = document.getElementById("img-13"),
img14 = document.getElementById("img-14"),
links = document.getElementsByClassName("links"),
aboutRight = document.getElementsByClassName("right"),
aboutLeft = document.getElementsByClassName("left"),
navbarFixed = document.getElementsByClassName("navbar-fixed"),
navbarBg = document.getElementsByClassName("navbar-bg")


console.log(sten)
console.log(links)
console.log(aboutRight)
console.log(aboutLeft)

//document.onload=function(){title};
//document.addEventListener("load", animOneFunction);



function animOneFunction() {
    
    isOpen = true
    TweenLite.to(shawn, 1.5, {
        opacity: 1,
        bottom: -3
    });
    TweenLite.to(lastName, 1.5, {
        opacity: 1,
        bottom: 3
    })
    TweenLite.to(house, 2, {
        opacity: 1,
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
        // onComplete: onComplete
    })
    TweenLite.to(img14, 1.5, {
        bottom: "60px"
    })

}

//FIND TOTAL LENGTH

// var path = document.querySelector('.path');
// var length = path.getTotalLength();
// var pathTwo = document.querySelector('.path-two');
// var lengthTwo = pathTwo.getTotalLength();
// var pathThree = document.querySelector('.path-three');
// var lengthThree = pathThree.getTotalLength();
// console.log("path one " + length)
// console.log("path two " + lengthTwo)
// console.log("path three " + lengthThree)


//TweenLite.to(links, 10, {visibility: "visible"})
// TweenLite.to(sten, 1.5, {bottom: 10});
// TweenLite.to(house, 2, {bottom: 16});

// function onComplete() {
//     console.log("onComplete function fired")
//     var about = document.getElementById("about");
//     work = document.getElementById("work")
//     contact = document.getElementById("contact")

//     TweenLite.to(about, 0.5, {
//         opacity: 1,
//         onComplete: showWork
//     });

//     function showWork() {
//         TweenLite.to(work, 0.5, {
//             opacity: 1,
//             onComplete: showContact
//         });

//         function showContact() {
//             TweenLite.to(contact, 0.5, {
//                 opacity: 1
//             });
//         }
//     }

// }

function animOneFunctionRev() {
    var isOpen = false;
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
        // onComplete: onComplete
    })
    TweenLite.to(img14, 2.5, {
        bottom: "-60px"
    })

}



document.getElementById("anim-one").addEventListener("click", function(){
    
    if (twoIsOpen == true) {
        animTwo.style.left = "-10000px";
        twoIsOpen = false;
        animOne.style.left="0";
        animOneFunction();
        animTwoFunctionRev();
        isOpen = true;
    }
    
    
    else if (threeIsOpen == true) {
        animThree.style.left = "-10000px"
        threeIsOpen = false;
        animOne.style.left = "0"
        animOneFunction();
        isOpen = true;
    }
    else if (isOpen == true) {
        animOneFunctionRev();
        isOpen = false;
        
    }
    else {
        
        animOne.style.left = "0";
        isOpen = true;
        animOneFunction();
        
    }
    console.log("one = " + isOpen)
    console.log("two = " + twoIsOpen)
})


//ANIMATION TWO 
function animTwoFunction() {
    
    
    $("#path-one").css({
       "-moz-animation-name":"dash",
       "-moz-animation-duration":"15s",
       "-moz-animation-iteration-count":"1",
       "-moz-animation-fill-mode":"forwards",
       
       "-webkit-animation-name":"dash",
       "-webkit-animation-duration":"15s",
       "-webkit-animation-iteration-count":"1",
       "-webkit-animation-fill-mode":"forwards"
       
    });
    
    $("#path-two").css({
       "-moz-animation-name":"dash-two",
       "-moz-animation-duration":"15s",
       "-moz-animation-iteration-count":"1",
       "-moz-animation-fill-mode":"forwards",
       
       "-webkit-animation-name":"dash-two",
       "-webkit-animation-duration":"15s",
       "-webkit-animation-iteration-count":"1",
       "-webkit-animation-fill-mode":"forwards"
       
    });
    
    $("#path-three").css({
       "-moz-animation-name":"dash-three",
       "-moz-animation-duration":"15s",
       "-moz-animation-iteration-count":"1",
       "-moz-animation-fill-mode":"forwards",
       
       "-webkit-animation-name":"dash-three",
       "-webkit-animation-duration":"15s",
       "-webkit-animation-iteration-count":"1",
       "-webkit-animation-fill-mode":"forwards"
       
    });
}

function animTwoFunctionRev() {
    var pathOne = document.getElementById("path-one");
    
    $("#path-one").css({
       "-moz-animation-name":"rev-dash",
       "-moz-animation-duration":"2s",
       "-moz-animation-iteration-count":"1",
       "-moz-animation-fill-mode":"forwards",
       
       "-webkit-animation-name":"rev-dash",
       "-webkit-animation-duration":"2s",
       "-webkit-animation-iteration-count":"1",
       "-webkit-animation-fill-mode":"forwards"
       
    });
    
    $("#path-two").css({
       "-moz-animation-name":"rev-dash-two",
       "-moz-animation-duration":"2s",
       "-moz-animation-iteration-count":"1",
       "-moz-animation-fill-mode":"forwards",
       
       "-webkit-animation-name":"rev-dash-two",
       "-webkit-animation-duration":"2s",
       "-webkit-animation-iteration-count":"1",
       "-webkit-animation-fill-mode":"forwards"
       
    });
    
    $("#path-three").css({
       "-moz-animation-name":"rev-dash-three",
       "-moz-animation-duration":"2s",
       "-moz-animation-iteration-count":"1",
       "-moz-animation-fill-mode":"forwards",
       
       "-webkit-animation-name":"rev-dash-three",
       "-webkit-animation-duration":"2s",
       "-webkit-animation-iteration-count":"1",
       "-webkit-animation-fill-mode":"forwards"
       
    });
}


document.getElementById("anim-two").addEventListener("click", function(){

    if (isOpen == true) {
        animOne.style.left = "-10000px";
        isOpen = false;
        animTwo.style.left = "0" //Throw these into the functions?
        animOneFunctionRev();
        animTwoFunction();
        twoIsOpen = true;
    }
    else if (threeIsOpen == true) {
        animThree.style.left = "-10000px";
        threeIsOpen = false;
        animTwo.style.left = "0"; //Throw these into the functions?
        
        animTwoFunction();
        twoIsOpen = true;
    }
    else if (twoIsOpen == true) {
        animTwoFunctionRev();
        twoIsOpen = false;
        
    }
    else {
        animOne.style.left = "-10000px";
        animTwo.style.left = "0";
        twoIsOpen = true;
        animTwoFunction();
        
    }
        console.log("one = " + isOpen)
    console.log("two = " + twoIsOpen)
});



document.getElementById("anim-three").addEventListener("click", function(){
    alert("not yet available. sorry :(")
})