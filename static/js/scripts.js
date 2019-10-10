$(document).ready(function() {

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 150
            }, 100);
        }
    });

    $(".sidenav").sidenav({edge: "right"});

});
