var numberOfRowsAndColumns = 3;
var totalElements = numberOfRowsAndColumns * numberOfRowsAndColumns;

function reply_click(clicked_id) {
    var victory = document.getElementById("victory");
    if (victory.className === "noVictory") {
        var actualId = parseInt(clicked_id, 10);
        moveToNewPosition(actualId);
        if (checkIfWin()) {
            victory.className = "victoryAlert";
            document.getElementById("restart").style.display = "block";
            victory.style.display = "block";
            victory.style.visibility = "visible";
        }
    }
}

function moveToNewPosition(actualId) {
    var rightId = actualId + 1;
    var leftId = actualId - 1;
    var topId = actualId - numberOfRowsAndColumns;
    var bottomId = actualId + numberOfRowsAndColumns;

    var actualButton = document.getElementById(actualId);
    var rightButton = document.getElementById(rightId);
    var leftButton = document.getElementById(leftId);
    var topButton = document.getElementById(topId);
    var bottomButton = document.getElementById(bottomId);

    if (rightId <= totalElements && rightButton.value === "0") {
        rightButton.value = actualButton.value;
        rightButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0"
    } else if (leftId >= 1 && leftButton.value === "0") {
        leftButton.value = actualButton.value;
        leftButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0"
    } else if (topId >= 1 && topButton.value === "0") {
        topButton.value = actualButton.value;
        topButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0"
    } else if (bottomId <= totalElements && bottomButton.value === "0") {
        bottomButton.value = actualButton.value;
        bottomButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0"
    }
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
    
    document.getElementById("victory").className = "noVictory";
    document.getElementById("start").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("victory").style.visibility = "hidden";
}

function startGame() {
    
}
