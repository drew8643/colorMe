function checkEmail(field)
{
    //What To Check Againt
    var inputParam = /(\S[^\.]*)(\.(\S*))?@(\S*)/;
    //What Were Checking
    var valCheck = document.getElementById(field);
    if(valCheck.value.match(inputParam))
    {
        //Set Green Boarder
        goodField(field);
        return true;
    }
    else
    {
        //Set Red Boarder
        badField(field);
        return false;
    }
}
function checkPassword(field)
{
    //What To Check Againt
    var inputParam = /\S{8,64}/;
    //What Were Checking
    var valCheck = document.getElementById(field);
    if(valCheck.value.match(inputParam))
    {
        //Set Green Boarder
        goodField(field);
        return true;
    }
    else
    {
        //Set Red Boarder
        badField(field);
        return false;
    }
}
function vCheckPassword(oPassword,vPassword)
{
	var oPasswordt = document.getElementById(oPassword);
    var vPasswordt = document.getElementById(vPassword);
    if(oPasswordt.value == vPasswordt.value)
    {
        //Set Green Boarder
        goodField(vPassword);
        return true;
    }
    else
    {
        //Set Red Boarder
        badField(vPassword);
        return false;
    }
}
function checkFname(field)
{
    //What To Check Againt
    var inputParam = /[a-z A-Z]/;
    //What Were Checking
    var valCheck = document.getElementById(field);
    if(valCheck.value.match(inputParam))
    {
        //Set Green Boarder
        goodField(field);
        return true;
    }
    else
    {
        //Set Red Boarder
        badField(field);
        return false;
    }
}
function checkLname(field)
{
    //What To Check Againt
    var inputParam = /\S{0,12}/;
    //What Were Checking
    var valCheck = document.getElementById(field);
    if(valCheck.value.match(inputParam))
    {
        //Set Green Boarder
        goodField(field);
        return true;
    }
    else
    {
        //Set Red Boarder
        badField(field);
        return false;
    }
}
function checkPhone(field)
{
    //What To Check Againt
    var inputParam = /(?:(\+?\d{1,3}) )?(?:([\(]?\d+[\)]?)[ -])?(\d{1,5}[\- ]?\d{1,5})/;
    //What Were Checking
    var valCheck = document.getElementById(field);
    if(valCheck.value.match(inputParam))
    {
        //Set Green Boarder
        goodField(field);
        return true;
    }
    else
    {
        //Set Red Boarder
        badField(field);
        return false;
    }
}
function goodField(id)
{
    document.getElementById(id).style.backgroundColor = "#FFFFFF";
}
function badField(id)
{
    document.getElementById(id).style.backgroundColor = "#ffc6c6";
}
function submissionCheck(email,p1,p2,name,uname,phone)
{
	if(!(checkEmail('email') && checkPassword('password') && vCheckPassword('password','v_password') && checkFname('fname') && checkLname('lname') && checkPhone('phone') ))
	{
		alert("There seems to be an issue with you input! Check to be sure all fields are properly filled.");
	}
	else
	{
		document.forms['main_form'].submit();
	}
}
function refreshFeed ()
{
location.reload();
}
