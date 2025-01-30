const addBtn = document.querySelector('.add');
const close = document.querySelector('.close');
const dialog = document.querySelector('#bookDialog');
const form = document.querySelector('#bookForm');
const bookTable = document.querySelector('#bookTable tbody');

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

close.addEventListener('click', () =>{
    dialog.close();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
  `;
  
  bookTable.appendChild(newRow);

  dialog.close();

  form.reset();
});
