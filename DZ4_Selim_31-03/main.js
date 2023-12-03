document.addEventListener("DOMContentLoaded", function () {
    const peopleContainer = document.getElementById("people-container");

    // Запрос на сервер за данными
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const peopleData = JSON.parse(xhr.responseText);
            displayPeople(peopleData);
        }
    };
    xhr.send();

    function displayPeople(data) {
        data.forEach(person => {
            const card = document.createElement("div");
            card.classList.add("person-card");
            card.innerHTML = `
        <h2>${person.name}</h2>
        <p>Age: ${person.age}</p>
        <p>City: ${person.city}</p>
      `
            peopleContainer.appendChild(card);
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const jsonData = JSON.parse(xhr.responseText);
            console.log(jsonData);
        }
    };
    xhr.send();
});


