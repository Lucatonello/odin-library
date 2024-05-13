function addItem() {
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.querySelector('input[name="read"]:checked').value;

    const unknown = document.querySelector('.unknown');
    unknown.innerHTML += `<div class="card"> <h2 class="cardItem">Title: ${name}</h2><h3 class="cardItem">Author: ${author}</h3><h4 class="cardItem">Pages: ${pages}</h4><p class="readItem">Read: ${read}</p><button type="button" onclick="changeStatus(this)" class="changeStatus">Change Status</button><button type="button" onclick="deleteCard(this)" class="deleteButton">Delete</button></div>`;
}

function changeStatus(button) {
    let card = button.parentNode; 
    let readItem = card.querySelector('.readItem');

    let status = readItem.innerText.split(": ")[1]; 
    status = (status === 'yes') ? 'no' : 'yes'; 
    readItem.innerText = "Read: " + status;
}

function deleteCard(button) {
    let card = button.parentNode;
    card.remove();
}

function showForm() {
    document.getElementById('formElement').style.display = 'block';
}

const library = [];

function addBookToLibrary(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let read = document.querySelector('input[name="read"]:checked').value;
    
    let newBook = {
        name: name,
        author: author,
        pages: pages, 
        read: read
    };

    library.push(newBook);
    document.getElementById('formElement').reset();
}
function closeForm() {
    document.getElementById('formElement').style.display = 'none';

}
