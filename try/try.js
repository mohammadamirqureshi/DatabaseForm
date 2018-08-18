var person = {
    name:"" ,
    dob: "",
    gender: "",
    education: {
        garduation:[],
        twelveth:[],
        tenth:[]
    },
    profiles : {
        github:[],
        linkedin:[],
        twitter:[],
        facebook:[],
        google:[]
    },
    skills:[],
    projects:[],
    hobbies:[]

};

$(function () {


    $('#btn').on('click' , function () {
        var inp1 = $('#inp1').val();
        var inp2 = $('#inp2').val();
        var tryproject = new Object;
        tryproject.name=inp1;
        person.education.garduation.push(inp2);
        person.projects.push(tryproject);
        console.log(person);
    });

});