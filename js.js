var produits = ["avocat","banane","Cheflour","Cherimoya","dbinjal","btata","falfal","fraise","kiwi","orange","pomme","tomat"]
var prix = [20,10,6,24,7,5,20,10,20,3,10,9]
var imgs=[
    "avocat.jpg",
    "banane.jpg",
    "Cheflour.jpg",
    "Cherimoya.jpg",
    "dbinjal.jpg",
    "btata.jpg",
    "falfal.jpg",
    "fraise.jpg",
    "kiwi.jpg",
    "orange.jpg",
    "pomme.jpg",
    "tomat.jpg"
]
function afficher(){
    var rechercher=document.getElementById("chercher").value ;
    rechercher.toLowerCase()
    var tt="<div class='row'>";
    for (i=0;i<=produits.length-1;i++){
        if(rechercher.length>0){
            if(produits[i].toLowerCase().indexOf(rechercher) !== -1){
                tt=tt+"<div class='carta col-auto'>";
                tt=tt+"<img src='"+imgs[i]+"' onclick='ajouterPr(this)'  class='myimg'>";
                tt=tt+"<span class='products_name'>"+produits[i]+"</span><br>"
                tt=tt+"<span class='badge bg-danger products_price'>"+prix[i]+"</span><br>"
                tt=tt+"</div>";
            }
            
        }
        else{
            tt=tt+"<div class='col-auto carta'>";
            tt=tt+"<img src='"+imgs[i]+"' onclick='ajouterPr(this)' class='myimg'>";
            tt=tt+"<span class='products_name'>"+produits[i]+"</span><br>"
            tt=tt+"<span class='badge bg-danger products_price'>"+prix[i]+"</span><br>"
            tt=tt+"</div>";
        }
    }
   
    place = document.getElementById("nzel");
    place.innerHTML= tt;
}
function ajouterPr(hadi){
    var myText=$(hadi).closest(".carta")
    var nom=$(myText).find(".products_name").text()
    var price=$(myText).find(".products_price").text()
    var tbody=$("#Tbody")
    var ligne = document.createElement("tr")
    ligne.innerHTML=`<tr>
    <td>${nom}</td>
    <td>${price}</td>
    <td><input type="number" class="form-control" value="1" style="width:50px"></td>
    <td id="Total"></td>
    </tr>`

    tbody.append(ligne)
}