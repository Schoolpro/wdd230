const baseURL = "https://schoolpro.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

const displayLinks = (lessons) => {
    const dynamicLinksContainer = document.getElementById('dynamic-links');
    lessons.forEach((lesson) => {
        let lessonItem = document.createElement('li');
        let lessonTitle = document.createElement('h2');
        lessonTitle.textContent = `Lesson ${lesson.lesson}`;
        lessonItem.appendChild(lessonTitle);

        let linksList = document.createElement('ul');
        lesson.links.forEach((link) => {
            let listItem = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        lessonItem.appendChild(linksList);
        dynamicLinksContainer.appendChild(lessonItem);
    });
}

getLinks();
