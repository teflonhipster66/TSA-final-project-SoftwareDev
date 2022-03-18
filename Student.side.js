
window.onload=function GetUSER(){
    var USNDATA1=JSON.parse(localStorage.getItem("USERS1"))

    var USLES1=localStorage.getItem("ID2")
    var USLES1=USNDATA1[USLES1]
    document.getElementById("USERNAME_PROFILE1").innerHTML= "Hello " + USLES1
    
}

function getalldescriptions(){
    if(localStorage.getItem('data1')==null){
        localStorage.setItem('data1', '[]')
    
    }
    else{
    var ID2= localStorage.getItem("ID2")
    var data1=JSON.parse(localStorage.getItem("data1"))}
    usernamedata1=JSON.parse(localStorage.getItem("USERS1"))
    
    var ARRYFORSTUDENT1=usernamedata1[ID2]

     var place1=data1.indexOf(ARRYFORSTUDENT1)
     var place21=place1+3
     var ARRYFORSTUDENT1= data1.slice(place1,place21)


    localStorage.setItem("ARRYFORSTUDENT1",JSON.stringify(ARRYFORSTUDENT1))}
    
    
    

function putIn(){
    data1= JSON.parse(localStorage.getItem('data1'))
    var ARRYFORSTUDENT=JSON.parse(localStorage.getItem("ARRYFORSTUDENT1"))
 
     
         
    
     if(data1.includes(localStorage.getItem("ID1"))){
        document.getElementById("PROFILE1").innerHTML= ARRYFORSTUDENT[1]
        document.getElementById("Description1").innerHTML=ARRYFORSTUDENT[2]
         
         }
    else if(Array1.includes("[]")){
            return null
          }
         
    else{return null}  
 
     
 }


function saveALL(){
    var USNDATA1=JSON.parse(localStorage.getItem("USERS1"))

    var USLES1=localStorage.getItem("ID2")
    var USLES1=USNDATA1[USLES1]
    var New3= document.getElementById("profile1").value
    var New2= USLES1
    var New1=document.getElementById("descrip1").value


    

    var oldData1= JSON.parse(localStorage.getItem('data1'))
    
    
    oldData1.push(New2)
    oldData1.push(New3)
    oldData1.push(New1)
    localStorage.setItem('data1', JSON.stringify(oldData1))
    window.location.reload(true);

}



window.addEventListener('load',()=>{
    getalldescriptions()
    Array2=JSON.parse(localStorage.getItem("ARRYFORSTUDENT1"))

    if(JSON.parse(localStorage.getItem("ARRYFORSTUDENT1")!='[]')){
        putIn()
        
    }

    var USERS1 = JSON.parse(localStorage.getItem("USERS1"))
    var USERS = JSON.parse(localStorage.getItem("USERS"))
    if (USERS1[localStorage.getItem("ID2")] === localStorage.getItem("pick1") ) {
        alert("Message from " + USERS[localStorage.getItem("ID")] + ":" +"\n"+ localStorage.getItem("msg1") )
    }

}) ; 


function logOut() {
    localStorage.removeItem("ID2")
    window.location.href = "index.html"
}

function goTo() {
    window.location.href = "TeacherFind.html"
}
 
