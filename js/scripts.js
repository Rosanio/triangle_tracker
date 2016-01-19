function triangle(side1, side2, side3) {
  if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
    return 'NaT';
  } else if ((side1 + side2 + side3)/3 === side1) {
    return 'equilateral';
  } else if ((side1 === side2 && side2 !== side3) ||
(side2 === side3 && side1 !== side3) || (side1 === side3 && side2 !== side3)){
    return 'isosceles';
  } else {
    return 'scalene';
  }
}
