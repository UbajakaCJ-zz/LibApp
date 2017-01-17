window.onload = loginValid;

function loginValid(){
     var username=document.getElementById('Username').value;
     var password=document.getElementById('Password').value;
           if (username == 'user' && password =='user'){
               window.open('user.html');
           } else if(username=='admin' && password == 'admin'){
           		window.open('admin.html');
           }
           else{
               alert('Username and Password does not exist!');
           }        
}