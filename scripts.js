function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  
  
  
  var rate = 0;
   
  function submitRate(){
      var user=document.getElementById('user').value;
      var review=document.getElementById('review').value;
      if(rate != 0 && user !="" && review !=""){
          var html=
          "<h4>User: <label class='text-primary'>" + user + "</label></h4>"
          +"<h4>Rating: <label class='text-primary'>" + rate + "</label></h4>"
          +"<h4>Review</h4>"
          +"<p>"+review+"</p>"
          +"<hr style='border-top:1px solid #000;'/>";
          document.getElementById('result').innerHTML+=html;
   
          document.getElementById('user').value="";
          document.getElementById('review').value="";
      }
  }
   
  function startRating(item){
      rate=item.id[0];
      sessionStorage.star = rate;
      for(var i=0;i<5;i++){
          if(i<rate){
              document.getElementById((i+1)).style.color="yellow";
          }
          else{
              document.getElementById((i+1)).style.color="black";
          }
      }
  }