const small_wrapper = document.getElementById('small_wrapper');
let move = 0;
let result = '';


const modal_wrapper = document.getElementById('modal_wrapper');
const content = document.getElementById('content');
const bord = document.getElementById('bord');
const btn = document.getElementById('btn');


small_wrapper.addEventListener('click', e => {
    if(e.target.className = 'box_cell') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
        check();
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box_cell');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (i = 0; i < arr.length; i++) {
        if(
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'Noughts';
            prepareResult(result);
        }else if(
            boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'
        ) {
            result = 'Crosses';
            prepareResult(result);
        } else if (move == 10) {
            result = 'Friendship';
            prepareResult(result);
        }
    }
}

const prepareResult = victory => {
    content.innerHTML = `Won ${victory} !`;
    modal_wrapper.style.display = 'block';
}

const closeModal = () => {
    modal_wrapper.style.display = 'none';
    location.reload();   
}

bord.addEventListener('click', closeModal);
btn.addEventListener('click', closeModal);

