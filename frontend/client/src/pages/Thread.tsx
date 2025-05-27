import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { QueryResponse } from '../components'
import { Send, Loader2 } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useRef, useEffect } from 'react'

interface QueryItem {
  query: string;
  response: string;
}

const Thread = () => {
  const [query, setQuery] = useState<string>('')
  const [queryHistory, setQueryHistory] = useState<QueryItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [debugInfo, setDebugInfo] = useState<string>('')
  const { user, isAuthenticated, isLoading: authLoading } = useAuth0()
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [queryHistory]);

  const handleQuerySubmission = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsLoading(true);
    setDebugInfo('');
    
    try {
      setDebugInfo(prev => prev + 'Sending request to server...\n');
      
      const response = await fetch('/api/query/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get response: ${response.status} ${response.statusText}`);
      }
      
      // Parse the JSON response
      const data = await response.json();
      setDebugInfo(prev => prev + `Response data: ${JSON.stringify(data)}\n`);
      
      if (!data.videoPath) {
        throw new Error('No video path received from server');
      }
      
      // Use the video path directly (it's already a URL)
      const videoUrl = data.videoPath;
      setDebugInfo(prev => prev + `Video URL: ${videoUrl}\n`);
      
      setQueryHistory(prev => [...prev, { query, response: videoUrl }]);
      setQuery('');
    } catch (error) {
      console.error('Error submitting query:', error);
      setDebugInfo(prev => prev + `Error: ${error instanceof Error ? error.message : 'Failed to process query'}\n`);
      alert(`Error: ${error instanceof Error ? error.message : 'Failed to process query'}`);
    } finally {
      setIsLoading(false);
    }
  }

  if (authLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {isAuthenticated && user ? <h1>Hello, {user.name}</h1> : <h1>Hello, Guest</h1>}
      {<section>
        <ScrollArea ref={scrollAreaRef} className='h-[calc(100vh-170px)]'>
          <div className='chats gap-5 lg:flex lg:flex-col lg:items-center'>
            {queryHistory.map((item, index) => (
              <QueryResponse key={index} query={item.query} response={item.response} />
            ))}
            {isLoading && (
              <div className="flex flex-col items-center justify-center w-full py-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-2 text-sm text-muted-foreground">Generating response...</p>
              </div>
            )}
            {debugInfo && (
              <div className="w-full p-4 mt-4 bg-slate-100 rounded-md">
                <h3 className="text-sm font-bold mb-2">Debug Info:</h3>
                <pre className="text-xs whitespace-pre-wrap">{debugInfo}</pre>
              </div>
            )}
          </div>
        </ScrollArea>
      </section>}
      <section className='prompt-window flex justify-center'>
        <div className="fixed bottom-3 w-9/10 lg:w-1/2">
          <form action="" onSubmit={event => handleQuerySubmission(event)}>
            <Textarea 
              onChange={event => setQuery(event.target.value)} 
              value={query} 
              placeholder="Ask..." 
              className='pr-9'
              disabled={isLoading}
            />
            <Button 
              type='submit' 
              className="absolute right-2 bottom-2 h-7 w-7"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send />}
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Thread
