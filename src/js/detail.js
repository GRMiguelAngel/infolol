export function show_detail() {
    let fronts = document.querySelectorAll(".front");
    
    fronts.forEach(front => {
        front.onclick = () => {
            let detail = front.nextElementSibling;
            if (detail.style.display === 'none' ||  detail.style.display === '') {

                detail.style.display = 'block';
                detail.style.width = '80%';
                detail.style.height = '80%';
            } else {
                detail.style.display = 'none';
            }
        };
    });
}

export function close_detail() {
    let details = document.querySelectorAll(".detail");
    details.forEach(detail => {
        detail.style.display = 'none';
    });
}

document.addEventListener('keydown', function(event){
    if (event.key === 'Escape' || event.key === 'Esc') {
        close_detail();
    }
})