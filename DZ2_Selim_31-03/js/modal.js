const num1 = [1,2,3,4,3,4,5,6,7,77,88,123]
const [n1, n2, n3, n4, ...other] = num1
console.log(n1, n2, n3, n4 ,other)



const array1 = [1,2,3]
const array2 = [1,2,3]
const array3 = [...array1, ...array2]
console.log(array3)
