$.fn.extend({
   animateCss: function (animationName, callback) {
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
     this.addClass('animated ' + animationName).one(animationEnd, function () {
       $(this).removeClass('animated ' + animationName);
       if (callback) {
         callback();
       }
     });
     return this;
   }
 });

 var happened = false;

 var elementPosition = $('#bottomLeft').offset().top;
 $(window).on('scroll', function () {
   var y_scroll_pos = window.pageYOffset;
   // console.log(y_scroll_pos);
   if (y_scroll_pos > (elementPosition - 650) && happened == false) {
      happened = true;
           $('#bottomLeft').animateCss('slideInLeft')
           $('#bottomRight').animateCss('slideInRight')
      console.log(elementPosition);
//   alert("hello");
   //   $('#bottomLeft').animateCss('slideInLeft')
   } else {
    
   }
 });