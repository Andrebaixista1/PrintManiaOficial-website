let items =[{
    id: 0,
    name: 'Montagem Cartão de Visita/Tag',
    price: 9.90
    },
    {   
    id: 1,
    name: 'Montagem Panfleto',
    price: 19.90
    },
    {   
    id: 2,
    name: 'Montagem Logo/Marca',
    price: 29.90
    },
    {   
    id: 3,
    name: 'Montagem Cardápio Interativo',
    price: 149.90
    },
    {   
    id: 4,
    name: 'Montagem de PDF',
    price: 59.90
    },
    {   
    id: 5,
    name: 'Montagem Cardápio Virtual',
    price: 39.90
    }
]


function add_price(){
    let total = 0;

    let cartao = document.getElementById('montagem-cartaotag');
    let panfleto = document.getElementById('montagem-panfleto');
    let logoMarca = document.getElementById('montagem-logoMarca');
    let cardInt = document.getElementById('montagem-cardInt');
    let pdf = document.getElementById('montagem-PDF');
    let cardVirt = document.getElementById('montagem-cardVirt');


    
        if(cartao.checked){
            total += items[0].price;
        }
        if(panfleto.checked){
            total += items[1].price;
        }
        if(logoMarca.checked){
            total += items[2].price;
        }
        if(cardInt.checked){
            total += items[3].price;
        }
        if(pdf.checked){
            total += items[4].price;
        }
        if(cardVirt.checked){
            total += items[5].price;
        }

        document.getElementById('resultado').innerHTML = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
}





