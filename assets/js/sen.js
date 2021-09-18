function sendemail() {
    var name = $("#Name").val();
    var phone = $("#Phone").val();
    var email = $("#Email").val();
    var date = $("#datepicker").val();
    var time = $("#datepicker2").val();
    var user = $("#User").val();

    var body = "Name : " + name +"<br>Phone :" + phone +"<br>Email :" + email +"<br>datepicker :" + date +"<br>datepicker2 :" + time +"<br>User :" + user;
    Email.send({
    
        SecureToken: "bf6c97d0-4a5b-4b38-b584-d647491bb7a9",
        From: "dongtho02@gmail.com",
        To: 'dongtho0@gmail.com',
        Subject: "Contact Us",
        Body: body
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}