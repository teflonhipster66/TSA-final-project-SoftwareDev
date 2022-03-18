
window.onload=function GetUSER(){
    var USNDATA=JSON.parse(localStorage.getItem("USERS"))

    var USLES=localStorage.getItem("ID")
    var USLES=USNDATA[USLES]
    document.getElementById("USERNAME_PROFILE").innerHTML=  "Hello " + USLES
    
}

function getalldescriptions(){
    if(localStorage.getItem('data')==null){
        localStorage.setItem('data', '[]')

    
    }
    else{
    
        
    
    var ID= localStorage.getItem("ID")
    var data=JSON.parse(localStorage.getItem("data"))}
    usernamedata=JSON.parse(localStorage.getItem("USERS"))
    
    var ARRYFORSTUDENT=usernamedata[ID]

     var place=data.indexOf(ARRYFORSTUDENT)
     var place2=place+3
     var ARRYFORSTUDENT= data.slice(place,place2)


    localStorage.setItem("ARRYFORSTUDENT",JSON.stringify(ARRYFORSTUDENT))
    var data = JSON.parse(localStorage.getItem("data"))
    
if(data.includes(localStorage.getItem("ID1"))){
    var result3=[]
    for(let i= 1; i<data.length;i++){
        i=(i+3)-1
        result3.push(i)
        
        
    }
    localStorage.setItem("USERS4",JSON.stringify(result3))
   




}}
    
    
    

function putIn(){
    data= JSON.parse(localStorage.getItem('data'))
    var ARRYFORSTUDENT=JSON.parse(localStorage.getItem("ARRYFORSTUDENT"))
 
     
         
    
     if(data.includes(localStorage.getItem("ID1"))){
        document.getElementById("PROFILE").innerHTML= ARRYFORSTUDENT[1]
        document.getElementById("Description").innerHTML=ARRYFORSTUDENT[2]
         
         }
    else if(Array1.includes("[]")){
            return null
          }
         
    else{return null}  
 
     
 }


function saveALL(){
    var USNDATA=JSON.parse(localStorage.getItem("USERS"))

    var USLES=localStorage.getItem("ID")
    var USLES=USNDATA[USLES]
    var New3= document.getElementById("profile").value
    var New2= USLES
    var New1=document.getElementById("descrip").value
    var New4=document.getElementById("Subjects").value

    

    var oldData= JSON.parse(localStorage.getItem('data'))
    
    
    oldData.push(New2)
    oldData.push(New3)
    oldData.push(New1)
    oldData.push(New4)
    localStorage.setItem('data', JSON.stringify(oldData))
    



    window.location.reload(true);

    

}



window.addEventListener('load',()=>{
    getalldescriptions()
    Array1=JSON.parse(localStorage.getItem("ARRYFORSTUDENT"))

    if(JSON.parse(localStorage.getItem("ARRYFORSTUDENT")!='[]')){
        putIn()
        
    }
    if (localStorage.getItem("ID1") == localStorage.getItem("pick") ) {
        alert("Message from " + USERS1[localStorage.getItem("ID2")] + ":"+ +"\n"+ localStorage.getItem("msg") )
    }
        
    

}) ; 

function logOut() {
    localStorage.removeItem("ID1")
    window.location.href = "index.html"
}

function goTo() {
    window.location.href = "FindStudent.html"
} 



 
