document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const display = document.querySelector("#directory-article");

    gridButton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
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
        });

    listButton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
        display.innerHTML = ""; // Clear the current content

        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                const table = document.createElement('table');
                table.classList.add("directory-table");
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Membership Level</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                `;
                const tbody = table.querySelector('tbody');
                data.forEach(member => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${member.name}</td>
                        <td>${member.address}</td>
                        <td>${member.phone}</td>
                        <td><a href="${member.website}" target="_blank">Website</a></td>
                        <td>${member.membershipLevel}</td>
                        <td>${member.description}</td>
                    `;
                    tbody.appendChild(row);
                });
                display.appendChild(table);
            });
    });
});
