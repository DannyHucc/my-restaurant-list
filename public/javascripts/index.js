const cards = document.querySelector('.restaurant-cards')
const sort = document.querySelector('select').id
const options = [...document.querySelectorAll('option')]

// option select for sort
options.find((option) => {
    if (option.value === sort) option.selected = true
})

function deleteRestaurant(event) {
    const target = event.target
    if ((target.matches('.btn-delete') || target.matches('.fa-trash-alt'))) {
        event.preventDefault()
        swal({
            title: "確定刪除資料?",
            icon: "warning",
            text: "刪除的資料將無法恢復",
            buttons: true,
            dangerMode: true
        }).then(check => {
            if (check) {
                const id = target.dataset.id
                document.querySelector(`.form-${id}`).submit()
            }
        })
    }

}

cards.addEventListener('click', deleteRestaurant)