function login() {
    let client = document.getElementById("client").value;
    let code = document.getElementById("code").value;

    if(client === "07161587" && code === "9806") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").classList.remove("hidden");
        generateTransactions();
    } else {
        alert("Identifiants incorrects");
    }
}

// Générer 100 transactions
function generateTransactions() {
    let table = document.getElementById("transactions");

    for(let i=0; i<100; i++) {
        let row = table.insertRow();

        let date = row.insertCell(0);
        let label = row.insertCell(1);
        let amount = row.insertCell(2);

        date.innerHTML = "2026-03-" + (i+1);
        label.innerHTML = "Paiement " + (i+1);

        let value = (Math.random() * 500).toFixed(2);
        amount.innerHTML = "- " + value + " €";
    }
}
