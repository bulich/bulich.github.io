const form = document.getElementsByName("finder_form")[0]
const date = document.getElementsByName("finder_start_date")[0]
const apiUrl = "/news/date/list/"

let searchUrl = ""

// --------------- Events
document.addEventListener("DOMContentLoaded", () => {
    console.log('loaded')
    if (!form) return
    form.addEventListener('change', onFormChange);
    form.addEventListener('submit', onFormSumbit);
})

function onFormChange() {
    console.log('on change');
    searchUrl = apiUrl + date.value;
}

function onFormSumbit(evt) {
    console.log('on submit');
    evt && evt.preventDefault && evt.preventDefault();
    if (form.checkValidity()) {
      console.log('prevented');
        window.location.href = searchUrl;
    }
}