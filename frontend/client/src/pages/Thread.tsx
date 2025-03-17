import { useParams } from 'react-router'

const Thread = () => {
  const params = useParams()
  
  return (
    <div>Thread{params ? ': ' + params.threadId : null}</div>
  )
}

export default Thread