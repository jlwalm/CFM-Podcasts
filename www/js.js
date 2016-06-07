// This is a JavaScript file

$.get('http://www.cfmc.org.uk/podcast.xml', function (data) {
    $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        console.log("------------------------");
        console.log("title      : " + el.find("title").text());
        console.log("Date     : " + el.find("pubdate").text());
        console.log("description: " + el.find("length").text());
        
        
        var title = el.find("title").text();
        
         var li = $("<li><a href='#'>"+title+"</a></li>");

       $("#feed ul").append(li);
        
        
        
    });
});