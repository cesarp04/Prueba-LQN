import { useState } from 'react'
import { Box, Modal, Typography } from '@mui/material'
import Head from 'next/head'

export default function ModalComponent({ openModal, closeModal, id }: any) {
  console.log(id)

  return (
    <>
      <Head>
        <title>prueba</title>
      </Head>
      <Modal
        open={openModal}
        onClose={() => closeModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  )
}