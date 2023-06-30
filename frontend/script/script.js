window.addEventListener('scroll', function() {
    let navbar = $('#header-bg');
    
    if (window.scrollY > 0) {
      navbar.classList.add('sticky-nav');
    } else {
      navbar.classList.remove('sticky-nav');
    }
  });
  
$(".dm-switch").on("click", function(){
  if ($("body").hasClass("dm")){
      $("body").removeClass("dm");
      $(".dm-switch").text("terangin aj bg");
  }
  else{
    $("body").addClass("dm");
  }
})