
//function to load rss feed.

    var GoToPlayer = function(url, title){
        
        alert(url);
        
        console.log(url);
        
        };




    var Load = function() { 
        
        //show message
        
        //get podcasts
        $.ajax({
   url: 'http://www.cfmc.org.uk/podcast.xml',
        dataType: 'xml',
      crossDomain: true,
   success: function(data){
            $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);


        
        
        var title = el.find("title").text();
        var link = encodeURIComponent(el.find('enclosure').attr('url'));
        
        
         var li = "<li onclick=\"GoToPlayer('"+link+"')\">"+title+"<\/li>";

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
    GoToPlayer("myurl");
   
   



});













