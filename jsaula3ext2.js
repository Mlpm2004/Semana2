
function relaciona(){
        fetch("https://amapalanches.com/includes/v1/getTodas.php").then(function(data){
            return data.json();
            }).then(function(json){
                for (i=0;i<=json.length;i++){
                var titulo = json[i].titulo;
                var subtitulo = json[i].subTitulo;
                var lat = json[i].lat;
                var long = json[i].lng;
                var html = "<section >"+titulo+"</section><section >"+subtitulo+"</section><section >"+lat+"</section><section >"+long+"</section>";
                body.insertAdjacentHTML("beforeend",html)
                }
            })
         
}