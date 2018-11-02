// JavaScript source code
//620043175


/** FUNCTION SECTION**/
function setPuzzlePieces(w) {

    for (i = 0; i < w.length ; i++) {
        w[i].classList.add("puzzlepiece");
        w[i].style.position = "relative";
        w[i].style.float = "left";
        
    }

}

/** END FUNCTION**/


/**WORK DONE **/
window.onload = function () {


    /**VARIABLES**/

    var puzzleArea = document.getElementById("puzzlearea");
    console.log(puzzleArea);

    var pieces = puzzleArea.querySelectorAll("div");
    console.log(pieces);
    /**END VARIABLES**/


                                       // X   Y
    setPuzzlePieces(pieces);

    pieces[0].style.backgroundPosition = "0 0";
    //pieces[0].style.background = "0 0";
    //pieces[0].style.backgroundPosition = "0 0";

    pieces[1].style.backgroundPosition = "-100px 0";
    pieces[2].style.backgroundPosition = "-200px 0";
    pieces[3].style.backgroundPosition = "-300px 0";

    pieces[4].style.backgroundPosition = "0 -100px";
    pieces[5].style.backgroundPosition = "-100px -100px";
    pieces[6].style.backgroundPosition = "-200px -100px";
    pieces[7].style.backgroundPosition = "-300px -100px";

    pieces[8].style.backgroundPosition = "0 -200px";
    pieces[9].style.backgroundPosition = "-100px -200px";
    pieces[10].style.backgroundPosition = "-200px -200px";
    pieces[11].style.backgroundPosition = "-300px -200px";

    pieces[12].style.backgroundPosition = "0 -300px";
    pieces[13].style.backgroundPosition = "-100px -300px";
    pieces[14].style.backgroundPosition = "-200px -300px";
    

};
/**END END **/