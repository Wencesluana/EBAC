import { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';

function Home() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    const [form, setForm] = useState({
        nome: '',
        preco: '',
        descricao: '',
        imagem: ''
    });

    // Simulação de API
    useEffect(() => {
        setTimeout(() => {
            setProdutos([
                {
                    nome: 'Notebook',
                    preco: 3500,
                    descricao: 'Notebook potente',
                    imagem: 'https://via.placeholder.com/150'
                }
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.nome || !form.preco || !form.descricao) {
            alert('Preencha os campos obrigatórios!');
            return;
        }

        setProdutos([...produtos, form]);

        setForm({
            nome: '',
            preco: '',
            descricao: '',
            imagem: ''
        });
    }

    return (
        <div>
            <h1>Catálogo de Produtos</h1>

            <form onSubmit={handleSubmit}>
                <input
                    name="nome"
                    placeholder="Nome"
                    value={form.nome}
                    onChange={handleChange}
                />
                <input
                    name="preco"
                    placeholder="Preço"
                    value={form.preco}
                    onChange={handleChange}
                />
                <input
                    name="imagem"
                    placeholder="Imagem (URL)"
                    value={form.imagem}
                    onChange={handleChange}
                />
                <textarea
                    name="descricao"
                    placeholder="Descrição"
                    value={form.descricao}
                    onChange={handleChange}
                />
                <button type="submit">Adicionar</button>
            </form>

            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {produtos.map((produto, index) => (
                        <ProdutoCard key={index} {...produto} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;