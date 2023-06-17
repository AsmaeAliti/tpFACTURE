var produits = ["avocat",
    "banane",
    "cheflour",
    "cherimoya",
    "dbinjal",
    "falfal",
    "fraise",
    "kiwi",
    "orange",
    "pomme",
    "tomat"
];
var prix = [20, 10, 6, 24, 7, 5, 20, 10, 3, 10, 9];
var imgs = ["avocat.jpg",
    "banane.jpg",
    "cheflour.jpg",
    "cherimoya.jpg",
    "dbinjal.jpg",
    "falfal.jpg",
    "fraise.jpg",
    "kiwi2.jpg",
    "orange.jpg",
    "pomme.jpg",
    "tomat.jpg"];
function afficher() {
    var tt = "<div class='row'>"
    var chercher = document.getElementById("rechercher").value;
    chercher.toLowerCase();
    for (i = 0; i <= produits.length - 1; i++) {
        if (chercher.length > 0) {
            tt = tt + "<div class='col-auto m-4 text-center myCard' onclick='ajouter(this)'>"
            tt = tt + "<img src='images/" + imgs[i] + "' class='myImage' style='width:120px;height:120px;display:block' >"
            tt = tt + "<div class='prodectsName'>" + produits[i] + "</div>"
            tt = tt + "<div class='badge bg-danger '>" + prix[i] + " dh</div>"
            tt = tt + "<div class='badge bg-danger productsPrice' style='display:none'>" + prix[i] + "</div>"
            tt = tt + "</div>"

        }
        else {
            tt = tt + "<div class='col-auto m-4 text-center myCard' onclick='ajouter(this)'>"
            tt = tt + "<img class='myImage' src='images/" + imgs[i] + "'>"
            tt = tt + "<div class='prodectsName'>" + produits[i] + "</div>"
            tt = tt + "<div class='badge bg-danger '>" + prix[i] + " dh</div>"
            tt = tt + "<div class='badge bg-danger productsPrice' style='display:none'>" + prix[i] + "</div>"
            tt = tt + "</div>"
        }
    }
    document.getElementById("place").innerHTML = tt
}
function ajouter(thisOne){
    var myText = $(thisOne).closest(".myCard")
    var nom = $(myText).find(".prodectsName").text();
    var price = $(myText).find(".productsPrice").text();
    // var tablBody = $("#tabBody")
    var ligne = document.createElement("tr")
    ligne.innerHTML = `<td>`+nom+`</td>
        <td class='fprice'>`+price+`</td>
        <td>
            <input type='number' value='1' class='form-control' id='qte'>
        </td>
        <td class='total'></td>`
    $("#tabBody").append(ligne)
    calculerTotal()

}
var prices  = []
function calculerTotal(){
    var quantiteProdui
    $(".fprice").each(function(){
        var price = $(this).text()
        prices.push(price)
        for (i=1;i<=prices.length;i++){
            for(var elt)
        }
        var tr = $(this).closest("tr")
        var quantite = $(tr).find("#qte").val()
        $(tr).find(".total").text(price*quantite)
        $("#totalQuantite").text(quantiteProdui)
    })

}