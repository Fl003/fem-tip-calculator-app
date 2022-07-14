let resetBtn = document.querySelector('#reset');
let billInput = document.querySelector('#bill');
let customInput = document.querySelector('#custom');
let peopleInput = document.querySelector('#people');

let tip = document.querySelector('#tip');
let total = document.querySelector('#total');

resetBtn.addEventListener('click', function() {

});

billInput.addEventListener('change', function() {
    calc();
});

customInput.addEventListener('change', function() {
    calc();
});

peopleInput.addEventListener('change', function() {
    calc();
});

function calc() {
    let bill = billInput.value;
    let people = peopleInput.value;
    let tip = parseInt(bill)/100*parseInt(activePerc)/parseInt(people);
    let total = parseInt(bill)/parseInt(people) + tip;
    document.querySelector('#tip').innerHTML = tip;
    document.querySelector('#total').innerHTML = total;
}

function switchActiveTipPerc(percent) {
    if (activePerc == percent) {
        activePerc = "";
        document.querySelector('.percentage button[data-percent="' + percent + '"]').classList.remove("active");
    } else if (activePerc == "") {
        activePerc = percent;
        document.querySelector('.percentage button[data-percent="' + percent + '"]').classList.add("active");
    } else {
        document.querySelector('.percentage .active').classList.remove("active");
        activePerc = percent;
        document.querySelector('.percentage button[data-percent="' + percent + '"]').classList.add("active");
    }
}

let activePerc = "";
let percentageBtns = document.querySelectorAll('.percentage button');

percentageBtns.forEach(elem => {
    elem.addEventListener('click', function() {
        switchActiveTipPerc(elem.dataset.percent);
        calc();
    });
});