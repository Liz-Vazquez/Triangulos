const crearTriangulo = (propiedades) => {
    if(!sonLadosPositivos(propiedades))
        return 'Los lados de un triángulo no pueden ser negativos o iguales a 0.';

    if(esEquilatero(propiedades))
        return 'Es un triángulo equilátero.';
    else if(esIsosceles(propiedades))
        return 'Es un triángulo isósceles.';
    else if(esEscaleno(propiedades))
        return 'Es un triángulo escaleno.';
}

const sonLadosPositivos = (propiedades) => {
    return (propiedades.lado1 > 0 && propiedades.lado2 > 0 && propiedades.lado3 > 0);
}

const esEquilatero = (propiedades) => {
    return (propiedades.lado1 === propiedades.lado2 && propiedades.lado2 === propiedades.lado3);
}

const esIsosceles = (propiedades) => {
    return (propiedades.lado1 === propiedades.lado2 && propiedades.lado2 !== propiedades.lado3);
}

const esEscaleno = (propiedades) => {
    return (propiedades.lado1 !== propiedades.lado2 && propiedades.lado2 !== propiedades.lado3 && propiedades.lado1 !== propiedades.lado3);
}

const formularioTriangulos = document.querySelector('#FT');

const main = () => {
    formularioTriangulos.addEventListener('submit', (e) => {
        e.preventDefault();
        const propiedades = {
            lado1: formularioTriangulos.querySelector('input[name=lado1]').value,
            lado2: formularioTriangulos.querySelector('input[name=lado2]').value,
            lado3: formularioTriangulos.querySelector('input[name=lado3]').value
        };
    
        document.querySelector("#mensaje").innerHTML = crearTriangulo(propiedades);
    });
}

main();