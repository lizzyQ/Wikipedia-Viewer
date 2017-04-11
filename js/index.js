$(document).ready(function(){
  $("#search").click(function(){
       $.ajax({
            url:'https://en.wikipedia.org/w/api.php',
            data: {
                  action: 'query',
                  list: 'search',
                  srsearch: $("input[name=keyword]").val(),
                  srprop:'snippet',
                  format: 'json'
            },
            dataType: 'jsonp',
            success: processData
        });
        function processData(data) {
          var html = "";
          var url ="";
          for( var i=0; i< data.query.search.length; i++){
            url= "https://it.wikipedia.org/wiki/" + data.query.search[i].title;
            html += "<a target='_blank' href='" + url + "'>"
            html += "<li><h5>" + data.query.search[i].title;
            html += "</h5><p>" + data.query.search[i].snippet;
            html += "</p></li></a>"
          }

          $(".output").html(html);
        }
  });

});
