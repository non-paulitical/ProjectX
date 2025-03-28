import { Query, Response } from '../components'

interface QuerySource {
    query: string,
    response: string
}

const QueryResponse = (props: QuerySource) => {
  return (
    <div className='flex flex-col gap-3'>
        <Query query={props.query} />
        <Response response={props.response} />
    </div>
  )
}

export default QueryResponse