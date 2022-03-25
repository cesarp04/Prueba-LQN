import ModalComponent from '../components/ModalComponent'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

function CharacterDetail() {
  const [openModal, setOpenModal] = useState(true)
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      {openModal && (
        <ModalComponent
          openModal
          closeModal={setOpenModal}
          id={id}
        ></ModalComponent>
      )}
    </Layout>
  )
}

export default CharacterDetail
