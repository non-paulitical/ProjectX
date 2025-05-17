import { ChevronDown } from 'lucide-react';
import { Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent } from "@/components/ui/sidebar"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const AppSidebar = () => {
  const { logout } = useAuth0()

  return (
    <aside>
      <Sidebar>
        <SidebarHeader>
          <h3 className="text-xl mt-5">Your spaces</h3>
        </SidebarHeader>
        <SidebarContent>
          <Collapsible className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild className='text-md'>
                <CollapsibleTrigger>
                  <h4>Physics</h4>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent className='w-fit relative left-4'>
                  Research
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild className='text-md'>
                <CollapsibleTrigger>
                  <h4>Mathematics</h4>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent className='w-fit relative left-4'>
                  Linear Algebra
                </SidebarGroupContent>
              </CollapsibleContent>
              <CollapsibleContent>
                <SidebarGroupContent className='w-fit relative left-4'>
                  Calculus
                </SidebarGroupContent>
              </CollapsibleContent>
              <CollapsibleContent>
                <SidebarGroupContent className='w-fit relative left-4'>
                  Prob & stats
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild className='text-md'>
                <CollapsibleTrigger>
                  <h4>JavaScript</h4>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent className='w-fit relative left-4'>
                  Event Loop
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild className='text-md'>
                <CollapsibleTrigger>
                  <h4>Python</h4>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent className='w-fit relative left-4'>
                  FastAPI
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild className='text-md'>
                <CollapsibleTrigger>
                  <h4>Chemistry</h4>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent className='w-fit relative left-4'>
                  Haloalkanes and Haloarenes
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild className='text-md'>
                <CollapsibleTrigger>
                  <h4>Literature</h4>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent className='w-fit relative left-4'>
                  1984
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
        <Button onClick={() => logout({ logoutParams: { returnTo: import.meta.env.VITE_BASE_URL + '/app/thread/guest' } })}>Log out</Button>
      </Sidebar>
    </aside>
  )
}

export default AppSidebar
