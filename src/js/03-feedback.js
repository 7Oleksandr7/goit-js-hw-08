import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  //   setTimeout(() => {
  //     document.location.reload();
  //   }, 3000);
}

form.addEventListener('input', throttle(addLocalStorage, 500));

function addLocalStorage(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillInput() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    emailInput.value = JSON.parse(savedData).email;
    messageInput.value = JSON.parse(savedData).message;
  }
}
fillInput();
