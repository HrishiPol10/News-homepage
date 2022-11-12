$(document).ready(()=>{
    var r = document.querySelector(':root');
    const x = jQuery(document).height();
    r.style.setProperty("--windowHeight",x+"px");
    if(jQuery(window).width() <= 1024){
        jQuery("nav").detach().appendTo(".mob-nav");
        jQuery(".mob-nav").addClass("hidden");
    }else{
        jQuery(".mob-nav").removeClass("hidden");
    }

    jQuery(".mob-menu-icon img").click(()=>{
        jQuery(".mob-nav").removeClass("hidden");
    });
    jQuery(".mob-nav img").click(()=>{
        jQuery(".mob-nav").addClass("hidden");
    });

    jQuery(window).resize(function(){
        if(jQuery(window).width() <= 1024){
            jQuery("nav").detach().appendTo(".mob-nav");
            jQuery(".mob-nav").addClass("hidden");
        }else{
            jQuery(".mob-nav").removeClass("hidden");
            jQuery("nav").detach().appendTo("header");
        }
    });
})


