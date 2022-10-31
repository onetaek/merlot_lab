// const Section3 = document.getElementById("section3");
// const ContentWrap = Section3.querySelector(".contentWrap");
// const Sec3_content = ContentWrap.querySelectorAll("section");

$("#section3 .contentWrap h3").on("click", function(){
   ($(this).next());
    $("#section3 .contentWrap ul").css({display: "none"});
    $(this).next().css({ display: "block"});
    $("#section3 .contentWrap h3").removeClass("pinkBorder");
    $(this).addClass("pinkBorder");
})