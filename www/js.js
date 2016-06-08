
//function to load player.

    var GoToPlayer = function(url, title){
        
        localStorage.setItem("message_name", title);
       localStorage.setItem("url_to_play", url);
       window.location.href ="player.html";
        };

//function to load life group notes.

    var GoToNotes = function(title, content){
        
        localStorage.setItem("notes_name", title);
       localStorage.setItem("notes_content", content);
       window.location.href ="lg_view.html";
      
      
      };



//function to load sermon feed

    var LoadSermon = function() { 
        $('#feed').empty();
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
        
        
       //  var li = "<li onclick=\"GoToPlayer("+link+"\,"+title+")\">"+title+"<\/li>";
            var li = '<li onclick="GoToPlayer(\''+ link+ '\', \''+ title+ '\')" >' + title +'</li>';

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
        //end sermon function
        
//function to load life group notes feed
            var LoadNotes = function() { 
        $('#feed').empty();
        //show message
        
        //get podcasts
        $.ajax({
   url: 'https://churchsmallgroups.wordpress.com/feed/',
        dataType: 'xml',
      crossDomain: true,
   success: function(data){
            $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);


        
        
        var title = el.find("title").first().text();
        var content = encodeURIComponent(el.find("encoded").text());
        var link = encodeURIComponent(el.find('enclosure').attr('url'));
        
        
        
        
      
            var li = '<li onclick="GoToNotes(\''+ title+ '\', \''+ content+ '\')" >' + title +'</li>';

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

//end lg feed.
        
        
        






$(document).ready(function(){

    

    LoadSermon();
    
   
   



});













