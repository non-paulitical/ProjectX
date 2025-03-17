import { Outlet } from 'react-router';
import { Header, Sidebar } from '../../components';

const Layout = () => {
    return (
        <div className="dark h-screen bg-background text-primary p-5">
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout