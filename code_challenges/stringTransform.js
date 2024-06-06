function StringTransformation(input) {
    const length = input.length;
    let result = '';

    if (length % 3 === 0) {
        result = input.split('').reverse().join('');
    }

    if (length % 5 === 0) {
        result = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (length % 15 === 0) {
        result = input.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (result === '') {
        result = input;
    }

    return result;
}

//Test
console.log(StringTransformation("Hamburger"));
console.log(StringTransformation("Pizza"));
console.log(StringTransformation("Chocolate Chip Cookie"));
