let div_antes = document.querySelector(".antes");
let div_despues = document.querySelector(".despues");
let parrafo = document.querySelector(".parrafo");
let txtArea = document.getElementById("texto_a_encriptar");
let b_copiar = document.getElementById("b_copiar");

function Cambiar_escena(){
	b_copiar.innerHTML = "Copiar"
	div_antes.classList.add("hide");
	div_despues.style.display = 'flex';
}

function Encriptar(){
	Cambiar_escena();
	let texto = txtArea.value;
	let tamaño = texto.length;
	let textoEncriptado = "";
	for(let i = 0; i<tamaño; i++){
		if(texto[i] == "a"){
			textoEncriptado += "ai";
		}else if(texto[i] == "e"){
			textoEncriptado += "enter";
		}else if(texto[i] == "i"){
			textoEncriptado += "imes";
		}else if(texto[i] == "o"){
			textoEncriptado += "ober";
		}else if(texto[i] == "u"){
			textoEncriptado += "ufat";
		}else{
			textoEncriptado += texto[i];
		}
	}
	parrafo.innerHTML = textoEncriptado;
}

function Desencriptar(){
	Cambiar_escena();
	let texto = txtArea.value;
	let tamaño = texto.length;
	let textoDesencriptado = "";
	let i = 0
	while(true){
		if(texto[i]+texto[i+1]=="ai"){
			textoDesencriptado += "a";
			i+=2;
		}else if(texto[i]+texto[i+1]+texto[i+2]+texto[i+3]+texto[i+4]=="enter"){
			textoDesencriptado += "e";
			i+=5;
		}else{
			let cadena = texto[i]+texto[i+1]+texto[i+2]+texto[i+3];
			if(cadena=="imes"){
				textoDesencriptado += "i";
				i+=4;
			}else if(cadena=="ober"){
				textoDesencriptado += "o";
				i+=4;
			}else if(cadena=="ufat"){
				textoDesencriptado += "u";
				i+=4;
			}else{
				textoDesencriptado += texto[i];
				i++;
			}
		}
		if(i > tamaño-1){
			break;
		}
		
	}
	parrafo.innerHTML = textoDesencriptado;
}

function copiar(){
	try{
		navigator.clipboard.writeText(parrafo.innerHTML)
		b_copiar.innerHTML = "Copiado"
	}catch(e){
		alert("Error al Copiar");
	}
}

function Limpiar(){
	div_antes.classList.remove("hide");
	div_despues.style.display = 'none';
	txtArea.value = "";
}