function sendemail() {
    var name = $("#Name").val();
    var phone = $("#Phone").val();
    var email = $("#Email").val();
    var date = $("#datepicker").val();
    var time = $("#datepicker2").val();
    var user = $("#User").val();

    var body = "Name : " + name +"<br>Phone :" + phone +"<br>Email :" + email +"<br>datepicker :" + date +"<br>datepicker2 :" + time +"<br>User :" + user;
    Email.send({    
      
        SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To: "dongtho02@gmail.com",
        Form: 'dongtho0@gmail.com',
        Subject: "Contact Us",
        Body: body
    })
        .then(function (message) {
            message => alert(message)

        });
}