let x = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    let y = document.querySelector(".btn-close")
    let c = document.querySelector(".cbtn")
    x.onclick = function () {
        modal.style.display = "block"
    }
    cbtn.onclick = function () {
        modal.style.display = "none"
    }
    y.onclick = function () {
        modal.style.display = "none"
    }

    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
    }