document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const display = document.querySelector("#directory-article");

    gridButton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
        display.innerHTML = "";

        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(member => {
                    const section = document.createElement('section');
                    section.classList.add("grid-item");
                    section.innerHTML = `
                        <img src="images/${member.image}" alt="${member.name}" />
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">Website</a>
                        <p>${member.membershipLevel}</p>
                        <p>${member.description}</p>
                    `;
                    display.appendChild(section);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });

    listButton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
        display.innerHTML = "";

        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(member => {
                    const section = document.createElement('section');
                    section.classList.add("list-item");
                    section.innerHTML = `
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">Website</a>
                        <p>${member.membershipLevel}</p>
                        <p>${member.description}</p>
                    `;
                    display.appendChild(section);
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(member => {
                const section = document.createElement('section');
                section.classList.add("grid-item");
                section.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}" />
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Website</a>
                    <p>${member.membershipLevel}</p>
                    <p>${member.description}</p>
                `;
                display.appendChild(section);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
