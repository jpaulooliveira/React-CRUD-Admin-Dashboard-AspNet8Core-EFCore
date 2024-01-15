import { useEffect, useState } from "react";
import { CategoryGridProps, ICategory } from "../../../types/GlobalTypes";
import { Box, Typography } from "@mui/material";
import { Add, HdrPlusOutlined, EditOffOutlined, DeleteForeverOutlined } from "@mui/icons-material";
import { redirect, useNavigate } from "react-router-dom";
import Grid from "../../../components/Grid";
import { useCategories } from "../../../pages-hooks/useCategories";
import FilterCategories from "./FilterCategories";
import DeleteModal from "../../../components/Modals/DeleteModal";

export function CategoriesGrid({ defaultValues }: CategoryGridProps) {
   const { categories, handleFilter, handleDelete, setID, isDeleteModalOpen, handleOpenDeleteModal, handleCloseDeleteModal } = useCategories(defaultValues);

   const redirect = useNavigate();

   const columns = [
      { field: "id", headerName: "ID" },
      {
         field: "name",
         headerName: "Name",
         flex: 1,
         cellClassName: "name-column--cell",
      },
      {
         field: "acoes",
         headerName: "",
         flex: 1,
         renderCell: (params: any) => (
            <Typography>
               <EditOffOutlined
                  sx={{ cursor: 'pointer' }}
                  onClick={() => redirect(`/categories/edit/${params.row.id}`)}
               />
               <DeleteForeverOutlined
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                     setID(params.row.id);
                     handleOpenDeleteModal();
                  }}
               />
            </Typography>
         ),
      },
   ];

   return (
      <Box>
         {/* Filter Categories */}
         <FilterCategories
            defaultValues={defaultValues}
            onFilter={handleFilter}
         />
         {/* End Filter Categories */}

         {
            categories.length === 0 ?
               <h1>No Category</h1>
               :
               <Box>
                  {/* Categories Grid */}
                  <Grid
                     title='Categories'
                     subtitle='Categories'
                     data={categories?.map((i) => ({
                        id: i.categoryId,
                        ...i
                     }))}
                     columns={columns}
                     quickSearch={true}
                  />
                  {/* End Categories Grid */}

                  <DeleteModal
                     title={"CONFIRM DELETION"}
                     subtitle={"The item will be permanently deleted"}
                     isOpen={isDeleteModalOpen}
                     onSubmit={handleDelete}
                     onClose={handleCloseDeleteModal}
                  />
               </Box>
         }
      </Box>

   );
}

