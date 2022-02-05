function showCodeForComp(id) {
    const selectedComp = document.getElementById(id)
    return selectedComp.style.display === "none" ? selectedComp.style.display = "block" : selectedComp.style.display = "none";
}