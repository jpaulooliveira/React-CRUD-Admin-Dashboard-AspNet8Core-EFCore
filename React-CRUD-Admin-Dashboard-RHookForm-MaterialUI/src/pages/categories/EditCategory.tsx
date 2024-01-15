
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import SectionCategory from "./sections/SectionCategory";

export function EditCategory() {
  return (
    <Box m="20px">
      <Header title="EDIT CATEGORY" subtitle="Edit the data of category" />
      <SectionCategory />
    </Box>
  );
}

export default EditCategory;