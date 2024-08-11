"use strict";

// matter_1;

let x = +prompt("Son kiritilsin"),
  y = +prompt("Son kiritilsin"),
  z = +prompt("Son kiritilsin");

if (x < y && x < z) {
  console.log(`Kichik son x=${x}`);
} else if (y < x && y < z) {
  console.log(`Kichik son y=${y}`);
} else if (z < y && z < x) {
  console.log(`Kichik son z=${z}`);
}

// matter_2;

let f = +prompt("Enter number"),
  v = +prompt("Enter number"),
  w = +prompt("Enter number");

if (w < v < f && f < v < w) {
  console.log(`Middle number d=${d}`);
} else if (v < f < w && w < f < v) {
  console.log(`Middle number f=${f}`);
} else if (v < w < f && f < w < v) {
  console.log(`Middle number w=${w}`);
}

// matter_3;

let g = +prompt(`Enter value`),
  e = +prompt(`Enter value`),
  r = +prompt(`Enter value`);

if (g < e && g < r) {
  console.log(`Small number g=${g}`);
} else if (e < g && e < r) {
  console.log(`Small number e=${e}`);
} else if (r < g && r < e) {
  console.log(`Small number r=${r}`);
}

if (g > e && g > r) {
  console.log(`Large number g=${g}`);
} else if (e > g && e > r) {
  console.log(`Large number e=${e}`);
} else if (r > g && r > e) {
  console.log(`Large number r=${r}`);
}

// matter_4;

let q = +prompt(`Enter number`),
  p = +prompt(`Enter number`),
  t = +prompt(`Enter number`);

if (q + p > (p + t && q + t)) {
  console.log(`Largest number q + p = ${q + p}`);
} else if (q + t > (q + p && p + t)) {
  console.log(`Largest number q + t = ${q + t}`);
} else {
  console.log(`Largest number p + t = ${p + t}`);
}

// matter_5;

let U = +prompt(`Enter number`),
  I = +prompt(`Enter number`),
  P = +prompt(`Enter number`);

if (A < B && B < C) {
  console.log(`Natija U = ${2 * U} , I = ${2 * I} , P = ${2 * P}`);
} else {
  console.log(`Natija U = ${-1 * U} , I = ${-1 * I} , P = ${-1 * P}`);
}

// matter_6;

let D = +prompt(`Enter number`),
  E = +prompt(`Enter number`),
  F = +prompt(`Enter number`);

if ((A < B && B < C) || (A > B && B > C)) {
  console.log(`Result is A = ${2 * A} , B = ${2 * B} , C = ${2 * C}`);
} else {
  console.log(`Result is A = ${-1 * A} , B = ${-1 * B} , C = ${-1 * C}`);
}

// matter_7;

let h = +prompt(`Enter number`),
  o = +prompt(`Enter number`),
  u = +prompt(`Enter number`);

if ((h === o && h < u) || (h === u && h < o) || (o === u && o < h)) {
  console.log(`Ordinal number is 1`);
} else {
  console.log(`Ordinal number is 3`);
}

// matter_8;

let a = 1,
  n = 1,
  c = 1,
  d = 2;

if (
  (a == n && a == c && a > d) ||
  (a == n && a == d && a > c) ||
  (a == c && a == d && a > n)
) {
  console.log(`Ordinal number is 1`);
} else {
  console.log(`Ordinal number is 4`);
}

// matter_9;

let A = 66,
  B = 23,
  C = 98,
  b,
  cx;

b = A - B;
c = A - C;

b < 0 ? (b *= -1) : b;
c < 0 ? (c *= -1) : c;

if (b > c) {
  console.log(`A eng yaqin Nuqta C va ular o'rtasidagi masofa ${c} `);
} else {
  console.log(`A eng yaqin Nuqta B va ular o'rtasidagi masofa ${b} `);
}

// matter_10;

let X = +prompt(`Enter number`),
  Y = +prompt(`Enter number`);

if (X === 0 && Y === 0) {
  console.log(`X= ${X}; Y= ${Y}; 0 ; 0 Result is 0 `);
} else if (X !== 0 && X === Y) {
  console.log(`X = ${X}; Y = ${Y} The result located on the OX axis is = 1)`);
} else if (X === 0 && Y !== 0) {
  console.log(`X = ${X}; Y = ${Y} The result located on the OY axis is = 2)`);
} else if (X !== 0 && Y !== 0) {
  console.log(
    `X = ${X}; Y = ${Y}; ${X} ; ${Y}  The result located on the XY axis is = 1)`
  );
}

// matter_11;

let k = +prompt(`Enter only number`),
  m = +prompt(`Enter only number`);

if ((k > 0, m > 0)) {
  console.log(`Coordinate quarter is 1`);
} else if ((k < 0, m > 0)) {
  console.log(`Coordinate quarter is 2`);
} else if ((k < 0, m < 0)) {
  console.log(`Coordinate quarter is 3`);
} else if ((k > 0, m < 0)) {
  console.log(`Coordinate quarter is 4`);
}

// matter_12;

let x1 = +prompt(`Enter only number`),
  y1 = +prompt(`Enter only number`),
  x2,
  y2 = +prompt(`Enter only number`),
  x3 = +prompt(`Enter only number`),
  y3,
  x4,
  y4;

x2 = x1;
y3 = y2;

x4 = x2 = x3 - x1;
y4 = y1 = y1 - y3;

console.log(`${x4}; ${y4}`);
