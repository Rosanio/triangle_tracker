function triangle(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else {
    return 'isosceles';
  }

}
