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

 var happened1 = false;
 var elementPosition1 = $('#quote-div').offset().top;
 $(window).on('scroll', function () {
   var y_scroll_pos = window.pageYOffset;
   // console.log(y_scroll_pos);
   if (y_scroll_pos > (elementPosition1 - 650) && happened1 == false) {
      happened1 = true;
           $('#topLeft').animateCss('slideInLeft')
           $('#topRight').animateCss('slideInRight')
      console.log(elementPosition);
//   alert("hello");
   //   $('#bottomLeft').animateCss('slideInLeft')
   } else {
    
   }
 });













 var happened3 = false;
 var elementPosition = $('#bottomLeft').offset().top;
 $(window).on('scroll', function () {
   var y_scroll_pos = window.pageYOffset;
   // console.log(y_scroll_pos);
   if (y_scroll_pos > (elementPosition - 650) && happened3 == false) {
      happened3 = true;
           $('#bottomLeft').animateCss('slideInLeft')
           $('#bottomRight').animateCss('slideInRight')
      console.log(elementPosition);
//   alert("hello");
   //   $('#bottomLeft').animateCss('slideInLeft')
   } else {
    
   }
 });


  
 $("#learn-more-btn").click(function () {
   scrollToLearn()
 })
   
 $("#leather-option").click(function () {
   scrollToLearn()
 })
 function scrollToLearn() {
   $('html,body').animate({
     scrollTop: $("#learn-more-div").offset().top -150
   },
     'slow');
 }






//scroll on click
 $("#get-quote-nav").click(function () {
   scrollToQuote()
 });

 $("#get-quote-btn").click(function () {
   scrollToQuote()
 })

 function scrollToQuote() {
   $('html,body').animate({
     scrollTop: $("#quote-div").offset().top -150
   },
     'slow');
 }







 $("#location-btn").click(function () {
   scrollToLocation()
 })

 $("#nav-contact-btn").click(function () {
   scrollToLocation()
 })

 function scrollToLocation() {
   $('html,body').animate({
     scrollTop: $("#location-div").offset().top -150
   },
     'slow');
 }

 function scrollToAboutUs() {
   $('html,body').animate({
     scrollTop: $("#about-div").offset().top -150
   },
     'slow');
 }

 $("#about-us-btn").click(function () {
   scrollToAboutUs()
 })
 