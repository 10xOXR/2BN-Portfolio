$(document).ready(() => {

    let skills = [
        {
            symbol: "Ht",
            name: "HTML"
        },
        {
            symbol: "Cs",
            name: "CSS"
        },
        {
            symbol: "Ss",
            name: "Sass"
        },
        {
            symbol: "Js",
            name: "JavaScript"
        },
        {
            symbol: "Jq",
            name: "jQuery"
        },
        {
            symbol: "Dc",
            name: "DC"
        },
        {
            symbol: "D",
            name: "D3"
        },
        {
            symbol: "Bs",
            name: "Bootstrap"
        },
        {
            symbol: "Mz",
            name: "Materialize"
        },
        {
            symbol: "J",
            name: "JSON"
        },
        {
            symbol: "Py",
            name: "Python"
        },
        {
            symbol: "Fl",
            name: "Flask"
        },
        {
            symbol: "Dj",
            name: "Django"
        },
        {
            symbol: "My",
            name: "MySQL"
        },
        {
            symbol: "Pg",
            name: "PostgreSQL"
        },
        {
            symbol: "Md",
            name: "MongoDB"
        },
        {
            symbol: "Vs",
            name: "VSCode"
        },
        {
            symbol: "Lx",
            name: "Linux"
        },
        {
            symbol: "Gt",
            name: "Git"
        },
        {
            symbol: "Gh",
            name: "GitHub"
        },
        {
            symbol: "Aw",
            name: "AWS"
        },
        {
            symbol: "Ja",
            name: "Jasmine"
        },
        {
            symbol: "Hu",
            name: "Heroku"
        },
        {
            symbol: "Tr",
            name: "TravisCI"
        },
    ]

    let li_list = "<ul>";

    skills.map((symbol, index) => {
        let i = index + 1;
        li_list += "<li><span class='" +
            symbol.name.toLowerCase() +
            "'><h6>" +
            i +
            "</h6><h3 class='center-align'>" +
            symbol.symbol +
            "</h3><h6 class='center-align'>" +
            symbol.name +
            "</h6></span></li>"
    });

    li_list += "</ul>"

    $("#skill-tiles").append(li_list);
});