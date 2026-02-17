import './styles.css'

import airFryerImage from '../../../../assets/card/air-fryer.png'
import alienImage from '../../../../assets/card/alien.png'
import animalImage from '../../../../assets/card/animal.png'
import UpNextCard from '../../../../features/UpNextCard/UpNextCard'
import BestSeller from '../../../../features/BestSeller/BestSeller'
import { BEST_SELLERS_DATA } from '../../../../data/data'
import SeeAllButton from '../../../../components/SeeAllButton/SeeAllButton'


// best sellers - images

export default function SidebarCard({ ...props }) {
  const upNextSection = props.text == 'Up next'

  return(
    <div className='up-next'>
      <div className='interno'>
        <h2>{props.text}</h2>
        <SeeAllButton />
      </div>
      {upNextSection && (
        <ul className='up-next-list'>
          <UpNextCard
            key={1}
            profilePicture='💭'
            name='O Pensamento das Coisas'
            title='Entrevista exclusiva: O que a sua Air Fryer pensa enquanto você dorme? Descubra hoje na nossa newsletter.'
            image={airFryerImage}
            readTime='10m read'
            likes={3400}
            comments={567}
          />
          <UpNextCard
            key={2}
            profilePicture='🍳'
            name='Gastronomia Oculta'
            title='A prova definitiva de que o coentro foi trazido por alienígenas para nos monitorar.'
            image={alienImage}
            readTime='12m read'
            likes={892}
            comments={214}
          />
          <UpNextCard
            key={3}
            profilePicture='🦦'
            name='Mentalidade Capivara'
            title='7 lições de estoicismo que aprendi observando uma capivara encarando o nada no Tietê'
            image={animalImage}
            readTime='5m read'
            likes={18700}
            comments={1200}
          />
        </ul>
      )}

      {!upNextSection && (
        <ul>
          {BEST_SELLERS_DATA.map((bestSeller) => (
            <BestSeller
              id={bestSeller.id}
              avatar={bestSeller.avatar}
              name={bestSeller.name}
              author={bestSeller.author}
              userVerification={bestSeller.userVerification}
            />
          ))}
        </ul>
      )}
    </div>
  )
}