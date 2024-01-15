import { useEffect, useState } from "react";

export const useModalDelete = () => {
   const [id, setID] = useState(null);

   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

   const handleOpenDeleteModal = () => {
      setDeleteModalOpen(true);
   };

   const handleCloseDeleteModal = () => {
      setDeleteModalOpen(false);
   };
   
  return { id, setID, isDeleteModalOpen, setDeleteModalOpen, handleOpenDeleteModal, handleCloseDeleteModal};
};


