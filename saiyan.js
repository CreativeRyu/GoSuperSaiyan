var aniContainer = document.querySelector(".ani-container");
var isTimerRunning = false;

const level = ["Super Saiyan", "Super Saiyan 2", "Super Saiyan 3", "Super Saiyan God"];  
var currentLevel = 0;

function loadCharacter(event) {
    if (isTimerRunning) {
        return;
    }
    var char = event.id.toString();
    char = char.split("-")[0];
    aniContainer.src = `./images/${char}_Idle_Regular.gif`;
}

function levelUp() {
    if (isTimerRunning) {
        return;
    }
    isTimerRunning = true;

    if (aniContainer) {
        let currentPath = getLevelByString(aniContainer.src);
        var nextLevel = getNextLevel(currentPath);
        let currentChar = getCharacter(aniContainer.src);
        if (nextLevel === "SuperSaiyan3") {
            aniContainer.style.height = "115%";
            aniContainer.style.top = "-24%";
            aniContainer.style.left = "14%";
        }
        aniContainer.src = `./images/${currentChar}_Transformation_${nextLevel}.gif`;

    } else {
        console.error("Element nicht gefunden");
    }

    setTimeout(() => {
        aniContainer.src = `./images/Goku_Idle_${nextLevel}.gif`;
        currentLevel++;
        isTimerRunning = false;
        aniContainer.style.height = "70%";
        aniContainer.style.top = "22%";
        aniContainer.style.left = "32%";
    }, "2500");
}

function getLevelByString(imageSource) {
    let currentLevel = imageSource.split("_").pop();
    currentLevel = currentLevel.split(".")[0];
    return currentLevel;
}

function getNextLevel(currentLevel) {
    switch (currentLevel) {
        case "Regular":
            return "SuperSaiyan";
        case "SuperSaiyan":
            return "SuperSaiyan2";
        case "SuperSaiyan2":
            return "SuperSaiyan3";
        case "SuperSaiyan3":
            return "Regular";
        default:
            return "Regular";
    }
}

function getCharacter(imageSource) {
    let currentCharacter = imageSource.split("_")[0];
    currentCharacter = currentCharacter.split("/").pop();
    return currentCharacter;
}