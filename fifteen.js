// JavaScript source code
//620043175


/** FUNCTION SECTION**/

function setPuzzlePieces(w) {  //ADDS THE PUZZLEPIECE CLASS TO THE PIECES

    for (i = 0; i < w.length; i++) {
        w[i].classList.add("puzzlepiece");
        w[i].style.position = "relative";
        w[i].style.float = "left";
        
    }
    
}

function arrangeImage(p) { //PROPERLY SETS THE BACKGROUND IMAGE ON THE PIECES
                                    // X   Y
    p[0].style.backgroundPosition = "0 0";
    p[1].style.backgroundPosition = "-100px 0";
    p[2].style.backgroundPosition = "-200px 0";
    p[3].style.backgroundPosition = "-300px 0";

    p[4].style.backgroundPosition = "0 -100px";
    p[5].style.backgroundPosition = "-100px -100px";
    p[6].style.backgroundPosition = "-200px -100px";
    p[7].style.backgroundPosition = "-300px -100px";

    p[8].style.backgroundPosition = "0 -200px";
    p[9].style.backgroundPosition = "-100px -200px";
    p[10].style.backgroundPosition = "-200px -200px";
    p[11].style.backgroundPosition = "-300px -200px";

    p[12].style.backgroundPosition = "0 -300px";
    p[13].style.backgroundPosition = "-100px -300px";
    p[14].style.backgroundPosition = "-200px -300px";
    p[15].style.background = "none"; //hide background

    return p;
    
}

function switchPieces(p1, p2) { //created to switch pieces when clicked and is next to an empty space , also used in shufling the pieces

    if (p2.outerHTML.includes('id="empty"')) { 

        var x = [p1.className, p1.style.backgroundPosition, p1.style.position, p1.style.float, p1.innerHTML];

        p1.className = p2.className;  //switch class
        p1.style.backgroundPosition = ""; //change background position
        p1.style.background = "none"; //hide background
        p1.style.position = p2.style.position; // switch tile position
        p1.style.float = p2.style.float; // switch float style
        p1.setAttribute("id", "empty"); //set the empty class
        p1.innerHTML = p2.innerHTML;//remove number

        p2.className = x[0]; // switch class
        p2.removeAttribute("style"); //removing the styles from div to re add them
        p2.style.backgroundPosition = x[1]; //background position change
        p2.style.position = x[2];
        p2.style.float = x[3];
        p2.innerHTML = x[4];
        p2.removeAttribute("id"); //removing the 'empty' id  from div

    } else if (p1.outerHTML.includes('id="empty"')) {
        var x = [p2.className, p2.style.backgroundPosition, p2.style.position, p2.style.float, p2.innerHTML];

        p2.className = p1.className;    
        p2.style.backgroundPosition = "";
        p2.style.background = "none";    
        p2.style.position = p1.style.position; 
        p2.style.float = p1.style.float; 
        p2.setAttribute("id", "empty"); 
        p2.innerHTML = p1.innerHTML;

        p1.className = x[0]; 
        p1.removeAttribute("style"); 
        p1.style.backgroundPosition = x[1]; 
        p1.style.position = x[2];
        p1.style.float = x[3];
        p1.innerHTML = x[4];
        p1.removeAttribute("id"); 
    } else {                                                                    //CASE WHERE TILES ARE SHUFFLED

        var x = [p1.className, p1.style.backgroundPosition, p1.style.position, p1.style.float, p1.innerHTML];

        p1.className = p2.className;
        p1.style.backgroundPosition = p2.style.backgroundPosition;; 
        p1.style.position = p2.style.position; 
        p1.style.float = p2.style.float; 
        p1.innerHTML = p2.innerHTML;

        p2.className = x[0]; 
        p2.style.backgroundPosition = x[1];
        p2.style.position = x[2];
        p2.style.float = x[3];
        p2.innerHTML = x[4];
    }
}

