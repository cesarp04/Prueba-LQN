import { useQuery, gql } from '@apollo/client'

const GET_PEOPLE = gql`
  query allPeople {
    allPeople {
      edges {
        node {
          id
          name
          height
          eyeColor
        }
      }
    }
  }
`

function HomePage() {
  const { loading, error, data } = useQuery(GET_PEOPLE)

  console.log(data?.allPeople)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <h1>list</h1>
      {data.allPeople.edges.map(({ node }: any) => (
        <p key={node.id}>{node.name}</p>
      ))}
    </>
  )
}

export default HomePage
