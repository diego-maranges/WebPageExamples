/*ids*/
var victoryId = "victory";
var audio = "winerSound";
var start = "start";
var restart = "restart";

/*classes*/
var container = "gameContainer";
var vAlert = "victoryAlert";

/*information about the game*/
var numberOfRAndC = 3;
var totalElements = numberOfRAndC * numberOfRAndC;

function reply_click(clicked_id) {
    var victory = document.getElementById(victoryId);
    if (victory.className === "noVictory") {
        var actualId = parseInt(clicked_id, 10);
        if (moveToNewPosition(actualId) && checkIfWin()) {
            victory.className = vAlert;
            document.getElementById("restart").style.display = "block";
            victory.style.display = "block";
            victory.style.visibility = "visible";
            document.getElementById(audio).play();
        }
    }
}

function moveToNewPosition(actualId) {
    var rightId = actualId + 1;
    var leftId = actualId - 1;
    var topId = actualId - numberOfRAndC;
    var bottomId = actualId + numberOfRAndC;

    var actualButton = document.getElementById(actualId);
    var rightButton = document.getElementById(rightId);
    var leftButton = document.getElementById(leftId);
    var topButton = document.getElementById(topId);
    var bottomButton = document.getElementById(bottomId);

    if (actualId % numberOfRAndC != 0 && rightId <= totalElements && rightButton.value === "0") {
        rightButton.value = actualButton.value;
        rightButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0";
        return true;
    } else if (actualId % numberOfRAndC != 1 && leftId >= 1 && leftButton.value === "0") {
        leftButton.value = actualButton.value;
        leftButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0";
        return true;
    } else if (topId >= 1 && topButton.value === "0") {
        topButton.value = actualButton.value;
        topButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0";
        return true;
    } else if (bottomId <= totalElements && bottomButton.value === "0") {
        bottomButton.value = actualButton.value;
        bottomButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0";
        return true;
    }
    return false;
}

function checkIfWin() {
    var result = true;
    for (i = 1; i <= totalElements - 1; i++) {
        var values = parseInt(document.getElementById(i).value, 10);
        result &= (values === i);
    }
    return result;
}

function restartGame() {
    var temp = [];
    for (i = 1; i < totalElements; i++) {
        temp.push(i);
    }
    temp.push("0");

    temp = temp.sort(function () {
        return .5 - Math.random();
    });

    for (i = 1, j = 0; i <= 9; i++, j++) {
        document.getElementById(i).innerHTML = temp[j];
        document.getElementById(i).value = temp[j];
    }

    document.getElementById(victoryId).className = "noVictory";
    document.getElementById(start).style.display = "none";
    document.getElementById(restart).style.display = "none";
    document.getElementById(victoryId).style.visibility = "hidden";
}

function startGame() {
    // Adds an element to the document
    var cont = document.getElementsByClassName(container);
    var newElement = document.createElement("div");
    newElement.setAttribute('class', "row");
    var newColumn = document.createElement("button");
    newColumn.setAttribute('id', "1");
    newColumn.setAttribute('onClick', "reply_click(this.id)");
    newColumn.setAttribute('value', "1");
    newColumn.innerHTML = 1;
    newElement.appendChild(newColumn);
    cont[0].appendChild(newElement);
}
