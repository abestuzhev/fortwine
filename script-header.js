$(document).ready(function(){

  $(".n-header__cab")
   .mouseover(function() {
       $(this).find('img').attr('src', './local/templates/b2c/img/ico_in.png');
   })
   .mouseout(function() {
     $(this).find('img').attr('src', './local/templates/b2c/img/ico_in-dark.png');
   });


    $('.slider-detail').slick({
        autoplay: false,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    /*соглашение на обработку персональных данных*/
    function DisabledFormButton(form, check, btn_form){
        $("form input[type='checkbox']").on('change', function(){
            if($(check).prop('checked')){
                $(btn_form).removeAttr('disabled');
            }else {
                $(btn_form).attr('disabled', 'disabled');
            }
        });
    }

    DisabledFormButton('#registration-form','#registration__consent-data','.registration-form__btn');


    $('.js-phone-mask').mask('+7(000)000-00-00');
    $('.js-data-mask').mask('00.00.0000');

});
