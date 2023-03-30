const inputUser = document.querySelector('.input--user')
const inputPhone = document.querySelector('.input--phone')
const btnSend = document.querySelector('.btn--send')
const modalStatus = document.querySelector('.modal_status')
const modal = document.querySelector('.modal')

btnSend.addEventListener('click', async (e) => {
    e.preventDefault()  

    const objUser = {
        postname: inputUser.value,
        phone: inputPhone.value
    }

    await fetch('http://159.65.195.0:3000/v1/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objUser)
    }).then(res => {
        if (res) {
            inputUser.value = ""
            inputPhone.value = ""


            setTimeout(() => {
                modal.classList.remove('show')
            }, 2000)
        }

        statusModal(res)
    })
})

function statusModal(res) {
    if (res.status === 200) {
        modalStatus.innerHTML = '<span class="status--green">Барлығы сәтті аяқталды</span>'
    } else {
        modalStatus.innerHTML = '<span class="status--red">Аты-жөніңіз немесе телефон нөміріңіз қате</span>'
    }
}