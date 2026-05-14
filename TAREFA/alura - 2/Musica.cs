class Musica { 
		public string nome;
		public string artista;
		public int duracao;
		public bool disponivel;

		public void ExibirFichaTecnica()
		{
		Console.WriteLine($"Nome {nome}");
		Console.WriteLine($"Artista {artista}");
		Console.WriteLine($"Duracao {duracao}");

        if (disponivel)
        {
			console.WriteLine("Disponivel no plano.\n");
        } else
        {
			Console.WriteLine("Não disponível no plano.\n");
        }
		}
}
