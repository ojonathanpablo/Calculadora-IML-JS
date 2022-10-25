
//  Capiturou o formulario
    const form = document.querySelector('#formulario');
//  Adicionou o evento de submit
    form.addEventListener('submit', function (e){
//      Preveniu o default (não deixa o formulario ser enviado )
        e.preventDefault();
//      Capturou os dados do html para o input
        const inputPeso = e.target.querySelector('#peso');
        const inputaltura = e.target.querySelector('#altura');
//      converteu o input em Number
        const peso = Number(inputPeso.value)
        const altura = Number (inputaltura.value)
//      Seta o resultado 
        if (!peso){
            setResultado('Peso invalido', false);
            return;
        }
        
        if(!altura){
            setResultado('Altura invalido', false);
            return;
        }

//      Função do IMC
        const imc = getImc(peso, altura);
//      Função do Nivel IMC
        const nivelImc = getNivelImc(imc)
//      Função criar mensagem
        const msg = `Seu IMC é:${imc} (${nivelImc})`
//      seta os resultado como verdadeiro
        setResultado(msg, true);

    });

//  
    function getNivelImc(imc){
        // criou um arrey
        const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
        
        if (imc >= 39.9) return nivel[5]
        if (imc >= 34.9) return nivel[4]
        if (imc >= 29.9) return nivel[3]
        if (imc >= 24.9) return nivel[2]
        if (imc >= 18.5) return nivel[1]
        if (imc < 18.5) return nivel[0]
    }
//  Faz o calculo do IMC
    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

// Criar um paragrafo
    function criaP (){
        const p = document.createElement('p');
        return p;
       
    }
//  Set o resultado 
    function setResultado (msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = " ";
        const p = criaP();
        if (isValid){
            p.classList.add('grin-resultado')
        }else {
            p.classList.add('bad-resultado')
        };
        p.innerHTML = msg
        resultado.appendChild(p);
    }



   

