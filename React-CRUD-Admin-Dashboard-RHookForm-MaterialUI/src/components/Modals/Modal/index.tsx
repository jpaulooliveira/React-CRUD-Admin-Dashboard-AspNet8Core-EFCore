import React, { useRef, useEffect, useState } from 'react';
import { Box } from "@mui/material";
import ModalMUI from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Modal: React.FC<any> = ({ isOpen, hasCloseBtn = true, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <ModalMUI
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onKeyDown={handleKeyDown}
      ref={modalRef}
    >
      <Box sx={style}>
        <Box m="20px">
          <Box display="flex" justifyContent="center" alignItems="center" sx={{textAlign: 'center'}}>
            {children}
          </Box>
        </Box>
      </Box>
    </ModalMUI>

  );
};

export default Modal;
