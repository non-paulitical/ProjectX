import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from 'react-router'
import { Header, AppSidebar } from '../../components'

const Layout = () => {
    return (
        <div>
            <SidebarProvider >
                <AppSidebar />
                <main className="w-full">
                    <div className="flex items-center justify-between gap-2">
                        <SidebarTrigger className="scale-140" />
                        <Header />
                    </div>
                    <Outlet />
                </main>
            </SidebarProvider>
        </div>
    )
}

export default Layout