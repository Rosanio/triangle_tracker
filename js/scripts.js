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

$(function() {
  $('form#sides').submit(function(event) {
    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());
    var trian = triangle(side1, side2, side3);

    $('#result').show();
    $('#triangle').text(trian);
    event.preventDefault();
  });
});
