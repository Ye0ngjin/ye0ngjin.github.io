$('.outer_box').height($('.inner_box').height()+20);

$('.noborder-col-0');

// $(document).ready(function () {
//   // 각 noborder-col-번호 클래스를 가진 요소에 대해 처리
//   $('[class*="noborder-col-"]').each(function () {
//     // 클래스 이름에서 번호를 추출
//     var number = $(this).attr('class').match(/\d+/)[0];

//     console.log(number);

//     // 해당 번호의 td, tr, thead의 border color를 투명하게 설정
//     $(this).children('td, tr, thead').css('border-color', 'transparent');
//   });
// });

$(document).ready(function () {
  // noborder-col-번호 클래스를 가진 요소에 대해 처리
  $('[class*="noborder-col-"]').each(function () {
    // 클래스 이름에서 noborder-col-를 찾아서 해당 번호의 td, tr, thead의 border color를 투명하게 설정
    var classes = $(this).attr('class').split(' ');
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].startsWith('noborder-col-')) {
        var number = classes[i].replace('noborder-col-', '');
        console.log(number);
        $(this).children('td, tr, thead').css('border-color', 'transparent');
        break; // 하나만 처리하고 나면 루프 종료
      }
    }
  });
});

$(document).ready(function () {
  // border-col-번호 클래스를 가진 요소에 대해 처리
  $('[class*="border-col-"]').each(function () {
    // 클래스 이름에서 border-col-를 찾아서 해당 번호의 td, tr, thead의 border color를 설정
    var classes = $(this).attr('class').split(' ');
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].startsWith('border-col-')) {
        var number = classes[i].replace('border-col-', '');
        console.log(number);
        $(this).children('td, tr, thead').css('border-color', 'transparent');
        break; // 하나만 처리하고 나면 루프 종료
      }
    }
  });
});

$(document).ready(function () {
  // noborder-row-번호 클래스를 가진 요소에 대해 처리
  $('[class*="noborder-row-"]').each(function () {
    // 클래스 이름에서 noborder-row-를 찾아서 해당 번호의 td, tr, thead의 border color를 투명하게 설정
    var classes = $(this).attr('class').split(' ');
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].startsWith('noborder-row-')) {
        var number = classes[i].replace('noborder-row-', '');
        console.log(number);
        $(this).children('td, tr, thead').css('border-color', 'transparent');
        break; // 하나만 처리하고 나면 루프 종료
      }
    }
  });
});

$(document).ready(function () {
  // border-row-번호 클래스를 가진 요소에 대해 처리
  $('[class*="border-row-"]').each(function () {
    // 클래스 이름에서 border-row-를 찾아서 해당 번호의 td, tr, thead의 border color를 설정
    var classes = $(this).attr('class').split(' ');
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].startsWith('border-row-')) {
        var number = classes[i].replace('border-row-', '');
        console.log(number);
        $(this).children('td, tr, thead').css('border-color', 'transparent');
        break; // 하나만 처리하고 나면 루프 종료
      }
    }
  });
});
{
  // border: solid var(--label-color) 1px;
  
  // border-bottom: solid 2px var(--heading-color);

};