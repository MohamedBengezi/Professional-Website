$(function() {
    $(".contactBox").toggle();
    $("#Projects").toggle();
    $(".c").toggle();
    $(".words").toggle();
    $("#git").toggle();
    $("#linkedIn").toggle();
    $("#mail").toggle();
    $(".projectList").toggle();
    $("#About").toggle();
    $(".portrait").toggle();
    $(".icon-link").toggle();
    $("#locator").toggle();
    $(".links").toggle();
    $(".social-media-links2").toggle();



    $("#locator").fadeIn(2000); 
    $(".icon-link").fadeIn(2000); 
      $(".portrait").fadeIn(2000); 
      $("#About").fadeIn(2000);  
      $("#git").fadeIn(2000);  
      $("#linkedIn").fadeIn(2000);  
      $("#mail").fadeIn(2000, function () {
         $("#Projects").slideDown(1000, function () {
                    $(".c").slideDown(1000, function () {
                        $(".projectList").slideDown(1000, function () {
                            $(".social-media-links2").fadeIn(1000);
                        });
                    });
         });
  });  
  $("#Projects").click(function (event) {
      console.log(event);
      $(".projectList").slideToggle(1000);
      event.preventDefault();
  });

  $("#contact2").click(function(event) {
    console.log(event);
    $(".contactBox").slideToggle(1000);
  });

  $("#linkedIn").scroll(function () {
      $("#Projects").css('bottom', $(this).scrollTop());
  });

  $(".menu-icon").click(function (event) {
      console.log(event);
      $(".links").slideToggle(1000);
  });

    /*
$('#linkedIn').hover(function(){
    $(this).animate({'z-index':'1','font-size':'60px'},50);
      },
      function(){
      $(this).animate({'z-index':'0','font-size':'30px'},50);
    });

$('#git').hover(function(){
    $(this).animate({'z-index':'1','font-size':'60px'},50);
      },
      function(){
      $(this).animate({'z-index':'0','font-size':'30px'},50);
    });

$('#mail').hover(function(){
    $(this).animate({'z-index':'1','font-size':'60px'},50);
      },
      function(){
      $(this).animate({'z-index':'0','font-size':'30px'},50);
    });
/*
$('.c').hover(function(){
    $(this).animate({'z-index':'1','font-size':'35px'},50);
      },
      function(){
      $(this).animate({'z-index':'0','font-size':'20px'},50);
    });


$('.p').hover(function(){
    $(this).animate({'z-index':'1','font-size':'35px'},50);
      },
      function(){
      $(this).animate({'z-index':'0','font-size':'20px'},50);
    });
    */
$(".contactBox").submit(function (event) {
    var textarea = $("#message");
    if (textarea.val().trim() == "") {
        alert("Please complete the form!");
        event.preventDefault();
    } else {
        
    }
});
    /*
    $("#linkedIn").fadeOut(0).show(2000, function () {
        $("#git").show(2000, function () {
            $(".words").slideDown(1000, function () {
                $(".p").slideDown(1000, function () {
                    $(".c").slideDown(1000, function () {

                    });
                });
            });
        });
    });
*/
  // $("ul ul:first").prepend("<li>Newest sub item</li>");
  // $("ul ul:first").append("<li>Newest sub item</li>");
  // $("ul ul).append("<li>Newest sub item</li>");
  /*
  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);
  $(".div1").fadeOut(2000);
   $(".blue-box").fadeOut(2000);
  $(".red-box").fadeIn(2000);
  $(".green-box").fadeIn(2000);
  $(".div1").fadeIn(2000);
  $(".blue-box").fadeIn(2000);
  $(".div1").fadeTo(2000, 0.2);
  $(".red-box").fadeTo(2000, 0.4);
  $(".green-box").fadeTo(1000, 0.6);
  $(".blue-box").fadeTo(500, 0.8);

  $(".blue-box").fadeToggle();
  */
    /*
  $(".words").toggle();
  $(".linkedIn").fadeOut(0).show(2000);
  $(".git").fadeOut(0).delay(1500).show(2000);
  $(".words").delay(3500).slideDown(1000);
    */
    // $(".lightbox").delay(500).fadeIn(1000);

  
  

/*
  $(".git").animate({
    "margin-left" : "+=300px",
    "margin-top" : "+=300px"
  }, 1000, "linear");
*/
  
});