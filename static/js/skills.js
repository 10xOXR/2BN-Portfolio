$(document).ready(() => {

    let skills = [
        "HTML", "CSS", "Sass", "JavaScript", "jQuery", "DC.js",
        "D3.js", "Bootstrap", "Materialize", "JSON", "Python",
        "Flask", "Django", "MySQL", "PostgreSQL", "MongoDB",
        "VSCode", "Linux", "Git", "GitHub", "AWS", "Jasmine",
        "Heroku", "TravisCI"
    ]

    let skill_list = "";
    let i = 0;

    skills.map(() => {
        skill_list += "<figure><figcaption>" +
            skills[i] +
            "</figcaption>" +
            "<img src='static/img/skills/" +
            skills[i].toLowerCase() +
            ".png' alt='" +
            skills[i] +
            "'></figure>";
        i += 1;

    });

    $(".skill-tiles").append(skill_list);
});
