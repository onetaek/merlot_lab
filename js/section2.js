$('button.left').on('click', function(){
    $(".section2Bottom:not(:animated)").animate({ scrollLeft:'+=480%' })
})
$('button.right').on('click', function(){
    $(".section2Bottom").animate({ scrollLeft:'-=480%' })
})