const texto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar() {
    const textoEncriptado = encriptar(texto.value);
    mensaje.value = textoEncriptado;
    texto.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(fraseEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(fraseEncriptada.includes(matrizCodigo[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            
        }
    }    
    return fraseEncriptada;
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(texto.value)
    mensaje.value = textoDesencriptado
    texto.value = "";
}

function desencriptar(fraseDesencriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(fraseDesencriptada.includes(matrizCodigo[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return fraseDesencriptada
}


