import { useEffect, useState } from "react";
import { CategoryService } from "../pages-services/categoryService";
import { ICategory } from "../types/GlobalTypes";
import endpoints from "../helpers/Endpoints";
import { useModalDelete } from "../pages-utils/useModalDelete";

const categoryService = new CategoryService(
   endpoints.CATEGORY.v1
);

export const useCategories = (defaultValues: any) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const{ id, setID, isDeleteModalOpen, handleOpenDeleteModal, handleCloseDeleteModal } = useModalDelete();
  
   useEffect(() => {
      categoryService.getCategories(defaultValues)
         .then((categories) => setCategories(categories))
         .catch((error) => console.error(error));
   }, []);

   const handleDelete = async () => {
      try {         
         await categoryService.deleteCategory(Number(id));
         handleCloseDeleteModal();
         setCategories(categories.filter(c=>c.categoryId != id)); // NEEDS TO REFRESH THE GRID        
      } catch (error) {
         console.error(error);
      }
   };

   const handleFilter = async (filter: any) => {
      try {
         const filteredCategories = await categoryService.getCategories(filter);
         setCategories(filteredCategories);
      } catch (error) {
         console.error(error);
      }
   };

  return { categories, setCategories, handleDelete, handleFilter, setID, isDeleteModalOpen, handleOpenDeleteModal, handleCloseDeleteModal };
};


