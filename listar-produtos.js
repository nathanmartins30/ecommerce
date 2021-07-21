import React from 'react';
import placeholder from '../../imagens/286x180.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function ListarProdutos(props){

    const produtos = [
        {
            "id": "5fa2999664313a3718a1e0d5",
            "sku": "P00033914", 
            "name": "HAAR INTERN C/60CPR-S/AC",
            "barcode": "7896202500058",
            "maker": "VITAMED",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "VITAMINA B7 (BIOTINA)",
            "base": "Nexfar",
                "preco": 'R$ 16,92',
            "quantity": 1,
            "quantityAvailable": 99,
            "validUntil": 1667228400000,
            "imageURL": "https://cfarma-public.s3-sa-east-1.amazonaws.com/images/nexfar-product-default-image.jpg"
        },
        {
            "id": "5f77967fc3037641653d4ee8",
            "sku": "P00033824",
            "name": "PROTEIN CRISP BAR 12U-CHURROS/DOCE LEITE",
            "barcode": "7896311769070",
            "maker": "INTEGRALMEDICA",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "WHEY PROTEIN",
            "base": "Nexfar",
                "preco": 'R$ 45,79',
              
            "quantity": 1,
            "quantityAvailable": 0,
            "validUntil": 1635692400000,
            "imageURL": "https://cfarma-public.s3-sa-east-1.amazonaws.com/images/nexfar-product-default-image.jpg"
        },
        {
            "id": "5f6ca7c9da9a7566bdb84833",
            "sku": "P00033818",
            "name": "AGUA MICELAR ROSA MOSQUETA IONS DERMACHEM 250ML",
            "barcode": "7908346900653",
            "maker": "PROLINK",
            "category": "COSMÉTICOS",
            "principle": "ACIDO HIALURONICO+ASSOCIACOES",
            "base": "Nexfar",
                "preco": 'R$ 9,99',
          
            "quantity": 1,
            "quantityAvailable": 53,
            "validUntil": 1664550000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/10/23/5f92da028cb461489e72b3b6.png"
        },
        {
            "id": "5f620dc2adb11968f9db8739",
            "sku": "P00033801",
            "name": "EXTRATO PROPOLIS C/30CPS",
            "barcode": "7899620914582",
            "maker": "GLOBO",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "EXTRATO DE PROPOLIS",
            "base": "Nexfar",
                "preco": 'R$ 16,28',
       
            "quantity": 1,
            "quantityAvailable": 1211,
            "validUntil": 1659279600000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/11/9/5fa98aed980a47297e4b867a.png"
        },
        {
            "id": "5f5a40f6adb11968f9db28cd",
            "sku": "P00033799",
            "name": "ZINCO 29,59MG C/60CPR REV",
            "barcode": "7899620914674",
            "maker": "GLOBO",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "ZINCO",
            "base": "Nexfar",
                "preco": 'R$ 12,99',
     
            "quantity": 1,
            "quantityAvailable": 1143,
            "validUntil": 1659279600000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/9/17/5f63cbdcb414ad2ee408573f.png"
        },
        {
            "id": "5f5a40f6adb11968f9db28cc",
            "sku": "P00033798",
            "name": "ZINCO 29,59MG C/30CPR REV",
            "barcode": "7899620914667",
            "maker": "GLOBO",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "ZINCO",
            "base": "Nexfar",
                "preco": 'R$ 6,56',
          
            "quantity": 1,
            "quantityAvailable": 1026,
            "validUntil": 1659279600000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/9/17/5f63cbc88fd2e05df4c85dd4.png"
        },
        {
            "id": "5f5ba065adb11968f9db39a9",
            "sku": "P00033784",
            "name": "PH CREAM LEAVE-IN FOR MEN CR 200ML-PH ACTION COSMETICS",
            "barcode": "7898286335670",
            "maker": "BIOCUTHIS",
            "category": "COSMÉTICOS",
            "principle": "OLEOS DE:ARGAN/NOZ KARITE/SEM.ALGOD/COCO/MACADAMIA/CHA VER/CAMOMILA/ALOE V/CALAMO/MIRRA/OLIVA/CANELA",
            "base": "Nexfar",
                "preco": 'R$ 59,60',
           
            "quantity": 1,
            "quantityAvailable": 207,
            "validUntil": 1698764400000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/11/3/5fa1a8028cb461489e74bc3f.png"
        },
        {
            "id": "5f58d341adb11968f9db171d",
            "sku": "P00033783",
            "name": "SOLUCAO FISIOLOGICA 0,9% FR GT 500ML",
            "barcode": "7897780220871",
            "maker": "RIOQUIMICA",
            "category": "SIMILARES",
            "principle": "CLORETO DE SODIO",
            "base": "Nexfar",
                "preco": 'R$ 2,65',
           
            "quantity": 1,
            "quantityAvailable": 725,
            "validUntil": 1664550000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/11/9/5fa9836a980a47297e4b7153.png"
        },
        {
            "id": "5f58d340adb11968f9db171c",
            "sku": "P00033782",
            "name": "SOLUCAO FISIOLOGICA 0,9% FR GT 250ML",
            "barcode": "7897780220888",
            "maker": "RIOQUIMICA",
            "category": "SIMILARES",
            "principle": "CLORETO DE SODIO",
            "base": "Nexfar",
                "preco": 'R$ 2,19',
           
            "quantity": 1,
            "quantityAvailable": 618,
            "validUntil": 1661958000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/11/9/5fa9833a980a47297e4b707d.png"
        },
        {
            "id": "5f58d340adb11968f9db171b",
            "sku": "P00033781",
            "name": "SOLUCAO FISIOLOGICA 0,9% FR GT 100ML",
            "barcode": "7897780220895",
            "maker": "RIOQUIMICA",
            "category": "SIMILARES",
            "principle": "CLORETO DE SODIO",
            "base": "Nexfar",
                "preco": 'R$ 1,71',
            
            "quantity": 1,
            "quantityAvailable": 569,
            "validUntil": 1661958000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/11/9/5fa98311980a47297e4b703a.png"
        },
        {
            "id": "5f58c52aadb11968f9db1657",
            "sku": "P00033780",
            "name": "SHAMPOO FRESH CLEAN 300ML-PH ACTION COSMETICS",
            "barcode": "7898286335663",
            "maker": "BIOCUTHIS",
            "category": "COSMÉTICOS",
            "principle": "EXTRATOS GENGIBRE/SALVIA/TILIA",
            "base": "Nexfar",
                "preco": 'R$ 29,80',
             
            "quantity": 1,
            "quantityAvailable": 302,
            "validUntil": 1696086000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/10/6/5f7c58b28acd6e339c6ea46c.png"
        },
        {
            "id": "5f58c52aadb11968f9db1656",
            "sku": "P00033779",
            "name": "CONDICIONADOR HIDRA THERAPY 250ML-PH ACTION COSMETICS",
            "barcode": "7898286335656",
            "maker": "BIOCUTHIS",
            "category": "COSMÉTICOS",
            "principle": "SERICINA+YACON+EXTRATO DE BAMBU",
            "base": "Nexfar",
                "preco": 'R$ 32,70',
              
            "quantity": 1,
            "quantityAvailable": 302,
            "validUntil": 1696086000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/10/6/5f7c589dbafd472b7869bf6c.png"
        },
        {
            "id": "5f58c52aadb11968f9db1655",
            "sku": "P00033778",
            "name": "SHAMPOO HIDRA THERAPY 300ML-PH ACTION COSMETICS",
            "barcode": "7898286335649",
            "maker": "BIOCUTHIS",
            "category": "COSMÉTICOS",
            "principle": "SERICINA+YACON+EXTRATO DE BAMBU",
            "base": "Nexfar",
           
                "preco": 'R$ 32,70',
             
            "quantity": 1,
            "quantityAvailable": 297,
            "validUntil": 1696086000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/10/6/5f7c58a68acd6e339c6ea466.png"
        },
        {
            "id": "5f57e430adb11968f9db0c1b",
            "sku": "P00033777",
            "name": "VITAXON C IMUNO TRIPL ACAO C/30CPR REV Z/AC-LARANJA",
            "barcode": "7894164007127",
            "maker": "AIRELA",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "VITAMINAS C/D+ZINCO",
            "base": "Nexfar",
                "preco": 'R$ 13,68',
              
            "quantity": 1,
            "quantityAvailable": 260,
            "validUntil": 1661958000000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/11/3/5fa16fb8e8fab24ed92f632d.png"
        },
        {
            "id": "5f57e430adb11968f9db0c1a",
            "sku": "P00033776",
            "name": "VIT E GEL C/30CPS",
            "barcode": "7894164005994",
            "maker": "AIRELA",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "VITAMINA E",
            "base": "Nexfar",
                "preco": 'R$ 9,93',
              
            "quantity": 1,
            "quantityAvailable": 65,
            "validUntil": 1659279600000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/10/5/5f7b6c8abafd472b786989a9.png"
        },
        {
            "id": "5f57d617adb11968f9db0b55",
            "sku": "P00033775",
            "name": "VITAXON D+ZINCO C/30CPR REV Z/AC",
            "barcode": "7894164006694",
            "maker": "AIRELA",
            "category": "ALIMENTOS E SUPLEMENTOS",
            "principle": "VITAMINA D+ZINCO",
            "base": "Nexfar",
                "preco": 'R$ 46,38',
              
            "quantity": 1,
            "quantityAvailable": 0,
            "validUntil": 1661180400000,
            "imageURL": "https://s3-sa-east-1.amazonaws.com/cfarma-documents-private/2020/10/5/5f7b60638acd6e339c6e6893.png"
        }
    ];
    function handleComprar (event, produto){
        event.preventDefault();
        props.adicionarProduto(produto);
        props.exibirMensagem(produto);      
        
    }
    function render() {
        let key = 1;
        const cards = produtos.map(produto =>
        <Card 
        Key={key}
        data-testId={'card' + key++}
            style={{ width: '18rem', margin: '10px', float: 'left' }}>
                <Card.Img variant="top" src={produto.imageURL} style = {{height:'300px'}}/>
                <Card.Body className="text-center">
                <Card.Title style = {{ height: '40px'}}>
                    {produto.name}
                </Card.Title>
                <Button
                variant="success"
                style={{width:'100%'}}
                onClick={(event) => handleComprar (event, produto)}>
                    Comprar ({produto.preco})
                    </Button>
                </Card.Body>
                </Card>
        );
        return cards;
    }

    return render();
}

ListarProdutos.propTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired,
}

export default ListarProdutos;