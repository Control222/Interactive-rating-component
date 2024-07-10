const submitButton = document.querySelector('.btn__submit');
const ratingButtons = document.querySelectorAll('.btn__rating');

const ratingState = document.querySelector('.rating__state');
const thankyouState = document.querySelector('.thankyou__state');

const ratingText = document.querySelector('span');

submitButton.disabled = true;

// CHANGING RATING SPAN

ratingButtons.forEach((grade) => {
  grade.addEventListener('click', () => {
    ratingText.innerHTML = grade.innerHTML;
    submitButton.disabled = false;
  });
});

// SUBMIT BUTTON

submitButton.addEventListener('click', () => {
  if (!submitButton.disabled) {
    ratingState.classList.toggle('hidden');
    thankyouState.classList.toggle('hidden');
  }
});
