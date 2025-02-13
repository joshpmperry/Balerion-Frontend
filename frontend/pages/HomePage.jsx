import { LogOut } from 'lucide-react';
import { getMemoCard } from '../utils/memo.utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import Card from '../components/cards/card';

import '../src/App.css';

function HomePage() {
  const [cards, setCards] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchCards = async () => {
    if (!user) return;
    const fetchedCards = await getMemoCard(user.role);
    setCards(fetchedCards);
  };

  useEffect(() => {
    if (user) {
      fetchCards();
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth/login');
  };

  const adminCards = cards.filter(card => card.role === 'ADMIN');

  let userIndex = 1;
  let adminIndex = adminCards.length;

  return (
    <>
      <div className='flex p-4 top-bar'>
        <div className='spacer' />
        <div className='flex email-logout'>
          <h1 className='pr-4 email'>{user?.email}</h1>
          <button onClick={handleLogout}>
            <LogOut size='32' />
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='flex memo-header'>
          <h1 className='memo-title-header'>Memo Cards</h1>
          <p className='memo-title-count'>({cards.length})</p>
        </div>
        {/* cards */}
        <div className='grid grid-cols-3 auto-rows-auto gap-[18px]'>
          {cards.map((card) => {
            const index = card.role === 'ADMIN' ? adminIndex-- : userIndex++;
            return <Card 
              key={card._id} 
              data={card}
              onRefresh={fetchCards}
              cardIndex={index}
            />
          })}
          <Card 
            data={{ 'bodyText': '', 'role': user?.role}} 
            isNewCard={true} 
            onRefresh={fetchCards}
            cardIndex={user?.role === 'ADMIN' ? adminCards.length+1 : userIndex}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