function addListener(pieces2) {

    pieces2[0].onclick = function () {
        if (pieces2[1].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[0], pieces2[1]);
        } else if (pieces2[4].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[0], pieces2[4]);
        }
    };

    pieces2[1].onclick = function () {
        if (pieces2[2].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[1], pieces2[2]);
        } else if (pieces2[0].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[1], pieces2[0]);
        } else if (pieces2[5].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[1], pieces2[5]);
        }
    };

    pieces2[2].onclick = function () {

        if (pieces2[3].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[2], pieces2[3]);
        } else if (pieces2[1].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[2], pieces2[1]);
        } else if (pieces2[6].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[2], pieces2[6]);
        }
    };

    pieces2[3].onclick = function () {

        if (pieces2[2].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[3], pieces2[2]);
        } else if (pieces2[7].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[3], pieces2[7]);
        }
    };

    pieces2[4].onclick = function () { //5

        if (pieces2[0].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[4], pieces2[0]);
        } else if (pieces2[5].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[4], pieces2[5]);
        } else if (pieces2[8].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[4], pieces2[8]);
        }
    };

    pieces2[5].onclick = function () {  //6

        if (pieces2[1].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[5], pieces2[1]);
        } else if (pieces2[6].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[5], pieces2[6]);
        } else if (pieces2[9].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[5], pieces2[9]);
        } else if (pieces2[4].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[5], pieces2[4]);
        }
    };

    pieces2[6].onclick = function () {  //7

        if (pieces2[2].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[6], pieces2[2]);
        } else if (pieces2[5].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[6], pieces2[5]);
        } else if (pieces2[7].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[6], pieces2[7]);
        } else if (pieces2[10].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[6], pieces2[10]);
        }
    };

    pieces2[7].onclick = function () {  //8

        if (pieces2[3].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[7], pieces2[3]);
        } else if (pieces2[6].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[7], pieces2[6]);
        } else if (pieces2[11].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[7], pieces2[11]);
        }
    };

    pieces2[8].onclick = function () {  //9

        if (pieces2[9].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[8], pieces2[9]);
        } else if (pieces2[4].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[8], pieces2[4]);
        } else if (pieces2[12].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[8], pieces2[12]);
        }
    };

    pieces2[9].onclick = function () {  //10

        if (pieces2[10].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[9], pieces2[10]);
        } else if (pieces2[8].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[9], pieces2[8]);
        } else if (pieces2[13].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[9], pieces2[13]);
        } else if (pieces2[5].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[9], pieces2[5]);
        }
    };

    pieces2[10].onclick = function () {  //11

        if (pieces2[11].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[10], pieces2[11]);
        } else if (pieces2[6].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[10], pieces2[6]);
        } else if (pieces2[14].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[10], pieces2[14]);
        } else if (pieces2[9].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[10], pieces2[9]);
        }
    };

    pieces2[11].onclick = function () {  //12

        if (pieces2[10].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[11], pieces2[10]);
        } else if (pieces2[15].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[11], pieces2[15]);
        } else if (pieces2[7].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[11], pieces2[7]);
        }
    };

    pieces2[12].onclick = function () {  //13

        if (pieces2[8].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[12], pieces2[8]);
        } else if (pieces2[13].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[12], pieces2[13]);
        }
    };

    pieces2[13].onclick = function () { //14
        if (pieces2[14].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[13], pieces2[14]);
        } else if (pieces2[12].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[13], pieces2[12]);
        } else if (pieces2[9].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[13], pieces2[9]);
        }
    };

    pieces2[14].onclick = function () { //15
        if (pieces2[15].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[14], pieces2[15]);
        } else if (pieces2[13].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[14], pieces2[13]);
        } else if (pieces2[10].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[14], pieces2[10]);
        }
    };

    pieces2[15].onclick = function () {         //when a tile moves into the bottom right corner
        if (pieces2[14].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[15], pieces2[14]);
        } else if (pieces2[11].outerHTML.includes('id="empty"')) {
            switchPieces(pieces2[15], pieces2[11]);
        }
    };

}

function emptyEvn(p) {                  //FUNCTION TO HELP DETERMINE IF THE SHUFFLED PUZZLE IS SOLVABLE by checking the row in which the empty piece is in
    var t = p.length;
    for (i = 0; i < t; i++) {
        if (p[i].outerHTML.includes('id="empty"') && i < 4) {
            return true;
        } else if (pieces2[2].outerHTML.includes('id="empty"') && i > 7 && i < 12) {
            return true;
        } else {
            return false;
        }
    }

}

