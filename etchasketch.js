//create the boxes
function createboxes () {
    let container = document.getElementById('etchasketch-container');
    let boxes = '<div class="flex-item"></div>'.repeat(16*16);

    container.innerHTML = boxes;

    //make them change colour when hovered
    let boxDivs = document.querySelectorAll('.flex-item');

    for (let o = 0; o < boxDivs.length; o++) {
        boxDivs[o].addEventListener('mouseover', function(event){
            this.style.background = 'pink';
        });
        
    }
}

//run on page load
createboxes();



