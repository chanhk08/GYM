window.addEventListener('scroll', function() {
    var element = document.getElementById('MainBodySubject');
    var range = 400;

    if (window.scrollY <= range) {
        element.style.fontSize = '80px';
    } else {
        element.style.fontSize = '40px';
    }
});


window.onbeforeunload = function() {
    document.body.scrollTop = 0;
}

window.onload = function() {
    setTimeout(function() {
        document.body.style.overflow = 'auto';
    }, 3000);
};


window.addEventListener('scroll', function() {
    var element = document.getElementById('arrow.png');
    var range = 400;

    if (window.scrollY >= range) {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
});

function print_result() {
    var name = document.f1.name.value;
    alert("Name = "+ name);

    var age = document.f1.age.value;
    alert("Age = "+ age);

    var year = document.f1.year.value;
    alert("Year = "+ year);

    var time = document.f1.time.value;
    alert("Time = "+ time);
    
    var mobile = document.f1.mobile.value;
    alert("Mobile = "+ mobile);

    var email = document.f1.email.value;
    alert("Email = "+ email);

    var gender;
    if(document.f1.gender[0].checked)
      gender = document.f1.gender[0].value;
    else
      gender = document.f1.gender[1].value;

    alert("Gender = "+gender);

    var gymex = "";
    var gymex = document.f1.gymex.length;
    for(var i=0; i<gymex_len; i++){
      if(document.f1.gymex[i].checked)
      gymex = dse+document.f1.gymex[i].value+"";
    }

    alert("Experience = "+gymex+"\nThank you for your submittion!");
    
    var index = document.f1.bodytp.selectedIndex;
    var bodytp_val = document.f1.bodytp.options[index].value;
    var bodytp_text = document.f1.bodytp.options[index].text;
    alert("Favorite = "+ bodytp_text+" "+bodytp_val);
  }