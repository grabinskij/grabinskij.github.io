$(function(){

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    fade: true,
    pauseOnFocus: false, 
    pauseOnHover: false,
    cssEase: 'linear',
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/arrows-left.png" alt=""></img>',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/arrows-right.png" alt=""></img>'
});

$(function frmotpr(){
    var field = new Array("name_f", "contact_f", "mssg_f", "tel_f");
    $("#file_form").submit(function() {
        var error=0;
        $("#file_form").find(":input").each(function() {
            for(var i=0;i<field.length;i++){
                if($(this).attr("name")==field[i]){
                    if(!$(this).val()){
                        $(this).addClass('notvalid');
                        error=1;    
                    }
                    else{
                        $(this).removeClass('notvalid');
                    }
                }                       
            }               
       })
        if(error==0){
        return true;
        }else{ var err_text = "";
        if(error==1)  err_text="Поле обязательно для заполнения";
        $("#messenger").html(err_text); 
        $("#messenger").fadeIn("slow"); 
        return false;
        }
    })
});



});



// var acc = document.getElementsByClassName("dropbtn");
// var i;

//     for(i = 0; i < acc.length; i++){
//     acc[i].onclick = function(){
//         this.classList.toggle("active");

//         this.nextElementSibling.classList.toggle("show");
    
//     }

// }

$(function(){

    $('.dropbtn').click(function() {
        $(this).toggleClass('active');
        $(this).nextUntil('.dropbtn').toggle('slow');
    });    
});











