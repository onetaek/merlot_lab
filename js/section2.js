// section2의 Title 상단 좌우 버튼
$('button.left').on('click', function(){
    $(".section2Bottom:not(:animated)").animate({ scrollLeft:'+=480%' })
})
$('button.right').on('click', function(){
    $(".section2Bottom").animate({ scrollLeft:'-=480%' })
})
// section2의 Bottom 하단 슬라이더 원형 버튼

$('#section2WrapBtn button').on('click', function(){
    console.log('클릭!')
    $('#section2WrapBtn button').removeClass('on');
    $(this).addClass('on');
    // $(".section2Bottom").animate({ marginLeft: "+=260%" })
})