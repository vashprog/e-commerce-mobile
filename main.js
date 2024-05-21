function validation(){
    var username = document.getElementById('exampleInputName').value;
    var email = document.getElementById('exampleInputEmail').value;
    var number = document.getElementById('exampleInputNumber').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var cpassword = document.getElementById('exampleInputPassword2').value;

    var usercheck = /^[A-Za-z ]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if (usercheck.test(username)){
        document.getElementById('errorname').innerHTML = " ";
    }
    else{
        document.getElementById('errorname').innerHTML = "Please use only Alphabet";
        return false;
    }
    if (emailcheck.test(email)){
        document.getElementById('erroremail').innerHTML = " ";
    }
    else{
        document.getElementById('erroremail').innerHTML = "Please follow valid email syntax";
        return false;
    }
    if (numbercheck.test(number)){
        document.getElementById('errornumber').innerHTML = " ";
    }
    else{
        document.getElementById('errornumber').innerHTML = "Invalid Number";
        return false;
    }
    if (passwordcheck.test(password)){
        document.getElementById('errorpassword').innerHTML = " ";
    }
    else{
        document.getElementById('errorpassword').innerHTML = "Please use alphabet, number, special letters";
        return false;
    }
    if (cpassword.match(password)){
        document.getElementById('errorcpassword').innerHTML = " ";
    }
    else{
        document.getElementById('errorcpassword').innerHTML = "Passsword is not matching";
        return false;
    }
}

function validation0(){
    var email0 = document.getElementById('exampleInputEmail0').value;
    var password0 = document.getElementById('exampleInputPassword0').value;

    // var emailcheck0 = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    // var passwordcheck0 = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if (email0.match(email)){
        document.getElementById('erroremail0').innerHTML = " ";
    }
    else{
        document.getElementById('erroremail0').innerHTML = "Please follow valid email syntax";
        return false;
    }
    if (password0.match(password)){
        document.getElementById('errorpassword0').innerHTML = " ";
    }
    else{
        document.getElementById('errorpassword0').innerHTML = "Please use alphabet, number, special letters";
        return false;
    }
}

function billvalidation(){
    var name = document.getElementById('InputName').value;
    var emailID = document.getElementById('InputEmail').value;
    var contactnumber = document.getElementById('InputNumber').value;
    var country = document.getElementById('InputCountry').value;
    var state = document.getElementById('InputState').value;
    var address = document.getElementById('InputAddress').value;
    var zipcode = document.getElementById('InputZip').value;
    var ccname = document.getElementById('cardName').value;
    var ccnumber = document.getElementById('cc-number').value;
    var cccvv = document.getElementById('cc-cvv').value;


    var namecheck = /^[A-Za-z ]{3,50}$/;
    var emailIDcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var contactnumbercheck = /^[6789][0-9]{9}$/;
    var countrycheck = /^[A-Za-z ]{3,50}$/;
    var statecheck = /^[A-Za-z ]{3,50}$/;
    var addresscheck = /^[A-Za-z0-9_@&, -]{2,50}$/;
    var zipcheck = /^[0-9]{1,12}$/;
    var cardnamecheck = /^[A-Za-z ]{3,50}$/;
    var cardnumbercheck = /^[0-9]{1,20}$/;
    var cvvcheck = /^[0-9]{1,5}$/;


    if (namecheck.test(name)){
        document.getElementById('exname').innerHTML = " ";
    }
    else{
        document.getElementById('exname').innerHTML = "Please use only Alphabet";
        return false;
    }
    if (emailIDcheck.test(emailID)){
        document.getElementById('exemail').innerHTML = " ";
    }
    else{
        document.getElementById('exemail').innerHTML = "Please follow valid email syntax";
        return false;
    }
    if (contactnumbercheck.test(contactnumber)){
        document.getElementById('exnumber').innerHTML = " ";
    }
    else{
        document.getElementById('exnumber').innerHTML = "Invalid Number";
        return false;
    }
    if (countrycheck.test(country)){
        document.getElementById('excountry').innerHTML = " ";
    }
    else{
        document.getElementById('excountry').innerHTML = "Invalid Country";
        return false;
    }
    if (statecheck.test(state)){
        document.getElementById('exstate').innerHTML = " ";
    }
    else{
        document.getElementById('exstate').innerHTML = "Invalid State";
        return false;
    }
    if (addresscheck.test(address)){
        document.getElementById('exaddress').innerHTML = " ";
    }
    else{
        document.getElementById('exaddress').innerHTML = "Invvalid Address";
        return false;
    }
    if (zipcheck.test(zipcode)){
        document.getElementById('exzip').innerHTML = " ";
    }
    else{
        document.getElementById('exzip').innerHTML = "Invalid Zip Code";
        return false;
    }
    if (cardnamecheck.test(ccname)){
        document.getElementById('excardname').innerHTML = " ";
    }
    else{
        document.getElementById('excardname').innerHTML = "Invalid Card Name";
        return false;
    }
    if (cardnumbercheck.test(ccnumber)){
        document.getElementById('excardnumber').innerHTML = " ";
    }
    else{
        document.getElementById('excardnumber').innerHTML = "Invalid Card Number";
        return false;
    }
    if (cvvcheck.test(cccvv)){
        document.getElementById('excvv').innerHTML = " ";
    }
    else{
        document.getElementById('excvv').innerHTML = "Invalid CVV";
        return false;
    }

    

}

