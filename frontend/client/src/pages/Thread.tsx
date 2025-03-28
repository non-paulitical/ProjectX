import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea} from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'
import { QueryResponse } from '../components'
import { laserVideo } from '../assets/video'
import { useState } from 'react'

const Thread = () => {
  const [query, setQuery] = useState<string>('')

  const handleQuerySubmission = (e: React.SyntheticEvent) => {
    e.preventDefault();
  }

  return (
    <div>
      <section>
          <ScrollArea className='h-[calc(100vh-170px)]'>
          <div className='chats gap-5 lg:flex lg:flex-col lg:items-center'>
            <QueryResponse query='How do lasers work?' response={laserVideo} />
            <QueryResponse query='How do lasers work?' response={laserVideo} />
            <QueryResponse query='How do lasers work?' response={laserVideo} />
            <QueryResponse query='How do lasers work?' response={laserVideo} />
            <QueryResponse query='How do lasers work?' response={laserVideo} />
            <QueryResponse query='How do lasers work?' response={laserVideo} />
            <QueryResponse query='How do lasers work?' response={laserVideo} />
          </div>
        </ScrollArea>
      </section>
      <section className='prompt-window flex justify-center'>
        <div className="fixed bottom-3 w-9/10 lg:w-1/2">
          <form action="" onSubmit={event => handleQuerySubmission(event)}>
            <Textarea onChange={event => setQuery(event.target.value)} placeholder="Ask..." className='pr-9' />
            <Button type='submit' className="absolute right-2 bottom-2 h-7 w-7">
              <Send />
            </Button>
          </form>
        </div>
      </section>
    </div >
  )
}

export default Thread