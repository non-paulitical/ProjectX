import { NotebookPen } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center sticky">
      <section>
        Sidebar Icon
      </section>
      <section className="font-semibold text-4xl">
        Project X
      </section>
      <section>
        <NotebookPen className='cursor-pointer'/>
      </section>
    </header>
  )
}

export default Header