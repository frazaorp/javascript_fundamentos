/* função de média */
function calcularMedia(notas){
    let soma=0;
    for(c=0;c<notas.length;c++){
        soma+=notas[c];
    }
     
    media=soma/notas.length;
    return media;
}

function aprovacao(media){
    let condicao = media >= 7 ?"Aprovado":"Reprovado";
    return condicao
}

console.log("Media: " + calcularMedia([8,9])+" - "+ aprovacao(calcularMedia([8,9]) ) );

console.log("Media: " + calcularMedia([8,9,7.5])+" - "+ aprovacao(calcularMedia([8,9,7.5]) ) );

console.log("Media: " + calcularMedia([8,9,8,10])+" - "+ aprovacao(calcularMedia([8,9,8,10]) ) );

