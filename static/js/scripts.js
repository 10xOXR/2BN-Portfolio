$(document).ready(() => {

    //-------------------- SECTION SCROLL EFFECT --------------------//

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 150
            }, 100);
        }
    });

    //-------------------- MATERIALIZE ITEMS --------------------//

    $(".sidenav").sidenav({
        edge: "right"
    });

    $("textarea#textarea1").characterCounter();

    //-------------------- NAVBAR --------------------//

    $(window).on("scroll resize load", () => {
        const top = $("#hero-landing").offset().top - 200;
        const about = $("#about").offset().top - 200;
        const projects = $("#projects").offset().top - 200;
        const skills = $("#skills").offset().top - 200;
        const contact = $("#contact").offset().top - 500;

        if ($(window).scrollTop() >= top && $(window).scrollTop() <= about) {
            $("#nav-home").addClass("active-section");
        } else {
            $("#nav-home").removeClass("active-section");
        }
        if ($(window).scrollTop() >= about && $(window).scrollTop() <= projects) {
            $("#nav-about").addClass("active-section");
        } else {
            $("#nav-about").removeClass("active-section");
        }
        if ($(window).scrollTop() >= projects && $(window).scrollTop() <= skills) {
            $("#nav-projects").addClass("active-section");
        } else {
            $("#nav-projects").removeClass("active-section");
        }
        if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
            $("#nav-skills").addClass("active-section");
        } else {
            $("#nav-skills").removeClass("active-section");
        }
        if ($(window).scrollTop() >= contact) {
            $("#nav-contact").addClass("active-section");
        } else {
            $("#nav-contact").removeClass("active-section");
        }
    });

    //-------------------- HERO SECTION --------------------//

    consoleText(["Hello World.", "My name is Chris.", "I'm a Full Stack Developer.", "Let's make something awesome!"], "text");

    function consoleText(words, id) {
        let visible = true;
        const con = document.getElementById("console");
        let letterCount = 1;
        let x = 1;
        let waiting = false;
        const target = document.getElementById(id);
        window.setInterval(function () {
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);
                window.setTimeout(function () {
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 3000);
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount);
                letterCount += x;
            }
        }, 60);
        window.setInterval(function () {
            if (visible === true) {
                con.className = "console-underscore hidden"
                visible = false;
            } else {
                con.className = "console-underscore"
                visible = true;
            }
        }, 400);
    }
});