//console.log("ayhagaa");
var qoute = [
    { qoute: "“Be yourself; everyone else is already taken.”", auther: "Oscar Wilde" },
    { qoute: "“So many books, so little time.”", auther: "Frank Zappa" },
    { qoute: "“A room without books is like a body without a soul.”", auther: "Marcus Tullius Cicero" },
    { qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", auther: "Bernard M. Baruch" },
    { qoute: "“You only live once, but if you do it right, once is enough.”", auther: "Mae West" },
    { qoute: "“A friend is someone who knows all about you and still loves you.”", auther: "Elbert Hubbard" }

];
var arabicQuote = [
    { qoute: ".وَالناسُ يَجمَعُهُم شَملٌ وَبَينَهُم في العَقلِ فَرقٌ، وَفي الآدابِ، وَالحَسَب", auther: "الإمام الشافعي" },
    { qoute: "فَاِهرُب بِنَفسِكَ وَاِستَأنِس بِوِحدَتِها تَبقى سَعيداً إِذا ما كُنتَ مُنفَرِدا", auther: "الإمام الشافعي" },
    { qoute: "وَكُن في الطَريقِ عَفيفَ الخُطا شَريفَ السَماعِ كَريمَ النَظَر", auther: "أحمد شوقي" }

]
//  var randomQuote = Math.ceil((Math.random() * qoute.length));



//console.log(randomqoute);

function getqoute() {
    var randomQuote = Math.floor(Math.random() * qoute.length);
    var quoteEl = document.getElementById("quote");
    var authorEl = document.getElementById("auther");

    quoteEl.dir = "ltr";
    authorEl.dir = "ltr";
    document.getElementById("quote").innerHTML = qoute[randomQuote].qoute;
    document.getElementById("auther").innerHTML = qoute[randomQuote].auther;
    // console.log(randomQuote);
}



function GetArabicQuote() {
    var randomArabicQuote = Math.floor(Math.random() * arabicQuote.length);
    var quoteEl = document.getElementById("quote");
    var authorEl = document.getElementById("auther");
    // var special=document.getElementById("special");
    // special.style.backgroundColor= "#4c110e";
    quoteEl.dir = "rtl";
    authorEl.dir = "rtl";
    document.getElementById("quote").innerHTML = arabicQuote[randomArabicQuote].qoute;
    document.getElementById("auther").innerHTML = arabicQuote[randomArabicQuote].auther;
    console.log(randomArabicQuote);
    //console.log(arabicQuote[randomArabicQuote].qoute);

}