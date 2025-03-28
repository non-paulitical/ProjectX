interface Query {
    query: string
}

const Query = ({query} : Query) => {
  return (
    <div className="self-end max-w-2/3 w-fit bg-accent rounded-xl p-2 break-words">
        {query}
    </div>
  )
}

export default Query