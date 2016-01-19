function triangle(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0){
      return 'no negative numbers';
    }
    else if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
     return 'numbers only';
   } else if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
    return 'NaT';
  } else if ((side1 + side2 + side3)/3 === side1) {
    return 'equilateral triangle';
  } else if ((side1 === side2 && side2 !== side3) ||
(side2 === side3 && side1 !== side3) || (side1 === side3 && side2 !== side3)){
    return 'isosceles triangle';
  } else {
    return 'scalene triangle';
  }
}

$(function() {
  $('form#sides').submit(function(event) {
    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());
    var trian = triangle(side1, side2, side3);

     if (trian === "no negative numbers") {
       $('#threeNumbers').hide();
       $('#notThreeNumbers').hide();
       $('#negativeNumber').show();
     }
     else if (trian === "numbers only") {
      $('#negativeNumber').hide();
      $('#threeNumbers').hide();
      $('#notThreeNumbers').show();
    } else {
      $('#negativeNumber').hide();
      $('#notThreeNumbers').hide();
      $('#threeNumbers').show();
      $('#triangle').text(trian);
    }

    event.preventDefault();
  });
});
