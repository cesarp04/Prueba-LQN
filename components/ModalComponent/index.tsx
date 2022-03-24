import { useQuery, gql } from '@apollo/client'
import { Box, Button, Modal, Typography } from '@mui/material'
import Head from 'next/head'

const GET_PEOPLE_BY_ID = gql`
  query people($peopleId: ID!) {
    people(id: $peopleId) {
      name
      id
      height
      mass
      hairColor
      skinColor
      birthYear
      eyeColor
      gender
    }
  }
`

export default function ModalComponent({ openModal, closeModal, id }: any) {
  const peopleId = id
  const { loading, error, data } = useQuery(GET_PEOPLE_BY_ID, {
    variables: {
      peopleId,
    },
  })
  if (id) {
    console.log(id)
  }

  console.log(data)
  if (loading)
    return (
      <Modal
        open={openModal}
        onClose={() => closeModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'primary.main',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Loading...
          </Typography>
        </Box>
      </Modal>
    )
  if (error) return <p>Error :(</p>

  return (
    <>
      <Head>
        <title>{data.people.name}</title>
      </Head>
      <Modal
        open={openModal}
        onClose={() => closeModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'primary.main',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {data.people.name}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {data.people.height}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 2,
            }}
          >
            <Button
              sx={{
                color: 'primary.main',
                bgcolor: 'background.paper',
                ':hover': {
                  bgcolor: 'primary.dark',
                  color: 'background.paper',
                },
              }}
            >
              Regresar
            </Button>
            <Button
              sx={{
                color: 'primary.main',
                bgcolor: 'background.paper',
                ':hover': {
                  bgcolor: 'primary.dark',
                  color: 'background.paper',
                },
              }}
            >
              Ver detalles
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
