const sort = document.querySelector('select').id
const options = [...document.querySelectorAll('option')]

options.find((option) => {
    if (option.value === sort) option.selected = true
})