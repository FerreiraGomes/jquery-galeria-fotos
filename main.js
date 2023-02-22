$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown(); //Ele desce
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); //Aqui ele é recolhido
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $("#endereco-imagem-nova").val(); //esse é o valor colocado no input e guardando na vaiavel enderecoDaNovaIagem
        const novoItem = $('<li style="display: none"></li>'); //aqui criamos o elemento e guardamos na variavel novoItem
                                                            //display none para animação no final 
    
        $(` <img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //estamos adicionando <img> para o nosso elemento .appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">  
                    Ver imagem em tamanho real
                </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val("");
    
    })
})
