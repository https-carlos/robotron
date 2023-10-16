let valorbraco = 0;
let valorblindagem = 0;
let valornucleos = 0;
let valorpernas = 0;
let valorfoguetes = 0;

//AUMENTAR OS VALORES
function aumentarbraco() {
    if (valorbraco < 10) { 
        valorbraco += 1;
        let valorbracosrt = document.getElementById("contador-bracos");
        valorbracosrt.value = valorbraco;
    }
}

function aumentarblindagem() {
    if (valorblindagem < 10) { 
        valorblindagem += 1;
        let valorblindagemsrt = document.getElementById("contador-blindagem");
        valorblindagemsrt.value = valorblindagem;
    }
}

function aumentarnucleos() {
    if (valornucleos < 10) { 
        valornucleos += 1;
        let valornucleossrt = document.getElementById("contador-nucleos");
        valornucleossrt.value = valornucleos;
    }
}

function aumentarpernas() {
    if (valorpernas < 10) { 
        valorpernas += 1;
        let valorpernassrt = document.getElementById("contador-pernas");
        valorpernassrt.value = valorpernas;
    }
}

function aumentarfoguetes() {
    if (valorfoguetes < 10) { 
        valorfoguetes += 1;
        let valorfoguetessrt = document.getElementById("contador-foguetes");
        valorfoguetessrt.value = valorfoguetes;
    }
}

document.getElementById("aumentar-bracos").addEventListener("click", aumentarbraco);
document.getElementById("aumentar-blindagem").addEventListener("click", aumentarblindagem);
document.getElementById("aumentar-nucleos").addEventListener("click", aumentarnucleos);
document.getElementById("aumentar-pernas").addEventListener("click", aumentarpernas);
document.getElementById("aumentar-foguetes").addEventListener("click", aumentarfoguetes);

// DIMINUIR OS VALORES
function diminuirbraco() {
    if (valorbraco <= 10 && valorbraco > 0) { 
        valorbraco -= 1;
        let valorbracosrt = document.getElementById("contador-bracos");
        valorbracosrt.value = valorbraco;
    }
}

function diminuirblindagem() {
    if (valorblindagem <= 10 && valorblindagem > 0) { 
        valorblindagem -= 1;
        let valorblindagemsrt = document.getElementById("contador-blindagem");
        valorblindagemsrt.value = valorblindagem;
    }
}

function diminuirnucleos() {
    if (valornucleos <= 10 && valornucleos > 0) { 
        valornucleos -= 1;
        let valornucleossrt = document.getElementById("contador-nucleos");
        valornucleossrt.value = valornucleos;
    }
}

function diminuirpernas() {
    if (valorpernas <= 10 && valorpernas > 0) { 
        valorpernas -= 1;
        let valorpernassrt = document.getElementById("contador-pernas");
        valorpernassrt.value = valorpernas;
    }
}

function diminuirfoguetes() {
    if (valorfoguetes <= 10 && valorfoguetes > 0) { 
        valorfoguetes -= 1;
        let valorfoguetessrt = document.getElementById("contador-foguetes");
        valorfoguetessrt.value = valorfoguetes;
    }
}


document.getElementById("diminuir-bracos").addEventListener("click", diminuirbraco);
document.getElementById("diminuir-blindagem").addEventListener("click", diminuirblindagem);
document.getElementById("diminuir-nucleos").addEventListener("click", diminuirnucleos);
document.getElementById("diminuir-pernas").addEventListener("click", diminuirpernas);
document.getElementById("diminuir-foguetes").addEventListener("click", diminuirfoguetes);
