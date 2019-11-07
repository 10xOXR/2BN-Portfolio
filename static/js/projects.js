$(document).ready(() => {

    let projects = [
        {
            name: "Intro. to the Discworld",
            img: "static/img/ms1.png",
            alt: "CI Milestone 1",
            repo: "https://github.com/10xOXR/milestone-project-1",
            site: "https://10xoxr.github.io/milestone-project-1",
            tech: ["HTML", "CSS", "Javascript"]
        },
        {
            name: "Exoplanets and How to Find Them",
            img: "static/img/ms2.png",
            alt: "CI Milestone 2",
            repo: "https://github.com/10xOXR/IFED_Milestone_2_Exoplanets",
            site: "https://10xoxr.github.io/IFED_Milestone_2_Exoplanets/",
            tech: ["HTML", "CSS", "Javascript", "jQuery", "DC.js", "D3.js"]
        },
        {
            name: "2BN Savoury Sensations",
            img: "static/img/ms4.png",
            alt: "CI Milestone 4",
            repo: "https://github.com/10xOXR/2BN_Savoury_Sensations",
            site: "https://m4-2bn-savoury-sensations.herokuapp.com/",
            tech: [
                "HTML", "CSS", "Sass", "Javascript", "jQuery", "Python", "Flask",
                "MongoDB", "Materialize", "Heroku"
            ]
        },
        {
            name: "The Unicorn Attractor - Issue Tracker",
            img: "static/img/ms5.png",
            alt: "CI Milestone 5",
            repo: "https://github.com/10xOXR/2BN-Milestone-5",
            site: "https://django-2bn-unicorn.herokuapp.com/",
            tech: [
                "HTML", "CSS", "Sass", "Javascript", "jQuery", "Python", "Django",
                "PostgreSQL", "AWS", "Materialize", "Stripe", "Heroku", "TravisCI"
            ]
        },
    ];
    
    let proj_list = "<ul class='flip-cards'>";

    projects.map(name => {
        proj_list += "<li class='center-align'><div class='flip-card'>" +
        "<div class='flip-card-inner'><div class='flip-card-front'>" +
        "<img src='" + name.img + "' alt='" + name.alt + "'>" +
        "</div><div class='flip-card-back'><h2>" + name.name + "</h2><h3>" + name.alt + "</h3>" +
        "<div><a href='" + name.repo + "' class='btn' target='_blank'><i class='fab fa-github right' aria-hidden='true'></i>REPO</a>" +
        "&nbsp" +
        "<a href='" + name.site + "' class='btn' target='_blank'><i class='fas fa-link right' aria-hidden='true'></i>LIVE</a></div>" +
        "</div></div></div>" + "<ul id='project-chips' class='center-align'>";
        for (var i in name.tech) {
            proj_list += "<li class='chip'><img src='static/img/skills/" + name.tech[i].toLowerCase() + ".png' alt='" + name.tech[i] + 
            "'>" + name.tech[i] + "</li>"
        }
        proj_list += "</ul></li>"
    });

    proj_list += "</ul>";

    $("#projects").append(proj_list);

});

