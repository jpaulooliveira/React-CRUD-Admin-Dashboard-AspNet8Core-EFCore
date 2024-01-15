
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import SectionCategory from "./sections/SectionCategory";

export function CreateCategory() {
  return (
    <Box m="20px">
      <Header title="CREATE CATEGORY" subtitle="Create a new category" />
      <SectionCategory/>
    </Box>
  );
}

export default CreateCategory;