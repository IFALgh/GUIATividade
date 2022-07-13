function questao1() {
    var arrayList=[];
    const contador= 0;
    for (let i = 0; i < 5; i++) {
        let numero=prompt("Insira um número: ");
        arrayList.push(numero);
      }
    
    alert("Maior numero "+Math.max(...arrayList));
    alert("Menor numero "+Math.min(...arrayList));
    
}
function questao2() {
    for (let i = 0; i < 5; i++) {
        var vogal=prompt("Insira uma letra: ");
        if(vogal == 'a' || vogal == 'A'|| vogal == 'e' || vogal == 'E'|| vogal == 'i' || vogal == 'I' || vogal == 'o' || vogal == 'O' || vogal == 'u' || vogal == 'U'){
            alert("1");
        }
        else{
            alert("0");
        }
      }
}
 function questao3() {
    var intervalo = [];
    var inicio=prompt("Insira o primeiro número do intervalo: ");
    const final=prompt("Insira o número final do intervalo: ");
    // while (inicio < final) {
    //     intervalo.push(inicio);
    //     inicio=inicio+1;
    // }
    for (inicio; inicio <= final; inicio++) {
        intervalo.push(inicio);
    }
    var newIntervalor=[]
    var somador=0;
    for (const key in intervalo) {
        if(intervalo[key]%2 == 0){
            newIntervalor.push(intervalo[key])
            somador=somador+intervalo[key]
        }
    }
    alert("intervalor:"+newIntervalor+"="+somador) 
    
    
    
 }

 function questao4() {
    var arrayList=[];
    const contador= 0;
    for (let i = 0; i < 3; i++) {
        let numero=prompt("Insira um valor: ");
        arrayList.push(numero);
      }
    
    alert(arrayList.sort(function(a, b){return a - b}));

    
 }

 function questao5() {
    for (let i = 0; i < 5; i++) {
        var letra=prompt("Insira um número: ");
        if(Math.sign(letra) == 1){
            alert("true");
        }
        else if(Math.sign(letra) == -1){
            alert("false");
        }
        else{
            alert("Por favor, coloque um número diferente de 0")
        }
      }
    
}

function questao6() {
    for (let i = 0; i < 5; i++) {
        var numero=prompt("Insira um valor: ");
        if(numero %2 == 0){
            alert("true");
        }
        else{
            alert("false")
        }
      }
    
}