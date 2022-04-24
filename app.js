//Logica ~~~ 



const Mostrador = document.querySelector('#mostradorDinamico'); 
let Ranges = document.querySelector('#range'); 
const btn = document.querySelector('#botao'); 
const user = document.querySelector('#userSenha'); 
const InputEn = document.querySelector('#secao '); 
const capturar = Ranges.getAttribute('min'); 
console.log(capturar); 
Mostrador.innerHTML  = capturar; 
const  GeradordeSenhas = function () {
    this.rangv = Ranges.value 
    this.user = user ;
    let Result = ''
    let senhas = 'abcdefghijklmnopqrstwyxzuABCDEFGHIJLKMNOPQRSTWYUXZ0123456789'; 
         
    this.gerarSenha = function () {
       
        for(let i = 0; i < this.rangv; i++ ){
         
            let calculoRandomico = Math.floor(Math.random() * senhas.length);
            Result  += senhas.charAt(calculoRandomico); 

        }
       
        return Result;  
    
    }

    this.exibirSenha = function () {

        let mostrar = this.gerarSenha(); 

        this.user.innerHTML = mostrar; 
        
    }

}


function exibirMostrador() {
    
    
    Mostrador.innerHTML = Ranges.value; 


}


function gerandoSenha () {
    InputEn.classList = 'active'; 
    let acao = new GeradordeSenhas(); 
   
        acao.exibirSenha();
   
    
}

function exibirSenhaUsuario(){

    let AcaoDois = new GeradordeSenhas()

    AcaoDois.exibirSenha()
}

btn.addEventListener('click',gerandoSenha )