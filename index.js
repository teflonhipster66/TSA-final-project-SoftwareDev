

function submit(){
    var type = document.getElementById("roles").value;
    var password= document.getElementById("psw").value;
    var password2= document.getElementById("pswrepeat").value;
    var username = document.getElementById("Username").value;
    var email  = document.getElementById("email").value;
    var Data = JSON.parse(localStorage.getItem("Data"))
    var Data1= JSON.parse(localStorage.getItem("Data1"))
    
    if(password!=password2){
        alert("Passwords do not match")
        }
    if(localStorage.getItem('Data')==null){
            localStorage.setItem('Data', '[]')
            
        }
    if(localStorage.getItem('Data1')==null){
            localStorage.setItem('Data1', '[]')
            
        }

     else if(Data1.includes(username)&&Data1.length>5 ||Data.includes(username)&&Data.length>5||Data1[username]&&Data1.length>5===Data[username]&&Data.length>5){
            alert("Username already in use")
        }
   
        
    // SAVE TEACHER DATA
     else if (type == "teacher") {
       
        var Data=JSON.parse(localStorage.getItem('Data'))

        Data.push (2)
        Data.push (email);
        Data.push (username);
        Data.push (password);
        localStorage.setItem('Data', JSON.stringify(Data))
        window.location.href = "index.html"
        
        
    
    }
    
    // SAVE STUDENT DATA 
    else if (type == "student") {    
      
        var Data1=JSON.parse(localStorage.getItem('Data1'))

        Data1.push (1)
        Data1.push (email);
        Data1.push (username);
        Data1.push (password);
        localStorage.setItem('Data1', JSON.stringify(Data1))
        window.location.href = "index.html"
    }
}



function Incorrect() {
    alert("Inncorect Username or Password")
}

function verify() {
    console.time()

    var Data = JSON.parse(localStorage.getItem("Data"))
    var Data1= JSON.parse(localStorage.getItem("Data1"))
    var userInput = document.getElementById("enterUser").value
    localStorage.setItem("ID1", userInput)
    var pwInput = document.getElementById("enterPw").value;
    var x = 0

    if (Data.includes(userInput&&pwInput)) {
        var role = Data[Data.indexOf(userInput) - 2]
        var pwlocation = Data.indexOf(userInput)+1
    }
    if (Data1.includes(userInput&&pwInput)) {
        var role1 =   Data1[Data1.indexOf(userInput) - 2]
       
        var pwlocation1 = Data1.indexOf(userInput)+1
    
    }

    
    if (role == 2 && Data[pwlocation]===pwInput ) {
        window.location.href = "Teacherside.html"
        



    }
    else {
        x = x + 1
    }
  
    if(role1 == 1&&Data1[pwlocation1]===pwInput) {
        window.location.href = "Studentside.html"}
      
            
    

     else {
        x = x + 1
    }
    if (x == 2) {
        Incorrect()
    }


    console.timeEnd()
}

function GetUserwithEverythird(){
    var Data = JSON.parse(localStorage.getItem("Data"))
    var Data1 = JSON.parse(localStorage.getItem("Data1"))
if(Data.includes(localStorage.getItem("ID1"))){
    var result=[]
    for(let i= 0; i<Data.length;i+=4){
        result.push(Data[i+2])
        
        
    }
    localStorage.setItem("USERS",JSON.stringify(result))
    var USNDATA=JSON.parse(localStorage.getItem("USERS"))

    if(USNDATA.includes(localStorage.getItem("ID1"))){
      var ID=[USNDATA.indexOf(localStorage.getItem("ID1"))]
      localStorage.setItem("ID", ID)}
    
      
      }
    
     if(Data1.includes(localStorage.getItem("ID1"))){
     
      var result1=[]
      for(let i=0;i<Data1.length;i+=4){
        result1.push(Data1[i+2])
    }

    
    localStorage.setItem("USERS1",JSON.stringify(result1))
    var USNDATA1=JSON.parse(localStorage.getItem("USERS1"))
  
    if(USNDATA1.includes(localStorage.getItem("ID1"))){
        var ID2=[USNDATA1.indexOf(localStorage.getItem("ID1"))]
        
        localStorage.setItem("ID2", ID2)

            
    }}
}





function email() {
    console.time()
    var input = prompt("Enter Recovery Email")
    var x = 0 
    var Data = JSON.parse(localStorage.getItem("Array"))
    if (Data.includes(input)) {
        var infoLocation = Data.indexOf(input)
        var userRecovery = infoLocation + 1
        var pwRecovery = infoLocation + 2
        x = x + 1
    }
    

    if (x == 1) { 
        Email.send({
            Host: "smtp.gmail.com",
            Username: "TutoringAppTSA@gmail.com",
            Password: "tutoringpassword",
            To: input,
            From: "TutoringAppTSA@gmail.com",
            Subject: "Username and password Recovery",
            Body: "Username: " + Data[userRecovery] + "Password: " + Data[pwRecovery],
    })
            .then(function (message) {
            alert("mail sent successfully")
        });
    
    }
 
  
    
        
   
    
   
}
