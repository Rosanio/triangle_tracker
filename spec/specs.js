describe('triangle', function() {
  it("is true for a triangle which has 3 equal sides", function() {
    expect(triangle(3, 3, 3)).to.equal('equilateral');
  });

  it("is true for a triangle which has 2 equal sides", function() {
    expect(triangle(3, 3, 2)).to.equal('isosceles');
  });
});
