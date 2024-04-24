//ham de quy la ham goi lai chinh no
//thoat ra khoi de quy

//vd: fibonaci
// 1 1 2 3 5 8 13 ...

//fib(2) = fib(1) + fib(0)
//fib(3) = fib(2) + fib(1)
//fib(n) = fib(n-1) + fib(n-2)
// n = 1 ?
//fib(1) = fib(0) + fib(-1) -> sai

//n < 2: fib(n) = 1
//n >= 2: fib(n) = fib(n-1) + fib(n-2)

//n = 4
//fib(4) = fib(3) + fib(2)
//       = fib(2) + fib(1) + fib(1) + fib(0)
//       = fib(1) + fib(0) + 1 + 1 + 1
//       = 1 + 1 + 1 + 1 + 1
//       = 5

function fib(n) {
  if (n < 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}
console.log(fib(4))


//n!
function factorial(n) {
  if (n < 2) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(4))