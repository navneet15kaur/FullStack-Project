
function deleteItems() {
    sessionStorage.clear();
    window.location.href = "http://127.0.0.1:5500/index.html"
  }
       
$( document ).ready(function() {

    const sessemail =  sessionStorage.getItem("SessionName");
    //alert(sessemail);
    if(sessemail != null)
    {
        $("#sessionout").hide();
    }else{
        $("#showmyaccount").hide();
    }   
   
    




    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }



})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});