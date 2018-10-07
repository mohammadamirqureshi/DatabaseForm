// ---------------------------------------------------------------------------------------------------
// person object starts here

var person = {
    name:[] ,
    dob: "",
    gender: "",
    education: [
        {
            school:"",
            year:"",
            percentage:""
        } ,
        {
            school:"",
            year:"",
            percentage:""
        },
        {
            course:"",
            branch:"",
            year:"",
            college:""
        }
    ],
    profiles : {
        google:[],
        linkedin:[],
        twitter:[],
        facebook:[],
        github:[]
    },
    skills:[],
    projects:[],
    hobbies:[]

};

// person object ends here
// ---------------------------------------------------------------------------------------------------


$(function () {

    $('#btnEducation1').hide();
    $('#btnEducation2').hide();
    $('#btnEducation3').hide();

    $('#education').on('change',function () {
        if($(this).val()=='Tenth'){
            $('#inpGraduation').attr('type','hidden');
            $('#edu01').attr('type','text');
            $('#edu02').attr('type','text');
            $('#edu03').attr('type','text');
            $('#edu11').attr('type','hidden');
            $('#edu12').attr('type','hidden');
            $('#edu13').attr('type','hidden');
            $('#edu21').attr('type','hidden');
            $('#edu22').attr('type','hidden');
            $('#edu23').attr('type','hidden');
            $('#btnEducation1').show();
            $('#btnEducation2').hide();
            $('#btnEducation3').hide();

            $('#btnEducation1').on('click',function () {

                    person.education[0].school=$('#edu01').val();
                    person.education[0].year=$('#edu02').val();
                    person.education[0].percentage=$('#edu03').val();

                    console.log(person.education);
                    let edu10=`
                    <li>
                    <span>Class 10th ::<br/> School:</span>${person.education[0].school}<span> Year :</span>${person.education[0].year}<span> Pectentage :</span>${person.education[0].percentage}
                    </li>`
                $('#showEducationList').append(edu10);
                   edu10.val('');
            });

        }

        else if($(this).val()=='Twelveth'){
            $('#inpGraduation').attr('type','hidden');
            $('#edu01').attr('type','hidden');
            $('#edu02').attr('type','hidden');
            $('#edu03').attr('type','hidden');
            $('#edu11').attr('type','text');
            $('#edu12').attr('type','text');
            $('#edu13').attr('type','text');
            $('#edu21').attr('type','hidden');
            $('#edu22').attr('type','hidden');
            $('#edu23').attr('type','hidden');
            $('#btnEducation1').hide();
            $('#btnEducation2').show();
            $('#btnEducation3').hide();

            $('#btnEducation2').on('click',function () {

                person.education[1].school=$('#edu11').val();
                person.education[1].year=$('#edu12').val();
                person.education[1].percentage=$('#edu13').val();

                let edu12=`
                    <li>
                    <span>Class 12th ::<br/> School:</span>${person.education[1].school}<span> Year :</span>${person.education[1].year}<span> Pectentage :</span>${person.education[1].percentage}
                    </li>`
                $('#showEducationList').append(edu12);
                edu12.val('');
                console.log(person.education);
            });
        }

        else if($(this).val()=='Graduation'){
            $('#inpGraduation').attr('type','text');
            $('#edu01').attr('type','hidden');
            $('#edu02').attr('type','hidden');
            $('#edu03').attr('type','hidden');
            $('#edu11').attr('type','hidden');
            $('#edu12').attr('type','hidden');
            $('#edu13').attr('type','hidden');
            $('#edu21').attr('type','text');
            $('#edu22').attr('type','text');
            $('#edu23').attr('type','text');
            $('#btnEducation1').hide();
            $('#btnEducation2').hide();
            $('#btnEducation3').show();

            $('#btnEducation3').on('click',function () {

                person.education[2].course=$('#inpGraduation').val();
                person.education[2].branch=$('#edu21').val();
                person.education[2].year=$('#edu22').val();
                person.education[2].college=$('#edu23').val();

                console.log(person.education);

                let eduGrad=`
                    <li>
                    <span>Graduation ::<br/><span> Course : </span>${person.education[2].course}<span> Branch : </span>${person.education[2].branch}<span> Year :</span>${person.education[2].year}<span> College :</span>${person.education[2].college}
                    </li>`;
                $('#showEducationList').append(eduGrad);
                eduGrad.val('');
            });
        }
        else{
            $('#inpGraduation').attr('type','hidden');
            $('#edu01').attr('type','hidden');
            $('#edu02').attr('type','hidden');
            $('#edu03').attr('type','hidden');
            $('#edu11').attr('type','hidden');
            $('#edu12').attr('type','hidden');
            $('#edu13').attr('type','hidden');
            $('#edu21').attr('type','hidden');
            $('#edu22').attr('type','hidden');
            $('#edu23').attr('type','hidden');
            $('#btnEducation1').hide();
            $('#btnEducation2').hide();
            $('#btnEducation3').hide();
        }
    });

    $('#profiles').on('change', function () {
       if($(this).val()=='Select'){
           $('#profiles1').attr('type','hidden');
           $('#profiles2').attr('type','hidden');
       }
       else{
           $('#profiles1').attr('type','text');
           $('#profiles2').attr('type','text');
       }
    });

    $('#btnProfiles').on('click',function () {

        if($('#profiles').val()=='Google'){
            person.profiles.google[0]=$('#profiles1').val();
            person.profiles.google[1]=$('#profiles2').val();

            let profilelist=`
            <li>
            <span>Google ::<br/>User name : </span>${person.profiles.google[0]}<span> Link : </span>${person.profiles.google[1]}
            </li>`;
            $('#showProfilesList').append(profilelist);
        }

        else if($('#profiles').val()=='Linkedin'){
            person.profiles.linkedin[0]=$('#profiles1').val();
            person.profiles.linkedin[1]=$('#profiles2').val();

            let profilelist=`
            <li>
            <span>Linkedin ::<br/>User name : </span>${person.profiles.linkedin[0]}<span> Link : </span>${person.profiles.linkedin[1]}
            </li>`;
            $('#showProfilesList').append(profilelist);
        }

        else if($('#profiles').val()=='Twitter'){
            person.profiles.twitter[0]=$('#profiles1').val();
            person.profiles.twitter[1]=$('#profiles2').val();

            let profilelist=`
            <li>
            <span>Twitter ::<br/>User name : </span>${person.profiles.twitter[0]}<span> Link : </span>${person.profiles.twitter[1]}
            </li>`;
            $('#showProfilesList').append(profilelist);
        }

        else if($('#profiles').val()=='Facebook'){
            person.profiles.facebook[0]=$('#profiles1').val();
            person.profiles.facebook[1]=$('#profiles2').val();

            let profilelist=`
            <li>
            <span>Facebook ::<br/>User name : </span>${person.profiles.facebook[0]}<span> Link : </span>${person.profiles.facebook[1]}
            </li>`;
            $('#showProfilesList').append(profilelist);
        }

        else if($('#profiles').val()=='Github'){
            person.profiles.github[0]=$('#profiles1').val();
            person.profiles.github[1]=$('#profiles2').val();

            let profilelist=`
            <li>
            <span>Github ::<br/>User name : </span>${person.profiles.github[0]}<span> Link : </span>${person.profiles.github[1]}
            </li>`;
            $('#showProfilesList').append(profilelist);
        }

        $('#profiles1').val('');
        $('#profiles2').val('');
        console.log(person.profiles);
    });

});