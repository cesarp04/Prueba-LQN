import ModalComponent from '../components/ModalComponent'
import { useState } from 'react'
import { useRouter } from 'next/router'

function CharacterDetail() {
  const [openModal, setOpenModal] = useState(true)
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      {openModal && (
        <ModalComponent
          openModal
          closeModal={setOpenModal}
          id={id}
        ></ModalComponent>
      )}
    </>
  )
}

export default CharacterDetail
