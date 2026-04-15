import './ProdutoCard.css';

function ProdutoCard({ nome, preco, descricao, imagem }) {
    return (
        <div className="card">
            <img src={imagem || 'https://via.placeholder.com/150'} alt={nome} />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <strong>R$ {preco}</strong>
        </div>
    );
}

export default ProdutoCard;