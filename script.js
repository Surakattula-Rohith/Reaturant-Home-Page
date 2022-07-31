let nav = document.querySelector(".navigation-start-fixed") ;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add(".scrollTopOn") ;
    }else{
        nav.classList.remove(".scrollTopOn") ;
    }
}