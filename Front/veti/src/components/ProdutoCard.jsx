import './ProdutoCard.css';
.card {
    border: 1px solid #ccc;
    padding: 16px;
    width: 200px;
    border - radius: 10px;
    text - align: center;
}

.card img {
    width: 100 %;
    border - radius: 8px;
}


function ProdutoCard({ nome, preco, descricao, imagem }) {
    return (
        <div className="card">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <strong>R$ {preco}</strong>
        </div>
    );
}

export default ProdutoCard;