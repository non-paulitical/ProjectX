import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'
import { QueryResponse } from '../components'
import { laserVideo, coinSizedBlackHole, shadowFasterThanLight, spaceWithoutSpacesuit, teethRadioactivity } from '../assets/video'
import { useParams } from 'react-router'
// import { useState } from 'react'

const Thread = () => {
  //  const [query, setQuery] = useState<string>('')
  const params = useParams()

  const handleQuerySubmission = (e: React.SyntheticEvent) => {
    e.preventDefault();
  }

  return (
    <div>
      {
        params.threadId === 'guest' ? <h1>Hello, Guest</h1> :
          < div >
            <section>
              <ScrollArea className='h-[calc(100vh-170px)]'>
                <div className='chats gap-5 lg:flex lg:flex-col lg:items-center'>
                  <QueryResponse query='How do lasers work?' response={laserVideo} />
                  <QueryResponse query='How deadly is a coin-sized black hole?' response={coinSizedBlackHole} />
                  <QueryResponse query='How radioactive is our teeth?' response={teethRadioactivity} />
                  <QueryResponse query='Are shadows faster than light?' response={shadowFasterThanLight} />
                  <QueryResponse query='What will happen if I enter the space without a spacesuit?' response={spaceWithoutSpacesuit} />
                </div>
              </ScrollArea>
            </section>
            <section className='prompt-window flex justify-center'>
              <div className="fixed bottom-3 w-9/10 lg:w-1/2">
                <form action="" onSubmit={event => handleQuerySubmission(event)}>
                  <Textarea placeholder="Ask..." className='pr-9' />
                  {/* <Textarea onChange={event => setQuery(event.target.value)} placeholder="Ask..." className='pr-9' /> */}
                  <Button type='submit' className="absolute right-2 bottom-2 h-7 w-7">
                    <Send />
                  </Button>
                </form>
              </div>
            </section>
          </div >
      }
    </div >
  )
}

export default Thread
