// const ages = [11, 14, 16, 13, 17];
// const ages2 = [15, 16, 12];
// const ages3 = [25, 36, 22, 29];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// //spread operator
// const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);



const business = 650;
const minister = 450;
const sochib = 350;
// const maximum = Math.max(business, minister, sochib);
const takaPoisa = [650, 550, 600];
const maximum = Math.max(...takaPoisa);
console.log(maximum);