function samsungm12submit(){
    var nameobj = document.getElementById("billname1").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice1").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes1").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function samsunga13submit(){
    var nameobj = document.getElementById("billname2").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice2").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes2").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function redmi9activsubmit(){
    var nameobj = document.getElementById("billname3").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice3").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes3").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function apple13starlightsubmit(){
    var nameobj = document.getElementById("billname4").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice4").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes4").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function apple12bluesubmit(){
    var nameobj = document.getElementById("billname5").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice5").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes5").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function apple11yellowsubmit(){
    var nameobj = document.getElementById("billname6").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice6").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes6").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function apple13prosubmit(){
    var nameobj = document.getElementById("billname7").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice7").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes7").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function apple13minisubmit(){
    var nameobj = document.getElementById("billname8").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice8").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes8").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function applexrsubmit(){
    var nameobj = document.getElementById("billname9").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice9").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes9").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function nokia1051submit(){
    var nameobj = document.getElementById("billname10").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice10").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes10").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function nokia1052submit(){
    var nameobj = document.getElementById("billname11").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice11").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes11").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function nokia53102submit(){
    var nameobj = document.getElementById("billname12").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice12").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes12").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function nokiac01submit(){
    var nameobj = document.getElementById("billname13").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice13").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes13").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function nokia110submit(){
    var nameobj = document.getElementById("billname14").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice14").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes14").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function nokiag20submit(){
    var nameobj = document.getElementById("billname15").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice15").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes15").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function samsungm32submit(){
    var nameobj = document.getElementById("billname16").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice16").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes16").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function samsungs20submit(){
    var nameobj = document.getElementById("billname17").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice17").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes17").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function samsungm11submit(){
    var nameobj = document.getElementById("billname18").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice18").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes18").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function samsungm21submit(){
    var nameobj = document.getElementById("billname19").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice19").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes19").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function redmi9submit(){
    var nameobj = document.getElementById("billname20").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice20").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes20").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}


function redmi10prosubmit(){
    var nameobj = document.getElementById("billname21").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice21").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes21").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function redmi11tsubmit(){
    var nameobj = document.getElementById("billname22").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice22").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes22").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function redmi9asubmit(){
    var nameobj = document.getElementById("billname23").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice23").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes23").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

function redmi10ssubmit(){
    var nameobj = document.getElementById("billname24").value;
    localStorage.setItem("NAMEOBJ",nameobj);

    var priceobj = document.getElementById("billprice24").value;
    localStorage.setItem("PRICEOBJ",priceobj);

    var desobj = document.getElementById("billdes24").value;
    localStorage.setItem("DESOBJ",desobj);

    return false;
}

