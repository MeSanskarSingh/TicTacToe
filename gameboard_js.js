let playerx = localStorage.getItem("playerX");
        let playero = localStorage.getItem("playerO");
        let playerxscore = localStorage.getItem("playerXscore");
        let playeroscore = localStorage.getItem("playerOscore");

        let gamestopped = document.querySelector(".gamestopped");

        const setScoreboard = () => {
            let playerx = localStorage.getItem("playerX");
            let playero = localStorage.getItem("playerO");
            document.querySelector(".scoreboard").innerHTML
            = `
            <p class="score">${playerx} - ${playerxscore}</p>
            <p class="score">${playero} - ${playeroscore}</p>
            `
        }

        setScoreboard();

        let turn = "playerx";
        let pTurn = document.querySelector("#turn");

        function setTurn(turn) {
            
            if (turn == "playerx") {
                pTurn.innerHTML = `TURN - ${playerx} (X)`;
            } else {
                pTurn.innerHTML = `TURN - ${playero} (O)`;
            }
        }

        setTurn(turn);

        const checkWin = () => {
            let box1 = document.getElementById("box1").innerHTML;
            let box2 = document.getElementById("box2").innerHTML;
            let box3 = document.getElementById("box3").innerHTML;
            let box4 = document.getElementById("box4").innerHTML;
            let box5 = document.getElementById("box5").innerHTML;
            let box6 = document.getElementById("box6").innerHTML;
            let box7 = document.getElementById("box7").innerHTML;
            let box8 = document.getElementById("box8").innerHTML;
            let box9 = document.getElementById("box9").innerHTML;

            if (
                box1 == "X" && box2 == "X" && box3 == "X" ||
                box4 == "X" && box5 == "X" && box6 == "X" ||
                box7 == "X" && box8 == "X" && box9 == "X" ||
                box1 == "X" && box4 == "X" && box7 == "X" ||
                box2 == "X" && box5 == "X" && box8 == "X" ||
                box3 == "X" && box6 == "X" && box9 == "X" ||
                box1 == "X" && box5 == "X" && box9 == "X" ||
                box3 == "X" && box5 == "X" && box7 == "X"
            ) {
                let playerxscore = localStorage.getItem("playerXscore");
                playerxscore = parseInt(playerxscore) + 1;
                localStorage.setItem("playerXscore", playerxscore);
                setScoreboard();
                gamestopped.style.display = "flex";
                gamestopped.innerHTML = `
                <h1>${playerx} Wins! (X)</h1>
                <div>
                    <button id="replay" onclick="window.location.href='gameboard.html'">PLAY AGAIN</button>

                    <button id="quit" onclick="window.location.href='index.html'">QUIT</button>
                </div>
                `
            }
                else if (
                box1 == "O" && box2 == "O" && box3 == "O" ||
                box4 == "O" && box5 == "O" && box6 == "O" ||
                box7 == "O" && box8 == "O" && box9 == "O" ||
                box1 == "O" && box4 == "O" && box7 == "O" ||
                box2 == "O" && box5 == "O" && box8 == "O" ||
                box3 == "O" && box6 == "O" && box9 == "O" ||
                box1 == "O" && box5 == "O" && box9 == "O" ||
                box3 == "O" && box5 == "O" && box7 == "O"
            ) {
                let playeroscore = localStorage.getItem("playerOscore");
                playeroscore = parseInt(playeroscore) + 1;
                localStorage.setItem("playerOscore", playeroscore);
                setScoreboard();
                gamestopped.style.display = "flex";
                gamestopped.innerHTML = `
                <h1>${playero} Wins! (O)</h1>
                <div>
                    <button id="replay" onclick="window.location.href='gameboard.html'">PLAY AGAIN</button>

                    <button id="quit" onclick="window.location.href='index.html'">QUIT</button>
                </div>
                `
            }
                else if (box1 != "" && box2 != "" && box3 != "" &&
                         box4 != "" && box5 != "" && box6 != "" &&
                         box7 != "" && box8 != "" && box9 != "") {
                    gamestopped.style.display = "flex";
                    gamestopped.innerHTML = `
                    <h1>Match Draw!</h1>
                    <div>
                        <button id="replay" onclick="window.location.href='gameboard.html'">PLAY AGAIN</button>

                        <button id="quit" onclick="window.location.href='index.html'">QUIT</button>
                    </div>
                    `
                }
        }

        const showXO = (boxId) => {
            let box = document.getElementById(boxId);
            if (turn == "playerx" && box.innerHTML == "") {
                box.innerHTML = "X";
                turn = "playero";
                setTurn(turn);
            } else if (turn == "playero" && box.innerHTML == "") {
                box.innerHTML = "O";
                turn = "playerx";
                setTurn(turn);
            }
        }

        const btnPressed = async(boxId) => {
            await showXO(boxId);
            checkWin();
        }