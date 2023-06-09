let submissionTimeValue = new Date();

const label = document.querySelector('label.submission-date');

const submissionInput = label.querySelector('input');

let submissionInputValue = submissionInput.value;

submissionInputValue = submissionTimeValue;

console.log(submissionInputValue);