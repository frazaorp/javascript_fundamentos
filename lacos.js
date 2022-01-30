/*var km; 
var revisao=3
for(km=0; km<revisao; km++){
    console.log("apenas " + km + "kms então pode rodar");
}
*/

var alunos=[
    [6,7,8,6],
    [8,5,6,7],
    [10,6,8,9]
]
var nota=0;
for ( var i=0; i<alunos.length;i++){
    
    nota=0
    var aluno=alunos[i]
    console.log(`Aluno ${i + 1} : ${aluno}`);

    for( c=0; c <aluno.length; c++){
        nota+=aluno[c]; 
    }
    
    media = nota/4;

    if(media >=7){
        resultado="aprovado";
    }else {
        resultado="reprovado";
    }
    console.log("Media "+ media + " - " + resultado);        
}