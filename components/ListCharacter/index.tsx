import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DetailsIcon from '@mui/icons-material/Details'
import { Button } from '@mui/material'
import ModalComponent from '../ModalComponent'
import { useRouter } from 'next/router'

export default function ListCharacter(node: any) {
  const [openModal, setOpenModal] = useState(false)
  const router = useRouter()
  const handleOpen = () => setOpenModal(true)

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <ListItem>
        <ListItemText primary={node.name} />
        <Button onClick={handleOpen}>
          ver detalles
          <DetailsIcon />
        </Button>
      </ListItem>
      {openModal && (
        <ModalComponent
          openModal
          closeModal={setOpenModal}
          id={node.id}
        ></ModalComponent>
      )}
    </List>
  )
}
