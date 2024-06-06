const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hasContiguousSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

rl.question('Enter the elements of the array separated by spaces: ', (input) => {
    const arr = input.split(' ').map(Number);
    console.log('Entered Array:', arr);
    
    rl.question('Enter the target sum: ', (targetInput) => {
        const target = parseInt(targetInput);
        console.log('Target Sum:', target);
        
        const result = hasContiguousSubarrayWithSum(arr, target);
        console.log('Does a contiguous subarray exist with the given sum?', result);

        rl.close();
    });
});
