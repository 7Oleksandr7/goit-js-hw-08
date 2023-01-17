import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input');
const userMessage = document.querySelector('textarea');

const userFeedback = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onFeedbackInput, 500));

function onFeedbackInput(e) {
  userFeedback[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userFeedback));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userFeedback);
}

function fillInput() {
  const savedInfo = localStorage.getItem('feedback-form-state');
  const parsedInfo = JSON.parse(savedInfo);
  if (savedInfo) {
    console.log(parsedInfo);
    userEmail.value = parsedInfo.email;
    userMessage.value = parsedInfo.message;
  }
}

fillInput();
