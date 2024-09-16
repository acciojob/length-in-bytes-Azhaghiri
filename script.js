const byteSize = (str) => {
   return new TextEncoder().encode(str).length;
};

// Example usage
const input = 'hello world';
const output = byteSize(input);
console.log(output); 