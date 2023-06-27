const form = document.querySelector('.info-form')
const backBtn = document.querySelector('.btn-back')
const saveBtn = document.querySelector('.btn-save')

function clickSaveBtn(event) {
    form.classList.add('was-validated')
}

function sweetAlert(event) {
    event.preventDefault()
    swal({
        title: "確定返回首頁?",
        icon: "warning",
        text: "尚未儲存的資料離開頁面後會消失",
        buttons: true,
        dangerMode: true
    }).then(check => {
        if (check) {
            window.location.href = "../"
        }
    })
}

saveBtn.addEventListener('click', clickSaveBtn)
backBtn.addEventListener('click', sweetAlert)