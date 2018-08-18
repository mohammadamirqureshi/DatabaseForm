// ---------------------------------------------------------------------------------------------------
// person object starts here

var person = {
    name:"" ,
    dob: "",
    gender: "",
    education: [
        {
            course:"",
            year:"",
            college:""
        } ,
        {
            school:"",
            year:"",
            percentage:""
        },
        {
            school:"",
            year:"",
            percentage:""
        }
    ],
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

// person object ends here
// ---------------------------------------------------------------------------------------------------

let edu1 = $('#edu1');
let edu2 = $('#edu2');
let edu3 = $('#edu3');

$(function () {

    $('#education').on('change',function () {
        if($(this).val()=='Graduation') {
           $('#inpGraduation').attr('type' , 'text');

            edu1.attr('type', 'text');
            edu2.attr('type', 'text');
            edu3.attr('type', 'text');

            $('#btneducation').click(function(){
                let value = `
                   <li>
                       <span>${edu1.val()}</span>
                       <span>${edu2.val()}</span>
                       <span>${edu3.val()}</span>
                       <button onclick="deleteEle(this , 0)">Delete</button>
                   </li>`;

                person.education[0].course = edu1.val();
                person.education[0].course = edu2.val();
                person.education[0].course = edu3.val();
                $('#lieducation').append(value);
                console.log(person);
            });
        }

        if($(this).val()=='Twelveth') {
            $('#inpGraduation').attr('type' , 'hidden');
            edu1.attr('type', 'text');
            edu2.attr('type', 'text');
            edu3.attr('type', 'text');

            $('#btneducation').click(function(){
                let value = `
                   <li>
                       <span>${edu1.val()}</span>
                       <span>${edu2.val()}</span>
                       <span>${edu3.val()}</span>
                       <button onclick="deleteEle(this, 1)">Delete</button>
                   </li>`;

                person.education[1].school = edu1.val();
                person.education[1].year = edu2.val();
                person.education[1].percentage = edu3.val();
                $('#lieducation').append(value);
                console.log(person);
            });
        }

        if($(this).val()=='Select'){
            $('#inpGraduation').attr('type' , 'hidden');
        }

    });

    // ----------------------------------------------------------------------------------------------
// start here person.skills of skills with array

    // btnskills.click(function(){
    //     let value = `
    //                <li>
    //                    <input type="hidden">
    //                    <span onclick="changeType(this)">${inpskills.val()}</span>
    //                    <button onclick="deleteEle(this)">Delete</button>
    //                </li>`;
    //     person.skills.push(inpskills.val());
    //     liskills.append(value);
    //     console.log(person);
    // });

    // End here person.skills of skills with array
    // ----------------------------------------------------------------------------------------------

});


// --------------------------------------------------------------------------------------------------
// person.skills of skills fuctions outside $.ready()
function deleteEle(ele , n) {
    $(ele).parent().remove();
    // var prev = $(ele).prev();
    // var item = prev.text();
    // person.education.splice( person.education.indexOf(item), 1 );
    person.education.splice(n ,1);
}


// End of todolst of skills functions outside $.ready()
// --------------------------------------------------------------------------------------------------