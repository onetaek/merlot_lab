/* 2개의 클릭이벤트 */
/* 1.mobile-open 클릭시 mobile-menu보여지게하기 */
/* 2.mobile-menu의 li를 클릭시 .snb가 펼쳐지고 나머진 접히기 */
let mobile_menu = document.querySelector('.mobile-menu');
let headerWrap =document.querySelector('#headerWrap');
let mobile_logo = document.querySelector('#headerWrap #header #logo a');
let mobile_open_btn = document.querySelector('#headerWrap #header .mobile-open span');
let mobile_gnb = document.querySelectorAll('.mobile-menu > #mobile-gnb > li >a');
let mobile_snb = document.querySelectorAll('.mobile-menu > #mobile-gnb > li >.snb');
let moblie_open = document.querySelector('.mobile-open');

/* mobile-open버튼을 클릭시 이벤트함수 */
let toggle_mobile_menu = () => {
    let mobile_open_btn_state = mobile_open_btn.classList.contains('mobile_open_click')
    console.log('상태',mobile_open_btn_state);
    if(mobile_open_btn_state == false){
        document.documentElement.style.setProperty('--toggle-background','#583cf2');
        document.documentElement.style.setProperty('--toggle-beforetop','50%');
        document.documentElement.style.setProperty('--toggle-aftertop','50%');
        // console.log('적용중간')
        document.documentElement.style.setProperty('--toggle-beforeDegree','45deg');
        document.documentElement.style.setProperty('--toggle-afterDegree','-45deg');
    }else{
        document.documentElement.style.setProperty('--toggle-background','#fff');
        document.documentElement.style.setProperty('--toggle-beforetop','-10px');
        document.documentElement.style.setProperty('--toggle-aftertop','10px');
        document.documentElement.style.setProperty('--toggle-beforeDegree','0deg');
        document.documentElement.style.setProperty('--toggle-afterDegree','0deg');
    }
    mobile_menu.classList.toggle('mobile_open_click');
    headerWrap.classList.toggle('mobile_open_click');
    mobile_logo.classList.toggle('mobile_open_click');
    mobile_open_btn.classList.toggle('mobile_open_click');

}

/* mobile-munu의 메뉴들을 클릭시 이벤트함수 */
let toggle_snb = (i) =>{
    let state = mobile_snb[i].classList.contains('mobile_gnb_click');
    for(let j = 0 ; j < mobile_snb.length; j++){
        mobile_snb[j].classList.remove('mobile_gnb_click');
    }
    if(state == false){
        mobile_snb[i].classList.add('mobile_gnb_click');
    }  
}


moblie_open.addEventListener('click', () => {
    toggle_mobile_menu();
})

for( let i = 0 ; i < mobile_gnb.length; i++){
    mobile_gnb[i].addEventListener('click',()=>{
        toggle_snb(i);
    })
}
/*섹션3 보도자료 공지사항 */
$(function(){
    $("#contentWrap ul").not(":first").hide();
    $("#contentWrap h3").on('click', function() {
      $("#contentWrap section ul").hide();  
      $(this).next().show();
    })
  })