
/**
 * Each test in the array contains input data and an exected result.
 */
tests = [
    {
        input: [0],
        result: [0]
    },
    {
        input: [1,2,3],
        result: [1,2]
    }
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
    let pass = `<span class="fail">FAIL</span>`;
    if (JSON.stringify(solution(test.input)) === JSON.stringify(test.result)) {
        pass = `<span class="pass">PASS</span>`;
        passes++;
    }
    let result = `
        <div>
            <h3>Test ${index+1}</h2>
            <strong>Input:</strong> <pre>${JSON.stringify(test.input)}</pre><br>
            <strong>Output:</strong> <pre>${JSON.stringify(solution(test.input))}</pre><br>
            <strong>Expected:</strong> <pre>${JSON.stringify(test.result)}</pre><br>
            <strong>Result:</strong> ${pass}
        </div>`;
    resultsEl.innerHTML += result;
});

resultsEl.innerHTML += `
    <div class="total">
        <h2>Total:</h2> 
        Passed ${passes} out of ${tests.length} tests (${Math.round((passes/tests.length)*100)}%)
    </div>`;