window.addEventListener('load',()=>{
    createTable()
  
        
    

}) ; 



function createTable(){
    var data1 = JSON.parse(localStorage.getItem('data1'))
    var myTable = "<table><tr>";
    data1.unshift("Username", "Caption", "Description")
    var perrow = 3; 
    data1.forEach((value, i) => {
    myTable += `<td>${value}</td>`;
     
      
     
      
      var next = i + 1;
      if (next%perrow==0 && next!=data1.length) { myTable += "</tr><tr>"; }
    });

    

    document.getElementById("container").innerHTML = myTable;


         
}


function message() {
  localStorage.removeItem("pick1")
  localStorage.removeItem("msg1")
  var data1 = JSON.parse(localStorage.getItem('data1'))
  var pick1 = document.getElementById("studentPicker").value
  var msg1 = document.getElementById("message").value


  if (data1.includes(pick1)) {
    localStorage.setItem("pick1", pick1)
    localStorage.setItem("msg1", msg1)
    alert("Message Sent")
  }
  else {
    alert("Student not Found")
  }
  
}

function Back() {
  window.location.href = "Teacherside.html"
}






      

