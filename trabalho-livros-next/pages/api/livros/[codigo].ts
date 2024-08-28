// pages/api/livros/[codigo].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros';

export const controleLivros = new ControleLivros();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { codigo } = req.query;

    if (req.method === 'DELETE') {
      const sucesso = await controleLivros.excluirLivro(codigo as string);

      if (sucesso) {
        res.status(200).json({ message: 'Livro excluído com sucesso' });
      } else {
        res.status(404).json({ message: 'Livro não encontrado' });
      }
    } else {
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
