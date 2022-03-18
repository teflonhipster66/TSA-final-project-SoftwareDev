window.addEventListener('load',()=>{
    createTable()
  
    
    

}) ; 

function createTable(){
      // Teacher Data
    var data = JSON.parse(localStorage.getItem('data')) 
    data.unshift("Username", "Caption", "Description", "Subject")
    var myTable = "<table><tr>";
    var perrow = 4; 
    data.forEach((value, i) => {
    myTable += `<td>${value}</td>`;
     
      
     
      
      var next = i + 1;
      if (next%perrow==0 && next!=data.length) { myTable += "</tr><tr>"; }
    });

    

    document.getElementById("container").innerHTML = myTable;
    

         
}


function message() {
  localStorage.removeItem("pick")
  localStorage.removeItem("msg")
  var data = JSON.parse(localStorage.getItem('data'))
  var pick = document.getElementById("teacherPicker").value
  var msg = document.getElementById("message").value


  if (data.includes(pick)) {
    localStorage.setItem("pick", pick)
    localStorage.setItem("msg", msg)
    alert("Message Sent")
  }
  else {
    alert("Teacher not found")
  }
  
}

function BacktoStudent() {
  window.location.href = "Studentside.html"
}
  


function TableStyle(){
    document.getele
}



      

