
//function to load rss feed.

  /*  var GoToPlayer = function(url, title){
        
        localStorage.setItem("message_name", title);
       localStorage.setItem("url_to_play", url);
       window.location.href ="player.html";
        
       
        
        };*/




    var Load = function() { 
        
        //show message
        
        //get podcasts
        $.ajax({
   url: 'https://churchsmallgroups.wordpress.com/feed/',
        dataType: 'xml',
      crossDomain: true,
   success: function(data){
            $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);


        
        
        var title = el.find("title").text();
        var link = encodeURIComponent(el.find('enclosure').attr('url'));
        console.log(link)
        
       //  var li = "<li onclick=\"GoToPlayer("+link+"\,"+title+")\">"+title+"<\/li>";
          //  var li = '<li onclick="GoToPlayer(\''+ link+ '\', \''+ title+ '\')" >' + title +'</li>';

       $("#feed").append(li);
        
        
        
    });

   
   
   },
   error : function() {
        $('#status').text('Failed to load podcast feed. Please check your internet connection and try again.');
      },
      complete: function(){
          
               $('#status').hide();
    $("#feed").listview('refresh');
          
      },
   timeout: 1000 //in milliseconds
});};
        
        
        
        
        
        
        






$(document).ready(function(){

    

    Load();
    
   
   



});













