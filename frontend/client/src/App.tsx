import { Routes, Route } from 'react-router';
import { Space, Thread } from './pages';
import { Layout } from './components';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Space />} />
            <Route path='/space/:spaceId' element={<Space />}/>
            <Route path='/thread/:threadId' element={<Thread />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
