const optionsButton = document.getElementById("options");
const optionsContainer = document.getElementById('optionsContainer');

optionsButton.addEventListener("click", () => {
    const isVisible = optionsButton.classList.toggle("opacity-50");

    optionsButton.classList.toggle("opacity-75", !isVisible);
    optionsContainer.classList.toggle("d-none", isVisible);
});
