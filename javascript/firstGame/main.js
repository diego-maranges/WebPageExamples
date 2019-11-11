var numberOfRowsAndColumns = 3;

function reply_click(clicked_id) {
    var actualId = parseInt(clicked_id, 10);
    var rightId = actualId + 1;
    var leftId = actualId - 1;
    var topId = actualId - numberOfRowsAndColumns;
    var bottomId = actualId + numberOfRowsAndColumns;
    
    var actualButton = document.getElementById(actualId);
    var rightButton = document.getElementById(rightId);
    var leftButton = document.getElementById(leftId);
    var topButton = document.getElementById(topId);
    var bottomButton = document.getElementById(bottomId);
    
    if (rightId <= 9 && rightButton.value === "0") {
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
    } else if (bottomId <= 9 && bottomButton.value === "0") {
        bottomButton.value = actualButton.value;
        bottomButton.innerHTML = actualButton.innerHTML;
        actualButton.innerHTML = "0";
        actualButton.value = "0"
    }
}

function restartGame() {
    var temp = [1, 2, 3, 4, 5, 6, 7, 8, 0].sort(function() {
        return .5 - Math.random();
    });
    for(i = 1, j = 0; i <= 9; i++, j++) {
        document.getElementById(i).innerHTML = temp[j];
        document.getElementById(i).value = temp[j];
    }
}