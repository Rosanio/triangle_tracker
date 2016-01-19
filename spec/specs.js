describe('triangle', function() {
  it("is true for a triangle which has 3 equal sides", function() {
    expect(triangle(3, 3, 3)).to.equal('equilateral');
  });

  it("is true for a triangle which has 2 equal sides", function() {
    expect(triangle(3, 3, 2)).to.equal('isosceles');
  });

  it("is true for a triangle which has no equal sides", function() {
    expect(triangle(4, 3, 2)).to.equal('scalene');
  });

  it("is true for a triangle which the sum of the lengths of any two sides is less than or equal to the length of the third side", function() {
    expect(triangle(3, 2, 1)).to.equal('NaT');
  });
});
