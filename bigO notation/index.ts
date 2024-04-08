//độ phức tạp thuật toán
//C: contanst

//contanst time -> số lượng của nó là cố định(1,2)
let a = 1
let b = 2

//contanst time -> số lượng của nó là cố định(100)

let i = 0
while (i < 100) {
  i += 1
}

//linear time -> O(N)
// -> O(n) -- chạy n lần
while (i < n) {
  i += 1
}
//F(n) = O(n)
while (i < n) {
  i = i + 5
}
//chay nhanh gap 5 lan F(n) = n/5 -> O(n)

//O(n^2)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j)
  }
}
//f(n) = n * n = n^2, O(f(n)) = O(n^2)
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    console.log(i, j)
  }
}
//f(n) = n * n+1 = n*(n + (n-1) + (n-2) + ... + 3 + 2 + 1), O(f(n)) = O(n^2)
//     = n*(n + 1)/2 = n*(n + 1)/2
//     = (n^2 + n) / 2
//     = n^2/2 + n/2 -> luôn luôn lấy cái giá trị lớn nhất để tính big O
// -> f(n) = n^2/2 -> O(n^2)

// mô phỏng indexof
for (let index = 0; index < arr.length; index++) {
  if (arr[index] === value) {
    return index
  }
  return -1
}
//xem if là c
// f(n) = c*n = O(f(n)) = O(n)

//bai toan chia doi -> log
// example: van la bai toan indexof

function find(arr, value) {
  let low = 0,
    high = value.length - 1
  while (low <= high) {
    let mid = (low + high) / 2
    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] > value) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}
//phân tích
//vd: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//mỗi lần vào while sẽ chia đôi 1 lần

//mở rộng

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 2 * n; j++) {}
  for (let k = 0; k < 3 * n; k++) {}
}
//f(n) = n * (2*n + 3*n)
//     = n * 5*n
//     = 5 * n^2
//O(f(n)) = O(5* n^2) = O(n^2)

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 40; j++) {}
  for (let k = 0; k < n * n; k = k + 2) {}
}
//f(n) = n * (40 + n^2/2)
//     = 40n + (n^3)/2
//     = n^3
//O(f(n)) = O(n^3)

///bài tập

function count_1(n) {
  let sum = 0

  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      sum++
    }
  }
  return sum
}

//f(n) = c + n * ((n+1)/2)
//     = c + n^2/2 + n/2
//       = n^2
// O(f(n)) = O(n^2)

function count_2(n, x) {
  let sum = 0

  for (let i = 0; i <= n; i++) {
    let p = 1
    for (let j = 1; j <= n; j++) {
      p = (p * x) / j
    }
    sum = sum + p
  }
  return sum
}

//f(n) = c + n * (n-1)/2
// f(n) = n^2
//O(f(n)) = O(n^2)

function count_3(n, x) {
  let sum = 1,
    p = 1

  for (let i = 1; i <= n; i++) {
    p = (p * x) / i
    sum = sum + p
  }
}

//f(n) = c + (n-1)/2
//     = n/2 - 1/2
//     = n/2
//O(f(n)) = O(n/2) = O(n)


function count_4() {
  for (let i = i; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= g; k++) {
        
        
      }
      for (let h = 0; h <= l; h++) {
        
        
      }
      
    }
    
  }
}

//f(n) = n * m * (g + l)
//O(f(n)) = O(n * m * (g + l))

function count_5() {
  for (let i = i; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {
        
        
      }
      for (let h = 0; h <= n; h++) {
        
        
      }
      
    }
    
  }
}
//f(n) = n * n * (n +n)
//     = n^2 * 2n
//     = 2* n^3
//O(f(n)) = O(n^3)


function count_6() {
  for (let i = i; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= g; k++) {
      }
    }
  }
  for (let i = i; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
    }
  }
}
//f(n) = n * (m * g) + n * m
//     = nmg + nm
//O(f(n)) = O(nmg + nm)

function count_7() {
  for (let i = i; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {
      }
    }
  }
  for (let i = i; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
    }
  }
}

//f(n) = n * n * n + n * n
//     = n^3 + n^2
//O(f(n)) = O(n^3)