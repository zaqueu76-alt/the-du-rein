document.getElementById('whatsappForm').addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const localizacao = document.getElementById('localizacao').value;
    const dia = document.getElementById('dia').value;

    const mensagem = `Olá! Gostaria de fazer um pedido:%0ANome: ${nome}%0ANúmero: ${telefone}%0ALocalização: ${localizacao}%0ADia da entrega: ${dia}`;

    window.open(`https://wa.me/258835128148?text=${mensagem}`, '_blank');
});
