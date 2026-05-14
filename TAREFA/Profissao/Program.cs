using System;

class Program
{
    static void Main()
{
    Profissao analista = new Analista("Analista de Sistemas");
    Profissao docente = new Docente("Professor de Matemática");

    Certificado c1 = new Certificado(analista);
    Certificado c2 = new Certificado(docente);
}
}