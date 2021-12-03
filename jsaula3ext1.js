
var body = document.getElementsByTagName("body")[0];
var array = [1,2,3,4,5,6,7,8,9,10];
var satisfacao =0;
var teste=true; 
while (teste) {
    satisfacao = window.prompt("Digite um número de 1 a 10 :");
    for (i=0;i<=9;i++) {
        if (array[i]==satisfacao) {
            teste=false;
            break;
        }
    }
    if (teste) alert("Entre somente com números de 1 a 10");
} 
for (let i = 1; i <= satisfacao; i++){
    fetch("https://dog.ceo/api/breeds/image/random").then(function(data){
        return data.json();
        }).then(function(json){
            var resultado = json.message;;
            var html = "<section style='background-Image:url("+resultado+");background-repeat: no-repeat;background-size:contain'>cao</section>";
            body.insertAdjacentHTML("beforeend",html)
        })
    fetch("https://api.thecatapi.com/v1/images/search").then(function(data){
        return data.json();
        }).then(function(json){
            var res=json[0].url;
            var html = "<section style='background-Image:url("+res+");background-repeat: no-repeat;background-size:contain'>gato</section>";
            body.insertAdjacentHTML("beforeend",html)
        })
}
