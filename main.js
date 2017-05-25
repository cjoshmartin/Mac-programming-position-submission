$(document).ready(function(){
  var data =[]; // made it an array instead of a json object because it is easier to pull data out

  $('#submit').on("click",function(){
      data[0]= $('#name').val();
      data[1]= $('#email').val();
      data[2]=$('#phone').val();
      data[3]=$('#message').val();
      console.log(data);
    if(data[0].length >0 && data[1].length > 0 && data[1].indexOf('@') > -1 && data[3].length >0) {
       $('.form-group').fadeOut();
       $('#submit').fadeOut();
       $(".form-content").html("<p>name: "+data[0]+"</p> <br><p> Email: " +data[1]+"</p><br><p>Phone # : "+data[2]+"</p> <br> <p> message: "+ data[3]);}
    else{
      $("body").prepend('<div class="alert alert-warning"><strong>Warning!</strong> please check the how you filled the fields</div>').fadeIn();
      $(".alert-warning").delay(1000).fadeOut();
    }
   });
});  
