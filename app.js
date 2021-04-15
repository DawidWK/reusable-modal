const body = document.querySelector("body");

function toggleModal(modalID) {
    const modal = document.querySelector(`#${modalID}`);
    if (modal.classList.contains("modal--opened")) {
        closeModal(modal);
    } else {
        openModal(modal);
    }
}

function openModal(modal) {
    body.style.overflow = "hidden";
    modal.classList.add("modal--opened");
    modal.classList.add("fade-in");
    modal.onanimationend = () => {
        modal.classList.remove("fade-in");
    };
}

function closeModal(modal) {
    modal.classList.add("fade-out");
    modal.onanimationend = () => {
        body.style.overflow = "unset";
        modal.classList.remove("modal--opened");
        modal.classList.remove("fade-out");
    };
}