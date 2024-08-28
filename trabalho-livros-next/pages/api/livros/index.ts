import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros';

export const controleLivros = new ControleLivros();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = await controleLivros.obterLivros(); // Aguarde a resolução da promessa
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const livro = req.body;
      await controleLivros.incluirLivro(livro);
      res.status(200).json({ message: 'Livro incluído com sucesso' });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
