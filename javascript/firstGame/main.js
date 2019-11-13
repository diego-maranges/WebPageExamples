/*ids*/
var victoryId = "victory";
var audio = "winerSound";
var start = "start";
var restart = "restart";
var buttons = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3"];

/*classes*/
var container = "gameContainer";
var vAlert = "victoryAlert";

/*information about the game*/
var numberOfRAndC = 3;
var totalElements = numberOfRAndC * numberOfRAndC;

function reply_click(clicked_id) {
    var victory = document.getElementById(victoryId);
    if (victory.className === "noVictory") {
        if (moveToNewPosition(clicked_id) && checkIfWin()) {
            victory.className = vAlert;
            document.getElementById(audio).play();
            document.getElementById(restart).style.display = "block";
            victory.style.display = "block";
        }
    }
}

function moveToNewPosition(actualId) {
    var rightId = buttons.indexOf(actualId) + 1;
    var leftId = buttons.indexOf(actualId) - 1;
    var topId = buttons.indexOf(actualId) - numberOfRAndC;
    var bottomId = buttons.indexOf(actualId) + numberOfRAndC;

    var actualButton = document.getElementById(actualId);
    var rightButton = document.getElementById(buttons[rightId]);
    var leftButton = document.getElementById(buttons[leftId]);
    var topButton = document.getElementById(buttons[topId]);
    var bottomButton = document.getElementById(buttons[bottomId]);
    console.log(rightId, leftId, topId, bottomId)

    if (buttons.indexOf(actualId) % numberOfRAndC != 2 && rightId < totalElements && rightButton.className == "img0") {
        rightButton.className = actualButton.className;
        actualButton.className = "img0";
        return true;
    } else if (buttons.indexOf(actualId) % numberOfRAndC != 0 && leftId >= 0 && leftButton.className === "img0") {
        leftButton.className = actualButton.className;
        actualButton.className = "img0";
        return true;
    } else if (topId >= 0 && topButton.className === "img0") {
        console.log("as")
        topButton.className = actualButton.className;
        actualButton.className = "img0";
        return true;
    } else if (bottomId < totalElements && bottomButton.className === "img0") {
        bottomButton.className = actualButton.className;
        actualButton.className = "img0";
        return true;
    }
    return false;
}

function checkIfWin() {
    var result = true;
    var values;
    for (i = 0; i < totalElements - 1; i++) {
        result &= (document.getElementById(buttons[i]).className === ("img" + (i + 1)));
    }
    return result;
}

function restartGame() {
    var temp = [];

    sound = document.getElementById(audio);
    sound.pause();
    sound.currentTime = 0;

    for (i = 1; i < totalElements; i++) {
        temp.push(i);
    }
    temp.push("0");

    temp = temp.sort(function () {
        return .5 - Math.random();
    });

    for (i = 0; i < 9; i++) {
        document.getElementById(buttons[i]).className = "img" + temp[i];
    }

    document.getElementById(victoryId).className = "noVictory";
    document.getElementById(start).style.display = "none";
    document.getElementById(restart).style.display = "none";
    document.getElementById(victoryId).style.display = "none";
}
/*
function startGame() {
    // Adds an element to the document
    var cont = document.getElementsByClassName(container);
    var newElement = document.createElement("div");
    newElement.setAttribute('class', "row");
    var newColumn = document.createElement("div");
    newColumn.setAttribute('id', "1");
    newColumn.setAttribute('onClick', "reply_click(this.id)");
    newColumn.setAttribute('value', "1");
    newElement.appendChild(newColumn);
    cont[0].appendChild(newElement);
}*/
