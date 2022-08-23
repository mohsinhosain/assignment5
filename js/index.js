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

document.getElementById("calculate").addEventListener("click", function () {


    const selectedPlayersExpenses = document.getElementById("totalPlayerExpense");
    const totalExpense = totalExpenses()
    selectedPlayersExpenses.innerText = totalExpense

})
function totalExpenses() {
    const perPlayerCost = parseInt(document.getElementById("perPlayerCost").value)
    const allSelectedPlayers = document.querySelectorAll("#selected-players li").length
    const totalExp = perPlayerCost * allSelectedPlayers
    return totalExp;
}

document.getElementById("totalCalculate").addEventListener('click', function () {
    const manager = parseInt(document.getElementById("manager").value)
    const coach = parseInt(document.getElementById("coach").value)
    const allTotal = totalExpenses() + manager + coach;
    document.getElementById("allTotalExpenses").innerText = allTotal
})