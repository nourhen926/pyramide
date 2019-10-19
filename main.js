console.log('salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ?');

do {

var n=window.prompt("donner le nombre d'etages");
console.log(n);
}while(n>25 || n<1);

	console.log(" \n");
	console.log('Voici la pyramide :');
console.log("\n");


var output="";
    for (var i = 0; i <n; i++) {
    var myspace = "";   
    for(let s = 0; s <(n-i-1); s++) {
        myspace += " ";
    }
        for (var j = 1; j <= 2*i + 1; j++) {
            output+="#";

        }
        console.log(myspace+output);
        output="";
        console.log("\n");
    }
