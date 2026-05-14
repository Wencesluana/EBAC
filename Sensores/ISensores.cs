using System;

// Classe Processador
class Processador
{
    public string Marca { get; set; }
    public string Modelo { get; set; }

    public Processador(string marca, string modelo)
    {
        Marca = marca;
        Modelo = modelo;
    }
}

// Classe PlacaMae
class PlacaMae
{
    public string Fabricante { get; set; }
    public string Socket { get; set; }

    public PlacaMae(string fabricante, string socket)
    {
        Fabricante = fabricante;
        Socket = socket;
    }
}

// Classe Computador (Composição)
class Computador
{
    public Processador Processador { get; set; }
    public PlacaMae PlacaMae { get; set; }

    public Computador(Processador processador, PlacaMae placaMae)
    {
        Processador = processador;
        PlacaMae = placaMae;
    }

    // Método para exibir configuração
    public void ExibirConfiguracao()
    {
        Console.WriteLine("=== Configuração do Computador ===");

        Console.WriteLine($"Processador: {Processador.Marca} {Processador.Modelo}");

        Console.WriteLine($"Placa-mãe: {PlacaMae.Fabricante}");
        Console.WriteLine($"Socket: {PlacaMae.Socket}");
    }
}

// Programa principal
class Program
{
    static void Main()
    {
        // Criando peças
        Processador processador = new Processador("Intel", "Core i7-12700K");

        PlacaMae placaMae = new PlacaMae("ASUS", "LGA1700");

        // Montando computador
        Computador computador = new Computador(processador, placaMae);

        // Exibindo configuração
        computador.ExibirConfiguracao();
    }
}