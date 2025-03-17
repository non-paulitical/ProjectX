import { useParams } from 'react-router'

const Space = () => {
  const params = useParams()
  
  return (
    <div>Space{params ? ': ' + params.spaceId : null}</div>
  )
}

export default Space