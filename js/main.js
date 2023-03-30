let nombre = prompt("Hola como estas? Podrias indicarme tu nombre por favor?")

while (nombre == ""){
    nombre = prompt ("Ingrese un nombre por favor")
}
alert (`Hola ${nombre} en esta aplicacion podes ver en que situacion quedaste con cada materia y definir como seguira tu cursado`);

const promedio = (a,b) => ((a+b)/2);
let estadoCalculo1= ""
let estadoAlgebra=""
let estadoFisica1=""
function calculo1 () {
    let parcial1 =parseFloat (prompt("Ingrese la nota de su primer parcial de Calculo 1 por favor"));
    let parcial2 = parseFloat(prompt("Ingrese la nota de su segundo parcial Calculo 1 por favor"));
    let promedio1=promedio(parcial1,parcial2);
    if (parcial1>=7 && parcial2>=7){
        alert(`Felicitaciones aprobaste Calculo 1 😁 con una nota de ${promedio1} 🍻🎉`)
        return estadoCalculo1 = "aprobado"
    }
    else if (parcial1>=4 && parcial2>=4){
        alert(`Felicitaciones regularizaste Calculo 1 😁`)
        return estadoCalculo1= "regular" 
    }
    else {
        alert(`Lamento informarte que no lograste regularizar la materia deberas intentarlo otra vez 😥`)
        return estadoCalculo1= "desaprobado"
    }

        
    }


    function algebra () {
        let parcial1 = parseFloat(prompt("Ingrese la nota de su primer parcial de Algebra por favor"));
        let parcial2 = parseFloat(prompt("Ingrese la nota de su segundo parcial algebra por favor"));
        let promedio1=promedio(parcial1,parcial2);
        if (parcial1>=7 && parcial2>=7){
            alert(`Felicitaciones aprobaste Algebra 😁 con una nota de ${promedio1}  🍻🎉`)
            return estadoAlgebra = "aprobado"
        }
        else if (parcial1>=4 && parcial2>=4){
            alert(`Felicitaciones regularizaste Algebra 😁`)
            return estadoAlgebra= "regular" 
        }
        else {
            alert(`Lamento informarte que no lograste regularizar la materia deberas intentarlo otra vez 😥`)
            return estadoAlgebra= "desaprobado"
        }
   
            
        }
        function fisica1 () {
            let parcial1 = parseFloat(prompt("Ingrese la nota de su primer parcial de Fisica 1 por favor"));
            let parcial2 = parseFloat(prompt("Ingrese la nota de su segundo parcial Fisica 1  por favor"));
            let promedio1=promedio(parcial1,parcial2);
            if (parcial1>=7 && parcial2>=7){
                alert(`Felicitaciones aprobaste Fisica 1 😁  con una nota de ${promedio1} 🎉🍻`)
                return estadoFisica1 = "aprobado"
            }
            else if (parcial1>=4 && parcial2>=4){
                alert(`Felicitaciones regularizaste Fisica 1 😁`)
                return estadoFisica1= "regular" 
            }
            else {
                alert(`Lamento informarte que no lograste regularizar la materia deberas intentarlo otra vez 😥`)
                return estadoFisica1= "desaprobado"
            }   
            }
     calculo1()
     algebra()
     fisica1()

     if (estadoCalculo1=="aprobado" && estadoAlgebra=="aprobado"){
        alert (`vas a poder cursar calculo 2 y calculo 3 💪🤓`)
     }
     else if ((estadoCalculo1=="regular"&&estadoAlgebra=="regular")||(estadoCalculo1=="regular"&&estadoAlgebra=="aprobado")||(estadoCalculo1=="aprobado"&&estadoAlgebra=="regular")){
        alert (`vas a poder cursar calculo 2 💪`)
     }
     else {
        alert ("No vas a poder hacer Calculo 2😢")
     }

    
     if (estadoCalculo1=="aprobado" && estadoFisica1=="aprobado"){
        alert (`vas a poder cursar Fisica 2 y Fisica 3 💪🤓`)
     }
     else if ((estadoCalculo1=="regular"&&estadoFisica1=="regular")||(estadoCalculo1=="regular"&&estadoFisica1=="aprobado")||(estadoCalculo1=="aprobado"&&estadoFisica1=="regular")){
        alert (`vas a poder cursar Fisica 2 💪`)
     }
     else {
        alert ("No vas a poder hacer Fisica 2😢")
     }
    