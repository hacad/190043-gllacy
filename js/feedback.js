var feedbackOverlay = document.querySelector(".feedback-overlay");
var feedbackForm = document.querySelector(".feedback-form");

var btnFeedbackShow = document.querySelector(".map-info .btn");
var btnFeedbackClose = document.querySelector(".feedback-close");

function showFeedbackForm(e) {
    e.preventDefault();
    feedbackOverlay.classList.add("feedback-overlay-show");
    feedbackForm.classList.add("feedback-form-show");
}

function closeFeedbackForm(e) {
    e.preventDefault();
    feedbackOverlay.classList.remove("feedback-overlay-show");
    feedbackForm.classList.remove("feedback-form-show");
}

btnFeedbackShow.addEventListener("click", showFeedbackForm);
btnFeedbackClose.addEventListener("click", closeFeedbackForm);