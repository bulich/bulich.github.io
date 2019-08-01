const form = document.getElementsByName("finder_form")[0]
const date = document.getElementsByName("finder_start_date")[0]
const apiUrl = "/news/date/list/"

let searchUrl = ""

// --------------- Events
document.addEventListener("DOMContentLoaded", () => {
    if (!form) return
    form.addEventListener('change', onFormChange);
    form.addEventListener('submit', onFormSumbit);
})

function onFormChange() {
    searchUrl = apiUrl + date.value;
}

function onFormSumbit(evt) {
    evt && evt.preventDefault && evt.preventDefault();
    if (form.checkValidity()) {
        window.location.href = searchUrl;
    }
}