const baselineBtn = document.querySelector("#baseline-btn");
const baselineToast = document.querySelector(".show-snackbar-baseline");
const toastBtn = document.querySelector("#close-baseline");

const leadingBtn = document.querySelector("#leading-btn");
const leadingToast = document.querySelector(".show-snackbar-leading");
const toastLeading = document.querySelector("#close-leading");

const hideToastBaseline = () => (baselineToast.style.visibility = "hidden");
const showToastBaseline = () => {
    leadingToast.style.visibility = "hidden";
    baselineToast.style.visibility = "visible";
    setTimeout(hideToastBaseline, 5000);
};
baselineBtn.addEventListener("click", showToastBaseline);

toastBtn.addEventListener("click", hideToastBaseline);


const hideToastLeading = () => (leadingToast.style.visibility = "hidden");
const showToastLeading = () => {
    baselineToast.style.visibility="hidden";
    leadingToast.style.visibility = "visible";
    setTimeout(hideToastLeading, 5000);
};

leadingBtn.addEventListener("click", showToastLeading);

toastLeading.addEventListener("click", hideToastLeading);