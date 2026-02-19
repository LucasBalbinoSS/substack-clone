import profilePicture from '../assets/profile.jpg'
import helenaProfile from '../assets/helena.png'
import otavioProfile from '../assets/otavio.png'
import danteProfile from '../assets/dante.png'
import claudioProfile from '../assets/claudio.png'

import aristoteles from '../assets/best-sellers/aristoteles.png'
import spider from '../assets/best-sellers/spider.png'
import beer from '../assets/best-sellers/beer.png'
import grandma from '../assets/best-sellers/grandma.png'
import samambaia from '../assets/best-sellers/samambaia.png'

import painting from '../assets/suggestions/painting.png'
import coffee from '../assets/suggestions/coffee.png'
import neymar from '../assets/suggestions/neymar.png'

// conteúdo do post
import museumImage from '../assets/post/museum.png'
import farmImage from '../assets/post/farm.webp'

export interface PostType {
  id: number
  name: string
  profilePhotoUrl: string
  postedAt: string
  content: string
  likesNumber: number
  commentsNumber: number
  restackNumber: number
  image?: string
  userVerification?: boolean
}

export interface BestSellersType {
  id: number
  avatar: string
  name: string
  author: string
  userVerification: boolean
}

export interface SuggestionType {
  id: number
  image: string
  name: string
  description: string
  userVerification?: boolean
}

export const POSTS_DATA: PostType[] = [
  {
    id: 1,
    name: 'Lucas Balbino',
    profilePhotoUrl: profilePicture,
    postedAt: 'Feb 2',
    content: 'Aprenda a gostar mais de estudar, pensar e criar...',
    likesNumber: 102,
    commentsNumber: 47,
    restackNumber: 22,
  },
  {
    id: 2,
    name: 'Helena Mareth',
    profilePhotoUrl: helenaProfile,
    postedAt: 'Feb 4',
    content: 'Vim ao museu hoje para buscar silêncio, mas acabei encontrando diálogos profundos nas cores dessas telas.\n\nÀs vezes, escrever não é sobre inventar mundos, mas sobre traduzir o que o mundo já está gritando nos nossos ouvidos. A arte é a única linguagem que não precisa de dicionário para tocar a alma.',
    likesNumber: 1240,
    commentsNumber: 89,
    restackNumber: 1000,
    image: museumImage,
    userVerification: true
  },
    {
    id: 3,
    name: 'Cláudio Santos',
    profilePhotoUrl: claudioProfile,
    postedAt: '1h',
    content: '>Hoje eu queria te ver...\n\nNa verdade, eu sempre quero.\n\nE quando te vejo...\n\nNunca quero que vá embora.',
    likesNumber: 8,
    commentsNumber: 15,
    restackNumber: 24,
    userVerification: false
  },
  {
    id: 4,
    name: 'Otávio Massaroni',
    profilePhotoUrl: otavioProfile,
    postedAt: 'Feb 6',
    content: 'Muitos veem apenas a extensão dessas terras, mas eu vejo o tempo. O café aqui na varanda tem outro gosto porque sei o esforço que cada hectare exige.\n\nNo escritório da cidade, o sucesso é um gráfico; aqui, o sucesso é o cheiro da terra molhada e a paciência de esperar a colheita. Trabalhar com a natureza me ensinou que a pressa é a maior inimiga da perfeição. O verdadeiro luxo não é ter, é pertencer ao lugar onde você pisa.',
    likesNumber: 5840,
    commentsNumber: 215,
    restackNumber: 92,
    image: farmImage
  },
  {
    id: 5,
    name: 'Dante Alencar',
    profilePhotoUrl: danteProfile,
    postedAt: 'Fev 7',
    content: '>A cidade dorme sob um cobertor de neblina,\n\nEnquanto as luzes dos postes desenham sombras no chão.\n\nO silêncio não é ausência de som,\n\nÉ o grito contido de quem busca uma direção. Escrevo no escuro para que a luz não me cegue,\n\nPois a verdade, às vezes, prefere a penumbra.\n\nOnde o que é sólido se dissolve e se entrega,\n\nE a alma, enfim, se deslumbra.',
    likesNumber: 14200,
    commentsNumber: 432,
    restackNumber: 1105,
    userVerification: true
  },
]

export const BEST_SELLERS_DATA: BestSellersType[] = [
  {
    id: 1,
    avatar: beer,
    name: 'Samba e Entropia',
    author: 'Zeca Pagodeiro Quântico',
    userVerification: true
  },
  {
    id: 2,
    avatar: samambaia,
    name: 'Fotosíntese Corporativa',
    author: 'Planta do Escritório',
    userVerification: false
  },
  {
    id: 3,
    avatar: grandma,
    name: 'Cookies de Terminal',
    author: 'Vovó Hacker',
    userVerification: true
  },
  {
    id: 4,
    avatar: spider,
    name: 'Teias de Carreira',
    author: 'Dra. Aranha Humana',
    userVerification: true
  },
  {
    id: 5,
    avatar: aristoteles,
    name: 'Ética e Churrasco',
    author: 'Aristóteles da Silva',
    userVerification: false
  }
]

export const SUGGESTION_DATA: SuggestionType[] = [
  {
    id: 1,
    image: neymar,
    name: 'Menino Ney',
    description: 'Ele vai pra copa ou não? :(',
    userVerification: true
  },
  {
    id: 2,
    image: coffee,
    name: 'Coffee with Games',
    description: 'Coffee with Games',
    userVerification: true
  },
  {
    id: 3,
    image: painting,
    name: 'Conversas e arte',
    description: 'Conversas e arte',
    userVerification: true
  },
  {
    id: 4,
    image: painting,
    name: 'Conversas e arte',
    description: 'Conversas e arte',
    userVerification: true
  }
]