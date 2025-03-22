import { useParams } from 'react-router'

const Space = () => {
  const params = useParams()

  return (
    <main className='mt-10 h-full'>
      <h3>Space: {params.spaceId}</h3>
    </main>
  )
}

export default Space