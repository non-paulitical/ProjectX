import { NotebookPen } from 'lucide-react'
import { useLocation, Link } from 'react-router'

const Header = () => {
  const location = useLocation()

  return (
    <header className=" flex-1 flex items-center justify-between">
      <section className="font-semibold text-2xl md:text-3xl lg:text-4xl">
        Project X
      </section>
      <section>
        { location.pathname.replace(/\/$/, '') === '/app' ? <NotebookPen className='filter-big brightness-50 cursor-not-allowed' /> :
         <Link to='/app'>
          <NotebookPen className='cursor-pointer' />
        </Link>}
      </section>
    </header>
  )
}

export default Header