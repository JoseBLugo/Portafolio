document.getElementById("boton").addEventListener("click", function() {
    document.getElementById("seccion2").scrollIntoView({ behavior: "smooth" });
});

const entradas = document.getElementById('entradas');
const cuotas = document.getElementById('cuotas');
const total = document.getElementById('total');

const valorEntrada = 15000;
const incremento3 = 0.15;
const incremento6 = 0.3;
const incremento12 = 0.45;

const calcularTotal = () => {
  const cantidadEntradas = parseInt(entradas.value);
  const cantidadCuotas = parseInt(cuotas.value);
  let totalPagar = cantidadEntradas * valorEntrada;
  
  if (cantidadCuotas === 3) {
    totalPagar += totalPagar * incremento3;
  } else if (cantidadCuotas === 6) {
    totalPagar += totalPagar * incremento6;
  } else if (cantidadCuotas === 12) {
    totalPagar += totalPagar * incremento12;
  }
  
  total.value = `$${totalPagar.toFixed(2)}`;
}

entradas.addEventListener('input', calcularTotal);
cuotas.addEventListener('input', calcularTotal);


