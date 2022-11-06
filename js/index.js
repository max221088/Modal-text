let activeMenu = " ";
let attribute = " ";
let $openModal = " ";

document.querySelectorAll('.modal-btn').forEach( function (li) {
    li.addEventListener('click', function() {
        attribute = this.getAttribute ('data-modal');
        $openModal = document.querySelector('#'+ attribute);
        $openModal.classList.toggle('active')
        });
    });
document.querySelectorAll('.owerlay').forEach( function (li) {
    li.addEventListener('click', function() {
        $openModal.classList.remove('active')
});
});