function shuffle(p) {  //SHUFFLES THE PIECES AND DETERMINES IF THE SHUFFLED PIECES ARE SOLVABLE
    var term = p.length;
    var term2 = term -1;
    var inversions = 0;
    
    for (i = 0; i < term2; i++) {
        var x = Math.floor(Math.random() * term2);
        console.log('x:'+x);

        if (p[x].outerHTML.includes('id="empty"')) {
            switchPieces(p[i], p[x]);
        } else {
            switchPieces(p[i], p[x]);
        }
        
        for (j = 0; j < term2-1; j++) {
            if (parseInt(p[x].innerHTML) > parseInt(p[j].innerHTML)) {
                inversions = inversions + 1;
                
            }
        }
        console.log(inversions);
    }
    
     if (inversions % 2 == 0 && !emptyEvn(p)) {
         console.log("solvable");
         console.log("check1: " + !emptyEvn(p));
         console.log("smhh2: " + emptyEvn(p));
         console.log("smhh3: " + inversions % 2);

     } else if (inversions % 2 == 1 && emptyEvn(p)) {
         console.log("solvable");
         console.log("smhh2"+ emptyEvn(p));
     } else {
        switchPieces(p[term2 - 1], p[term2]);
        inversions = inversions + 1;
        console.log("new after switching 1: "+inversions);
    }
       
}
/*
function checkEmpty(p , n) { //check if an empty space is next to a tile if MOUSEOVER
    // odd cases = 1, (2,3,) 4 | ,5,8 | ,9,12, | 13,(14,15)
    switch (parseInt(p.innerHTML)) {
        case 1:
            if (p[(n + 1)].outerHTML.includes('id="empty"')) {
                console.log("swichable to the right");
                var x = "right";
                return x;
            } else if (p[(n + 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable below");
                var x = "below";
                return x;
            }
            break;
        case 2:
        case 3:
            if (p[(n + 1)].outerHTML.includes('id="empty"')) {
                console.log("switchable to the right");
            } else if (p[(n - 1)].outerHTML.includes('id="empty"')) {
                console.log("switchable to the left");
            } else if (p[(n + 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable below");
            }
            break;
        case 4:
            if (p[(n - 1)].outerHTML.includes('id="empty"')) {
                console.log("swichable to the left");
            } else if (p[(n + 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable below");
            }
            break;
        case 5:
            if (p[(n - 4)].outerHTML.includes('id="empty"')) {
                console.log("swichable above");
            } else if (p[(n + 1)].outerHTML.includes('id="empty"')) {
                console.log("switchable to the right");
            } else if (p[(n + 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable below");
            }
            break;
        case 8:
            if (p[(n - 1)].outerHTML.includes('id="empty"')) {
                console.log("swichable to the left");
            } else if (p[(n + 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable below");
            } else if (p[(n - 4)].outerHTML.includes('id="empty"')) {
                console.log("swichable above");
            } 
            break;
        case 9:
            if (p[(n - 4)].outerHTML.includes('id="empty"')) {
                console.log("swichable above");
            } else if (p[(n + 1)].outerHTML.includes('id="empty"')) {
                console.log("switchable to the right");
            } else if (p[(n + 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable below");
            }
            break;
        case 12:
            if (p[(n - 1)].outerHTML.includes('id="empty"')) {
                console.log("swichable to the left");
            } else if (p[(n + 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable below");
            } else if (p[(n - 4)].outerHTML.includes('id="empty"')) {
                console.log("swichable above");
            }
            break;
        case 13:
            if (p[(n - 4)].outerHTML.includes('id="empty"')) {
                console.log("swichable above");
            } else if (p[(n + 1)].outerHTML.includes('id="empty"')) {
                console.log("switchable to the right");
            } 
            break;
        case 14:
            if (p[(n - 4)].outerHTML.includes('id="empty"')) {
                console.log("swichable above");
            } else if (p[(n + 1)].outerHTML.includes('id="empty"')) {
                console.log("switchable to the right");
            } else if (p[(n - 1)].outerHTML.includes('id="empty"')) {
                console.log("swichable to the left");
            }
            break;
        case 15:
            if (p[(n - 1)].outerHTML.includes('id="empty"')) {
                console.log("swichable to the left");
            } else if (p[(n - 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable above");
            }
            break;
        case 6:
        case 7:
        case 10:
        case 11:
            if (p[(n + 1)].outerHTML.includes('id="empty"')) {
                console.log("swichable to the right");
            } else if (p[(n + 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable below");
            } else if (p[(n - 1)].outerHTML.includes('id="empty"')) {
                console.log("swichable to the left");
            } else if (p[(n - 4)].outerHTML.includes('id="empty"')) {
                console.log("switchable above");
            }
            break;
    }


} 
*/

/** END FUNCTION**/


/**WORK DONE **/
window.onload = function () {


    /**VARIABLES**/

    var puzzleArea = document.getElementById("puzzlearea");
    console.log(puzzleArea);

    var pieces = puzzleArea.querySelectorAll("div");      //initial pieces of the puzzle
    console.log(pieces);

    /**END VARIABLES**/


   
    
    setPuzzlePieces(pieces);        //arrange pieces in order in puzzle area
    $('#puzzlearea').append('<div class="puzzlepiece" style="position: relative; float: left;" id ="empty"> </div>');    //adds empty square to puzzle
    pieces2 = puzzleArea.querySelectorAll("div");        //pieces including the blank space
    arrangeImage(pieces2);

    /*testing*/
        
    console.log(pieces2);

    var button = document.getElementById("shufflebutton");
    button.onclick = function () {
        shuffle(pieces2);
    };
    addListener(pieces2);
   
   
    /*testing*/

  /*END END*/ 
};