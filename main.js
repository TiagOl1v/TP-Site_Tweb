var lastScroolTop=0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
if(scrollTop > lastScroolTop){
    navbar.style.top="-80px";
}else{
    navbar.style.top="0"
}
lastScroolTop = scrollTop;





const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})




})


        /*----------------------Variaveis do carro -------------------------*/
        var zona_para_desap = document.querySelector('#quase');
        const marca1 = document.getElementById('Marca-do-carro');
        const modelo2 = document.getElementById('Modelo-do-carro');
        const preco_inicio =  document.getElementById('Preço-inicial');
        const Ano_da_Matricula = document.getElementById('Ano-matricula');
        const Numero_km = document.getElementById('Quilometros-carro');
  
      /*----------------------Para o Valor do carro -------------------------*/
        const carro1 = document.querySelector("#Carro_mb");
        const carro2 = document.querySelector("#Carro_b");
        const carro3 = document.querySelector("#Carro_m");
         const zona_preco_c = document.querySelector('#venda-carros');
         const valor_escolhido = document.querySelector("#valor-escolhido");
             /*----------------------"Prints" no ecra -------------------------*/
  
        const printModelos = document.getElementsByClassName("print-modelo");
        const printMarcas = document.getElementsByClassName("print-marca");
        const printMatricula = document.getElementsByClassName("print-matricula");
        const printKM = document.getElementsByClassName("print-km");
        var zona_banco = document.querySelector('#bancos');
        var zona_fina = document.querySelector('#part-financiamento-none')
     /*-------------------------------------Para o financiamento----------------------------------------------*/
        const printvalor_f_carro = document.getElementsByClassName("valor-final-carro");
        const printvalor_emprestimo_banco = document.getElementsByClassName("valor-emprestimo-banco");
        const printduracao_meses = document.getElementsByClassName("duracao-meses");
        const printaxajuros1 = document.getElementById("taxa-juro1");
        const printaxajuros2 = document.getElementById("taxa-juro2");
        const printaxajuros3 = document.getElementById("taxa-juro3");
        const printaxajurospread1 = document.getElementById("taxa-spread1");
        const printaxajurospread2 = document.getElementById("taxa-spread2");
        const printaxajurospread3 = document.getElementById("taxa-spread3");
        const printvalorinicial_banco = document.getElementsByClassName("valor-entrada-inicial");
        const printvalormensal1 = document.getElementById("valor-apagar-mensal1");
        const printvalormensal2 = document.getElementById("valor-apagar-mensal2");
        const printvalormensal3 = document.getElementById("valor-apagar-mensal3");
 
         /*----------------------Funcao do valor do carro -------------------------*/   
      function fmodelo_carro(){  
          if(checkvalidity1(preco_inicio, Ano_da_Matricula)==1){
  
      }
  
  
      else{
        zona_banco.style.display = "none";
         if(checkvalidity2()==1){
 
         }
      else{    
         zona_preco_c.style.display = "flex";
         
        for (const modelo of printModelos) {
          modelo.innerHTML = marca1.value;
        }
      
        for (const marca of printMarcas) {
          marca.innerHTML = modelo2.value;
        }
  
        for (const Matricula of printMatricula) {
          Matricula.innerHTML = Ano_da_Matricula.value;
        }
  
        for (const km of printKM) {
          km.innerHTML = Numero_km.value+' km';
        }
 
        carro1.textContent = Number(PrecoCarro1(preco_inicio)).toFixed(2) + '€';
        carro2.textContent = Number(PrecoCarro2(preco_inicio)).toFixed(2) + '€ ';
        carro3.textContent = Number(PrecoCarro3(preco_inicio)).toFixed(2) + '€';
        
        }
        
      }
  }
 
      /*----------------------1º parte do calculo do carro -------------------------*/
      function coeficientes(Matricula, km_carro){
      let calc_Matricula;
      let calc_km_carro;
      let calc_total;
      let anos=2022-Matricula;
      let anos2=0
  
      if(anos>=10){
          anos2 = anos-10;
          anos = anos-anos2;
      }
  
       if(km_carro.value<=3000){
           calc_km_carro = 1;
       }
       if(3000>km_carro.value<=7000){
          calc_km_carro = 0.95;
      }
      if(km_carro.value > 7000){
          calc_km_carro = 0.9;
      }
      
      calc_total = ((1-(anos*0.05+0.04*anos2))*calc_km_carro);
  
      return calc_total;
  
  
  }
  
      /*----------------------  2º parte do calculo  -------------------------*/
  function PrecoCarro1(preco_inicio){
      const coeficiente_total=coeficientes(Ano_da_Matricula.value,Numero_km);
      const p_carro1 = ((preco_inicio.value)*coeficiente_total)*1.1;;
     
      return (p_carro1);
   
  };
  
  function PrecoCarro2(preco_inicio){
      const coeficiente_total=coeficientes(Ano_da_Matricula.value,Numero_km);
      const p_carro2 = (preco_inicio.value)*coeficiente_total ;;
     
      return (p_carro2);
   
  };
  function PrecoCarro3(preco_inicio){
      const coeficiente_total=coeficientes(Ano_da_Matricula.value,Numero_km);
      const p_carro3 = ((preco_inicio.value)*coeficiente_total)*0.6 ;;
     
      return (p_carro3); 
   
  };
 
 
      /*---------------------- Financiamento -------------------------*/
 
 
   const rangeInput = document.getElementById('rangeInput1');
   const rangeValue = document.getElementById('rangeValue');
 
   rangeInput.addEventListener('input', function() {
     rangeValue.textContent = rangeInput.value + ' €' ;
   });
 
 
   const rangeInput2 = document.getElementById('rangeInput2');
   const rangeValue2 = document.getElementById('anos-emp');
 
   rangeInput2.addEventListener('input', function() {
     rangeValue2.textContent = rangeInput2.value;
   });
 


   function spread_al() {
    
    return  Number(Math.random() * (5 - 1) + 1).toFixed(2);
  }


 
 /*---------------------- Calc Financiamento -------------------------*/
     
 function financiamento_do_carro(){


         if(checkvalidity3(rangeInput,valor_escolhido)==1){
 
         }   
 
     else
     {

      if (zona_banco.style.display === "none") {
        zona_banco.style.display = "block";
      } else {
        zona_banco.style.display = "none";
      }
        
 
         for (const valor_car of printvalor_f_carro) {
          valor_car.innerHTML = Number(valor_escolhido.value).toFixed(2);    
        }
 
         const emprestimo_banco = valor_escolhido.value - rangeInput.value ;  
      
       for (const emp_car of printvalor_emprestimo_banco) {
          emp_car.innerHTML = Number(emprestimo_banco).toFixed(2);
        }

        const total_meses = rangeInput2.value*12

        for (const emp_meses of printduracao_meses) {
          emp_meses.innerHTML = total_meses;
        }
        
        let spread01 = Number(spread_al());
        let spread02 = Number(spread_al());
        let spread03 = Number(spread_al());

        let taxa1 = spread01 + 0.75;
        let taxa2 = spread02 + 0.75;
        let taxa3 = spread03 + 0.75;

        printaxajurospread1.textContent = spread01;
        printaxajurospread2.textContent = spread02;
        printaxajurospread3.textContent = spread03;

        printaxajuros1.textContent = taxa1;
        printaxajuros2.textContent = taxa2;
        printaxajuros3.textContent = taxa3;


         const emprestimo_banco2 = rangeInput.value ;  
      
       for (const emp_car111 of printvalorinicial_banco) {
          emp_car111.innerHTML = Number(emprestimo_banco2).toFixed(2);
        }

        printvalormensal1.textContent=Number(calc_prest1(taxa1,emprestimo_banco,total_meses)).toFixed(2);

        printvalormensal2.textContent=Number(calc_prest1(taxa2,emprestimo_banco,total_meses)).toFixed(2);
        
        printvalormensal3.textContent=Number(calc_prest1(taxa3,emprestimo_banco,total_meses)).toFixed(2);
      }

      }   

      function calc_prest1(taxa1,emprestimo_banco,total_meses){
        let i = taxa1/100;
        return emprestimo_banco*((((1+i)**total_meses)*i)/(((1+i)**total_meses)-1));
      }
  
 
 
     /*---------------------- Validacao de dados -------------------------*/
  
  function checkvalidity1(preco_inicio,Ano_da_Matricula ){
      let num;
     if(preco_inicio.value<500 || Ano_da_Matricula.value<1940 || Ano_da_Matricula.value>2022  || Numero_km.value<0  ){
         alert("Algum dos dados inseridos está incorreto")
         num=1;
         
     }
     return num;
  };  
 
  function checkvalidity2(){
              let num;
            if(PrecoCarro1(preco_inicio)<500 || PrecoCarro2(preco_inicio)<500 || PrecoCarro3(preco_inicio)<500  ){
                alert("O carro tem um preço muito baixo, escolha outros valores")
         num=1;
         
     }
     return num;
  };
 
  function checkvalidity3(rangeInput,valor_escolhido){
      let num;
     if(valor_escolhido.value < rangeInput.value){
         alert("O valor escolhido é muito alto")
         num=1;
         
     }
     return num;
  };
  
 
      /*----------------------Escolha do estado do carro -------------------------*/
  function F_d1() {
     alert("Você selecionou o muito bom estado");
     valor_escolhido.textContent = 'Preço do carro: '+ Number(PrecoCarro1(preco_inicio)).toFixed(2) + '€';
     valor_escolhido.value = PrecoCarro1(preco_inicio);
     zona_fina.style.display = "block";
   }  
   
   function F_d2() {
     alert("Você selecionou o bom estado");
     valor_escolhido.textContent = 'Preço do carro: ' + Number(PrecoCarro2(preco_inicio)).toFixed(2) + '€';
     valor_escolhido.value = PrecoCarro2(preco_inicio);
     zona_fina.style.display = "block";
   }
 
   function F_d3() {
     alert("Você selecinou o mau estado");
     valor_escolhido.textContent = 'Preço do carro: ' + Number(PrecoCarro3(preco_inicio)).toFixed(2) + '€';
     valor_escolhido.value = PrecoCarro3(preco_inicio);
     zona_fina.style.display = "block";
   }
 
function desaparece(){
 
  zona_para_desap.style.display="none";



}