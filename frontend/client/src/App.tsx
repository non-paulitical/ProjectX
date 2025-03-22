import { Routes, Route } from 'react-router';
import { Spaces, Space, Thread } from './pages';
import { Layout } from './components';

function App() {
  return (
    <div className="dark h-full bg-background text-primary p-5">
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Spaces />} />
            <Route path='/space/:spaceId' element={<Space />}/>
            <Route path='/thread/:threadId' element={<Thread />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
