toggle_btn_container = document.getElementById('toggle_list-item_btn')
toggle_btn = document.querySelector(".toggle-btn");
inner_circle = document.querySelector(".inner-circle");
toggle_icon = document.querySelector(".toggle-icon");
// toggle_btn-container = document.querySelector('.')

toggle_btn_container.addEventListener('click', function() {
    toggle_btn.classList.toggle("active")
    inner_circle.classList.toggle('active')
    toggle_icon.classList.toggle('bx-moon')
    toggle_icon.classList.toggle('bxs-sun')
})


