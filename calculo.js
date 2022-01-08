//Paso3: buscar y tener los helpers necesarios
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

//Paso4: crear una lista montoDia que contenga solo los montos por dia
const montoVentas = ventas.map(
    function(montos){
        return montos.monto
    }
);

//Paso5: ordenar la lista montoDia
const OrdMotoVentas = montoVentas.sort(function(montoA, montoB){
    return montoA - montoB;
});

//Paso6: crear funcion esPar En caso de que los elemento del listado sean pares y poder calcular el promedio de los 2 medios

function esPar(num) {
    return (num % 2 === 0);
}

//Paso7: crear funcion para calcular la mediana del monto de las ventas
function calcularMedianaVentas(lista) {

    const mitadMontos = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        montoMed1 = lista[mitadMontos -1];
        montoMed2 = lista[mitadMontos];

        const medianaMontos = calcularMediaAritmetica([montoMed1, montoMed2]);
        return medianaMontos;
    }else{
        const montoMitad = lista[mitadMontos];
        return montoMitad;
    }
}

const medianaMotosVentas = calcularMedianaVentas(OrdMotoVentas);


//Paso8: funcion para sacar los 20% mejores montos

function mejoresVentas(lista) {
    const spliceStart = (lista.length * 80) / 100;
    const spliceCount = lista.length - spliceStart;

    const mejoresMontos = lista.splice(
        spliceStart,
        spliceCount
    );

    return mejoresMontos;
}



//Paso9: sacar los 20% montos mas bajos

function bajasVentas(lista) {
    const spliceStartb = 0;
    const spliceCountb = (lista.length * 20) / 100;

    const bajosMontos = lista.splice(
        spliceStartb,
        spliceCountb
    );

    return bajosMontos;
}
