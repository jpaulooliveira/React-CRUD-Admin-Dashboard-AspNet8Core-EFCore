import {  useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Add, HdrPlusOutlined } from "@mui/icons-material";
import {  useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { tokens } from "../../context/ThemeContext";
import { CategoriesGrid } from "./sections/CategoriesGrid";

export function Categories() {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   const [defaultValues, setDefaultValues] = useState({
      name: '',
   })

   const redirect = useNavigate();
   
   return (
      <Box m="20px">
         {/* HEADER */}
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Categories" subtitle="Category list" />
            <Box>
               <Button
                  sx={{
                     backgroundColor: colors.blueAccent[700],
                     color: colors.grey[100],
                     fontSize: "14px",
                     fontWeight: "bold",
                     padding: "10px 20px",
                  }}
                  onClick={() => redirect("/categories/add")}
               >
                  <HdrPlusOutlined sx={{ mr: "10px" }} />
                  Create Category
               </Button>

            </Box>
         </Box>

         <CategoriesGrid 
            defaultValues={defaultValues}
         />

      </Box>

   );
}

export default Categories;
