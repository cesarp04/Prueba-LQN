import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { Container } from '@mui/material'
import ListCharacter from '../components/ListCharacter'

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
  const router = useRouter()

  console.log(router.query)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <h1>list</h1>
      {data.allPeople.edges.map(({ node }: any) => (
        <ListCharacter key={node.id} {...node} />
      ))}
    </Container>
  )
}

export default HomePage
