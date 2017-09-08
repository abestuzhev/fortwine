$(document).ready(function(){

  $(".n-header__cab")
   .mouseover(function() {
       $(this).find('img').attr('src', './local/templates/b2c/img/ico_in.png');
   })
   .mouseout(function() {
     $(this).find('img').attr('src', './local/templates/b2c/img/ico_in-dark.png');
   });
});
