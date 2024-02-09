document.addEventListener('DOMContentLoaded', function() {
  const buttonAdicionar = document.querySelector('.controls button');
  const buttonPedidos = document.querySelector('header button');

  let quantidadePedidos = 0;

  buttonAdicionar.addEventListener('click', function() {
    quantidadePedidos++;
    buttonPedidos.textContent = `Pedidos (${quantidadePedidos})`;
  });

  buttonPedidos.addEventListener('click', function() {
    quantidadePedidos = 0;
    buttonPedidos.textContent = `Pedidos (${quantidadePedidos})`;
  });
});
