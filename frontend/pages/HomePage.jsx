import { LogOut} from 'lucide-react'


import '../src/App.css'
import Card from '../components/cards/card'
import { getMemoCard } from '../utils/memo.utils'
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';


function HomePage() {
  const [cards, setCards] = useState([]);
  const token = localStorage.getItem('token');
  const jwt = token ? jwtDecode(token) : { role: 'ADMIN', email: 'joshpmperry@gmail.com' };

  useEffect(() => {
    getMemoCard().then((fetchedCards) => {
      setCards(fetchedCards);
      console.log(fetchedCards);
    });
  }, []);

  return (
    <>
      <div className='flex p-4 top-bar' >
        <div className='spacer'/>
        <div className='flex email-logout'>
          <h1 className='pr-4 email'>Balerion.josh.perry@gmail.com </h1>
          <button onClick={() => {console.log("logout")} }>
              <LogOut size='32'/>
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='flex memo-header'>
          <h1 className='memo-title-header'> Memo Cards </h1><p className='memo-title-count'>({cards.length})</p>
        </div>
        {/* cards */}
        <div className='grid grid-cols-3 auto-rows-auto gap-[18px]'>
          {cards.map((card) => (
            <Card key={card.ID || cards.indexOf(card)} data={card} />
          ))}
        </div>
      </div>   
    </>
  )
}

export default HomePage
