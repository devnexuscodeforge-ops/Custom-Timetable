let total = 0;

function addTask(){

    const subject = document.getElementById("subject").value;
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    const hours = document.getElementById("hours").value;

    if(subject === "" || start === "" || end === "" || hours === ""){
        alert("Please fill all inputs");
        return;
    }

    document.getElementById("emptyText").style.display = "none";

    const schedule = document.getElementById("schedule");

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>📘 ${subject}</h3>
        <p>🕒 ${start} - ${end}</p>
        <p>⏳ ${hours} Hours</p>

        <button class="delete-btn">
            🗑 Delete
        </button>
    `;

    schedule.appendChild(card);

    total += Number(hours);

    document.getElementById("totalHours").textContent = total;

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.onclick = function(){

        total -= Number(hours);

        document.getElementById("totalHours").textContent = total;

        card.remove();

        if(schedule.children.length === 0){
            document.getElementById("emptyText").style.display = "block";
        }

    };

    document.getElementById("subject").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("hours").value = "";

}
