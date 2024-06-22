const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}


fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const article = document.querySelector('article');
        data.forEach(member => {
            const section = document.createElement('section');
            section.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" />
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
                <p>${member.membershipLevel}</p>
                <p>${member.description}</p>
            `;
            article.appendChild(section);
        });
    });
