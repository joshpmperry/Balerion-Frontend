import { LogOut} from 'lucide-react'


import '../src/App.css'
import Card from '../components/cards/card'

function HomePage() {

  const cards = [
    {
      role: 'ADMIN',
      bodyText: 'hello worlds'
    },
    {
      role: 'USER',
      bodyText: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
    },
    {
      role: 'USER',
      bodyText: 'Lorem Ipsum'
    },
    {
      role: 'USER',
      bodyText: 'Lorem Ipsum'
    }
    ,
    {
      role: 'ADMIN',
      bodyText: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
    },
  ]

  const bodyText = ''
  const test = {
    role: 'USER',
    bodyText: bodyText,
  }



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
            <Card key="" data={card} />
          ))}
          <Card key="" data={test} />
        </div>
      </div>   
    </>
  )
}

export default HomePage
