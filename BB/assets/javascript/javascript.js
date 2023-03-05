function validate()
{
  var text = document.getElementById("floatingInput1").value;
  var email=document.getElementById("floatingEmail").value;
  var pass=document.getElementById("floatingPassword").value;
  var cpass=document.getElementById("floatingConfirmPassword").value;
  var phnnum=document.getElementById("floatingPhoneNumber").value;
  

  if (text==""){
  document.getElementById("uname").innerHTML="Enter the text";
  document.getElementById("uname").style.color="Red";
   return false;
  }
  if (email==""){
     document.getElementById("emailEl").innerHTML="Enter the valid email";
     document.getElementById("emailEl").style.color="Red";
     return false;
   }
  if(pass==""){
  document.getElementById("passP").innerHTML="Enter the password";
  document.getElementById("passP").style.color="Red";
  return false;
  }
  if(pass.length<8 ){
     document.getElementById("passP").innerHTML="Password is weak";
     document.getElementById("passP").style.color="Red";
     return false;
    }
  if(cpass!=pass || cpass==""){
      document.getElementById("passPC").innerHTML="Password not same";
      document.getElementById("passPC").style.color="Red";
     return false;
    }
    if(phnnum.length==""){
      document.getElementById("phnNum").innerHTML="Enter phone number";
      document.getElementById("phnNum").style.color="Red";
     return false;
    }
    if(phnnum.length>10 || phnnum.length<10 ){
      document.getElementById("phnNum").innerHTML="Write correct phone number";
      document.getElementById("phnNum").style.color="Red";
    return false;
    }
    
}

  function validation(){
    var search=document.getElementById("searchbtn").value;
    if(search ==""){
    alert('Search Here!!');
    return false;
  }
  }





