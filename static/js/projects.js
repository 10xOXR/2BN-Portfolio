$(document).ready(() => {

    let projects = [
        {
            name: "Intro. to the Discworld",
            img: "static/img/ms1.png",
            alt: "Milestone 1",
            repo: "https://github.com/10xOXR/milestone-project-1",
            site: "https://10xoxr.github.io/milestone-project-1",
            tech: ["HTML", "CSS", "Javascript"]
        },
        {
            name: "Exoplanets and How to Find Them",
            img: "static/img/ms2.png",
            alt: "Milestone 2",
            repo: "https://github.com/10xOXR/IFED_Milestone_2_Exoplanets",
            site: "https://10xoxr.github.io/IFED_Milestone_2_Exoplanets/",
            tech: ["HTML", "CSS", "Javascript", "jQuery", "DC.js", "D3.js"]
        },
        {
            name: "2BN Savoury Sensations",
            img: "static/img/ms4.png",
            alt: "Milestone 4",
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
            alt: "Milestone 5",
            repo: "https://github.com/10xOXR/2BN-Milestone-5",
            site: "https://django-2bn-unicorn.herokuapp.com/",
            tech: [
                "HTML", "CSS", "Sass", "Javascript", "jQuery", "Python", "Django",
                "PostgreSQL", "AWS S3", "Materialize", "Stripe", "Heroku", "TravisCI"
            ]
        },
    ];

    let proj_list =  "<ul>";

    projects.map(name => {
        proj_list += "<li><figcaption class='center-align'>" +
        name.name + "</figcaption>" +
        "<figure><img src='" +
        name.img +
        "' alt='" +
        name.alt +
        "'></figure>"
    });

    proj_list += "<ul>"

    $("#projects").append(proj_list);

});