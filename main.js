/* eslint no-magic-numbers: 0 */

/**
 * Each test in the array contains input data and an expected result.
 */
const tests = [
  {
    input: [ 0 ],
    result: [ 0 ],
  },
  {
    input: [ 1, 2, 3 ],
    result: [ 1, 2 ],
  },
  {
    input: 1,
    result: 1,
  },
  {
    input: 'hello',
    result: 'Hello',
  },
];

/**
 * The function which produces the solution for each test case.
 */
function solution(input) {
  return input;
}


/**
 * All code below this point is to produce the rendered test results.
 */
const resultsEl = document.querySelector('.results');
let passes = 0;

tests.forEach((test, index) => {
  let bgStyle = 'bg-danger';
  if (JSON.stringify(solution(test.input)) === JSON.stringify(test.result)) {
    bgStyle = 'bg-success';
    passes++;
  }
  const result = `
    <div class="result ${ bgStyle }">
      <h4>Test ${ index + 1 }</h4>
      <strong>Input:</strong> <code>${ JSON.stringify(test.input) }</code><br>
      <strong>Output:</strong> <code>${ JSON.stringify(solution(test.input)) }</code><br>
      <strong>Expected:</strong> <code>${ JSON.stringify(test.result) }</code>
    </div>`;
  resultsEl.innerHTML += result;
});

resultsEl.innerHTML += `
  <div class="total">
    <h2>Total:</h2>
    Passed ${ passes } out of ${ tests.length } tests (${ Math.round((passes / tests.length) * 100) }%)
  </div>`;
