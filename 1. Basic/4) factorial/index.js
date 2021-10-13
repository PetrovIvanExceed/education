function factorial(n) {
  let result = 1;
  let i;
  for(i = 1; i <= n; i++){
    result *= i
  }
  return result
}

window.factorial = factorial;

export default factorial;
