// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
export interface IBoard {
  id: number;
  title: string;
  description: string;
}

export interface IData {
  id: number;
  title: string;
  cards: IBoard[];

}

export const Data: IData[] = [
  {
    id: 1,
    title: "A Fazer",
    cards: [
      {
        id: 1,
        title: "#boraCodar um Kanban 🧑‍💻",
        description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
      },
      {
        id: 2,
        title: "Manter a ofensiva 🔥",
        description: "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva"
      },
    ]
  },
  {
    id: 2,
    title: "Fazendo",
    cards: [
      {
        id: 3,
        title: "Conferir o novo desafio 🚀",
        description: "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível"
      },
      {
        id: 4,
        title: "Ser incrível 😎",
        description: "Sempre me lembrar de manter minha autenticidade e espalhar amor"
      },
    ]
  }
  ,
  {
    id: 3,
    title: "Feito",
    cards: [
      {
        id: 5,
        title: "#boraCodar uma página de login 🧑‍💻",
        description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
      },
      {
        id: 6,
        title: "#boraCodar uma página de clima 🧑‍💻",
        description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
      },
    ]
  }
]