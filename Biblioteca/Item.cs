using System;

abstract class ItemDigital
{
    public string Titulo { get; set; }

    public ItemDigital(string titulo)
{
    Titulo = titulo;
}

class Pergaminho : ItemDigital
{
    public string Conteudo { get; set; }

    public Pergaminho(string titulo, string conteudo) : base(titulo)
    {
            Conteudo = conteudo;
    }
}

    public void MostrarDetalhes()
    {
        Console.WriteLine($"Título: {Titulo}");
        Console.WriteLine($"Conteúdo: {Conteudo}");
    }

class Program
{
    static void Main()
    {
        // Instanciando objeto
        Pergaminho pergaminho = new Pergaminho(
            "História Antiga",
            "Os pergaminhos eram utilizados para registrar conhecimentos."
        );

        // Exibindo detalhes
        pergaminho.MostrarDetalhes();
    }
}