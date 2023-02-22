let result_test = document.querySelector('.screen .result-test');
let result = document.querySelector('.screen .result');
let n_0 = document.querySelector('.n-0');
let n_1 = document.querySelector('.n-1');
let n_2 = document.querySelector('.n-2');
let n_3 = document.querySelector('.n-3');
let n_4 = document.querySelector('.n-4');
let n_5 = document.querySelector('.n-5');
let n_6 = document.querySelector('.n-6');
let n_7 = document.querySelector('.n-7');
let n_8 = document.querySelector('.n-8');
let n_9 = document.querySelector('.n-9');
let multiply = document.querySelector('.multiply');
let division = document.querySelector('.division');
let add = document.querySelector('.add');
let sub = document.querySelector('.sub');
let dot = document.querySelector('.dot');
let del = document.querySelector('.delete');
let reset = document.querySelector('.reset');
let equal = document.querySelector('.equal');
// make reset button 
reset.addEventListener('click', clearScreen);
// make delete button
del.addEventListener('click', delNum);

// getting result by click on equal button
equal.addEventListener('click', getAnswer);


function clearScreen() {
  result_test.innerHTML = '';
  value = '';
  result.innerHTML = '';
};

function delNum() {
  if (result_test.innerHTML != '') {
    if (typeof value == 'string') {
      value = value.split('');
    }
    value.pop();
    result_test.innerHTML = value.join('');
  }
  if (result.innerHTML != '') {
    if (typeof value == 'string') {
      value = value.split('');
    }
    value.pop();
    result.innerHTML = value.join('');
  }
}



let numbers = [n_0, n_1, n_2, n_3, n_4, n_5, n_6, n_7, n_8, n_9];
let value = '';
numbers.forEach((a) => {
  a.addEventListener('click', function () {
    if (result.innerHTML.length > 0) {
      result.innerHTML = '';
    }
    if (Array.isArray(value)) {
      value = value.join('');
    }
    value += a.innerHTML;
    result_test.innerHTML = value;
    reset.addEventListener('click', clearScreen);
    del.addEventListener('click', delNum);
  });
});
let actions = [multiply, sub, add, division];
let action = []
actions.forEach((act) => {
  act.addEventListener('click', function () {
    if (value.length > 0) {
      if (act.classList.contains('multiply')) {
        value = value.split('');
        value.push(' ', '*', ' ');
        result_test.innerHTML = value.join('');
      }
      value = value.split('');
      value.push(' ', act.innerHTML, ' ');
      result_test.innerHTML = value.join('')
      // value = eval(value);
      reset.addEventListener('click', clearScreen);
      del.addEventListener('click', delNum);

    }
  });
});
function getAnswer() {
  result_test.innerHTML = '';
  result.innerHTML = eval(value);
  value = '';
}