const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const counter = document.querySelector('#counter');

let chaptersArray = getChapterList() || [];
let chapterCount = chaptersArray.length;

// Displays the chapters from local storage
chaptersArray.forEach(chapter => {
    displayList(chapter);
});
counter.textContent = `Chapters added: ${chapterCount}`;

button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        chapterCount++;
        counter.textContent = `Chapters added: ${chapterCount}`;
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter');
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';

    deleteButton.setAttribute('aria-label', `Remove ${item}`);
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        chapterCount--;
        counter.textContent = `Chapters added: ${chapterCount}`;
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
