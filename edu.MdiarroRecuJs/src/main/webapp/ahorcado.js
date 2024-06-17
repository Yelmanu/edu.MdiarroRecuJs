var letras = [];
var palabra = [];
var palabraAdivinada = [];
//funcion para introducir la palabra a adivinar
function introducirPalabra(){
	palabra = prompt("Introduce una palabra");
	palabraAdivinada = palabra.split("");
	palabraAdivinada.fill("x")
	palabra = palabra.split("");
	letraIntroducida = [];
	mostrarPalabraEncriptada()
}
//funcion para pedirle al cliente que introduzca una letra
function pedirLetra(){
	let letraNueva;
	do{
		letraNueva=prompt("introduce una letra")
	}while(Number(letraNueva)||letraNueva.length>1||repetida(letraNueva)||letraNueva=="")
	letras.push(letraNueva);
	comprobarLetra(letraNueva);
}
//funcion para comprobar la letra introducida por el cliente
function comprobarLetra(letras){
	for(let i=0;palabra.length>i;i++){
		if(palabra[i] == letras){
			alert("Has acertado")
			palabraAdivinada[i]=letras;
			mostrarPalabraEncriptada()
		}else if(!palabra.some((valor)=>valor=="x")){
			alert("has ganado, la palabra era: "+palabra.join(""));
		}else if(!palabra.some((valor)=>valor==letras)){
			alert("has fallado");
		}
	}
}
//funcion para mostrar la palabra encriptada
function mostrarPalabraEncriptada() {
  let texto=""
  palabraAdivinada.forEach(function (i) {
		if (i != "*"){
			texto = texto +i 
		}
		else
			texto = texto + "*"
	 })
	 document.getElementById("palabra").innerHTML=(texto)
}
//funcion para comprobar si la letra esta repetida
function repetida(letra) {
	return letras.some((valor) => letra == valor)
}
