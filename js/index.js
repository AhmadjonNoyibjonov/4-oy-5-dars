// Vazifa 1-qism
//1-masala
// let n = +prompt('Nechagacha sonlar chiqarilishi kerak bolgan son');
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// 2-masala
// let n = +prompt('Nechadan boshlab sonlar chiqarilishi kerak bolgan son');
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

// 3-masala
// let result = 0;
// let n = +prompt('Nechagacha chiqarilishi kerak bolgan son');
// for (i = 1; i <= n; i++) {
//         console.log(result + i);
// }

// 4-masala
// let result = 0;
// let n = +prompt('Nechagacha chiqarilishi kerak bolgan son');
// for (i = 1; i <= n; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//             console.log(result + i);
//         }
// }

// 5-masala
// let result = 0;
// let n = +prompt('Nechagacha chiqarilishi kerak bolgan son');
// for (i = 1; i <= n; i++) {
//         if (i % 2 == 1) {
//             console.log(i);
//             console.log(result + i);
//         }
// }

// 6-masala
// let A = +prompt('Boluvcilari chiqarilishi kerak bolgan son');
// for (let i = 1; i <=A; i++) {
//     if (A % i == 0) {
//         console.log(i);
//     }
// }

// 7-masala
// let A = +prompt('Boluvcilari chiqarilishi kerak bolgan son');
// let counter = 0;
// let summ = 0;
// for (let i = 1; i <=A; i++) {
//     if (A % i == 0) {
//         summ = summ + i;
//         counter = counter + 1;
//     }
// }

// console.log(counter);
// console.log(summ);

// 8-masala
// let n = +prompt('n soni kiritilsin');
// let counter = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         counter = counter + 1;
//     }
// }

// if (counter > 2) {
//     console.log(`${n} murakkab son`);
// } else {
//     console.log(`${n} tub son`);
// }


// Vazifa 2-qism
// for1 masala
// let k = +prompt('k soni kiritilsin');
// let n = +prompt('n soni kiritilsin');
// for (let i = 1; i <=n; i++) {
//     console.log(k);
// }

// for2 masala
// let a = +prompt('a soni kiritilsin');
// let b = +prompt('b soni kiritilsin');
// let counter = 0;
// for (let i = a; i <= b; i++) {
//     counter =  counter + 1;
// }
// console.log(i);
// console.log(counter);

// for3 masala
// let a = +prompt('a soni kiritilsin');
// let b = +prompt('b soni kiritilsin');
// let counter = 0;
// for (let i = b - 1; i < a + 1; i--) {
//     counter =  counter + 1;
// }
// console.log(i);
// console.log(counter);

// for4 masala
// let narx = +prompt('1 kg konfet narxi');
// for (let i = 1; i <= 10; i++) {
//     console.log(narx * i);
// }

// for5 masala
// let narx = +prompt('1 kg konfet narxi');
// for (let i = 0.1; i <= 1; i += 0.1) {
//     console.log(narx * i);
// }

// for6 masala
// let narx = +prompt('1 kg konfet narxi');
// for (let i = 1.2; i <= 2; i += 0.2) {
//     console.log(narx * i);
// }

// for7 masala
// let a = +prompt("a soni kiritilsin");
// let b = +prompt("b soni kiritilsin");
// let summ = 0;
// for (let i = a; i <= b; i++) {
//     summ = summ + i;
// }
// console.log(summ);

// for8 masala
// let a = +prompt("a soni kiritilsin");
// let b = +prompt("b soni kiritilsin");
// let p = 1;
// for (let i = a; i <= b; i++) {
//     p = p * i;
// }
// console.log(p);

// for9 masala
// let a = +prompt("a soni kiritilsin");
// let b = +prompt("b soni kiritilsin");
// let summ = 0;
// for (let i = a; i <= b; i++) {
//     summ = summ + i**2;
// }
// console.log(summ);

// for10 masala
// let n = +prompt("n soni kiritilsin");
// let S = 1;
// for (let i = 1; i <= n; i++) {
//     S = S + 1/i;
// }
// console.log(S);

// for11 masala
// let n = +prompt("n soni kiritilsin");
// let S = 0;
// for (let i = n; i <= 2*n; i++) {
//     S = S + i**2;
// }
// console.log(S);

// for12 masala
// let n = +prompt("n soni kiritilsin");
// let P = 1;
// for (let i = 1.1; i <= n; i += 0.1) {
//     P = P * i;
// }
// console.log(P);

// Qo'shimcha masala
// 1-masala
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// 2-masala
// for(let i = 2; i <= 50; i += 2) {
//     console.log(i);
// }

// let result = 0;
// let n = +prompt('sikl aylantrilishi kerak bolgan son');
// for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(result + i);
//     }
// }

// 3-masala
// let counter = 0;
// let a = +prompt('boshlanishi');
// let b = +prompt('tugashi');
// for(let i = a; i <= b; i++) {
//     if (i % 2 == 0 && i > 9 && i <=99) {
//         counter = counter + 1;
//     }
// }
// console.log(counter);

// 4-masala
// let A = +prompt("A soni kiritilsin");
// let B = +prompt("B soni kiritilsin");
// for (let i = A; i <= B; i -= B) {
//     if (i < B) {
//         console.log(i);
//     }
// }

// 5-masala
// let n = +prompt('n soni kiritilsin');
// for (let i = 1; i <= n; i++) {
//     if (i % 7 == 0 && i % 2 == 0 && i > 9 && i < 100) {
//         console.log(i);
//     }
// }

// 6-masala
// let n = +prompt('3 xonali son kiritilsin');
// for (let i = 100; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// 7-masala
// let n = +prompt('n soni kiritilsin');
// for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         console.log(i);
//     }
// }




