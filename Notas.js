function Media(RN,RP,LN,LP,HN,HP,EN,EP,NN,NP){
let rn = ler_numero("RN");
let rp = ler_numero("RP");
let ln = ler_numero("LN");
let lp = ler_numero("LP");
let hn = ler_numero("HN");
let hp = ler_numero("HP");
let en = ler_numero("EN");
let ep = ler_numero("EP");
let nn = ler_numero("NN");
let np = ler_numero("NP");

let sp = somatoriaDosPesos(rp,lp,hp,ep,np);
var cn = calculoNotas(rn,ln,hn,en,nn,rp,lp,hp,ep,np,sp);
console.log(sp);
var cn = cn/sp;
let result = cn.toFixed(2);
console.log(result);
document.getElementById("saida").innerHTML =  result;
}


function ler_numero(elemento){
  return Number(document.getElementById(elemento).value);
}

function calculoNotas(rn,ln,hn,en,nn,rp,lp,hp,ep,np,sp){
cn = (rn*rp)+(ln*lp)+(hn*hp)+(en*ep)+(nn*np);
return cn
}


function somatoriaDosPesos(rp,lp,hp,ep,np){
let sp = rp+lp+hp+ep+np;
return sp
}