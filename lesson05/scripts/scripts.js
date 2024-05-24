
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const counter = document.querySelector('#counter');
let chapterCount = 0;


button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';


        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        li.appendChild(deleteButton);
        list.appendChild(li);


        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        chapterCount++;
        counter.textContent = `Chapters added: ${chapterCount}`;

        input.value = '';
        input.focus();


    }
    else {
        alert('Please enter a chapter');
        input.focus();
    }
});
