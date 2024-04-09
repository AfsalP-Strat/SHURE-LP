// 
document.querySelector(".slp-input__num").addEventListener('keyup', function () {
    document.querySelector(".reg-int-form__hide").style.display = "block";
});

//menu

const arrOws = document.querySelectorAll(".mob-accordion");
const List = document.querySelectorAll(".slp-menu-list");

arrOws.forEach((item, index) => {

    item.addEventListener("click", () => {
        List[index].classList.toggle("list-show");
    });
    
});

