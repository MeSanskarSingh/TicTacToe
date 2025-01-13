localStorage.clear();
        
const startGame = () => {
    if (document.getElementById('playerX').value == "" ||
        document.getElementById('playerO').value == "") {
        alert("Please enter player names!");
    } else if (document.getElementById('playerX').value == 
                document.getElementById('playerO').value) {
        alert("Player names should be different!");
    } else {
        localStorage.setItem("playerX", document.getElementById('playerX').value);
        localStorage.setItem("playerO", document.getElementById('playerO').value);
        localStorage.setItem("playerXscore", 0);
        localStorage.setItem("playerOscore", 0);
        window.location.href = "gameboard.html";
    }
}