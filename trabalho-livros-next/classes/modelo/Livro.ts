export class Livro {
  constructor(
   public _id: string ,
    public codigo: string, // Certifique-se de que `codigo` é uma string
    public codEditora: number,
    public titulo: string,
    public resumo: string,
    public autores: string[]
  ) {}
}
