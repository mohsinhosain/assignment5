const btnSubmit = document.getElementsByClassName('btn-submit')
for (const btn of btnSubmit) {
    btn.addEventListener('click', function (event) {
        const player = event.target.parentNode.childNodes[1].innerText


        const playerList = document.getElementById("selected-players");
        const li = document.createElement("li")
        li.innerText = player;
        const allSelectedPlayers = document.querySelectorAll("#selected-players li").length

        if (allSelectedPlayers < 5) {
            playerList.appendChild(li)
            event.target.setAttribute("disabled", true)

        }
        else {
            alert("you can't add more than 5 players")
        }
    })
}