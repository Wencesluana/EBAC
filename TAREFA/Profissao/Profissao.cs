using System;

abstract class Profissao
{
    public string Titulo { get; set; }

    public Profissao(string titulo)
    {
        Titulo = titulo;
    }
}

class Analista : Profissao
{
    public Analista(string titulo) : base(titulo)
    {

    }
}

class Docente : Profissao
{
    public Docente(string Titulo) : base(titulo)
    {

    }
}

public Certificado(Profissao profissao)
{
    Console.WriteLine($"Certificado emitido para: {profissao.Titulo}");
}