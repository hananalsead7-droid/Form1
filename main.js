
function formValdeation() {
    let Last_Name = document.getElementById("Last_Name").value;
    let Frist_Name = c=document.getElementById("Frist_Name").value;
    let Email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password");
    let Supmit = document.getElementById("Supmit");
  // text 

  let password_feedback = document.getElementById("password-feedback");
  let confirm_feedback = document.getElementById("confirm-feedback");
  let erorr = document.getElementById("erorr");

  let small = document.querySelector("small")
  let text = '';

  const containsNumber = /\d/.test(Last_Name);
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(Last_Name.length < 3 ||typeof Last_Name!=='String' || containsNumber) {
  let text = "Please Enter Vlide Last Name";
     erorr.innerHTML = text;
     return false

  }else if(Frist_Name.length < 3 ||typeof Frist_Name!=='String' || containsNumber){
      let text = "Please Enter Vlide frist Name";
     erorr.innerHTML = text;
     return false
  }else if(Email.indexOf("@") == -1){
     text = "Please Enter Vlide Email";
     erorr.innerHTML = text;
     return false;
  } else if( password !== confirm_password){
    text = "يجب ادخال كلمه مرور قويه";
     password_feedback.innerHTML = text;
     return false;
  } else if(!strongPasswordRegex.test(password)) {
    text = "الكلمه المرور غير مطابقه";
    confirm_feedback.innerHTML = text;
    return false;
  } else{
    return true
  }

}

Supmit.addEventListener("click", function(event){
 if(formValdeation()) {
     
  alert("تم التسجيل بنجاح");
 }
});

/*
 event.preventDefault(); 
     
     alert("فشل التحقق. الرجاء إدخال البيانات الصحيحة."); 
      
     
   } else {
     
     alert("تم التسجيل بنجاح");
     
   }*/
