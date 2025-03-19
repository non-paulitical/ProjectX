import { NotebookPen } from 'lucide-react';

const Header = () => {
  return (
    <header className=" flex-1 flex items-center justify-between">
      <section className="font-semibold text-2xl md:text-3xl lg:text-4xl">
        Project X
      </section>
      <section>
        <NotebookPen className='cursor-pointer' />
      </section>
    </header>
  )
}

export default Header