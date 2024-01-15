import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../context/ThemeContext";


// Define the prop types for the Grid component
interface GridProps {
  title: string;
  subtitle: string;
  data: any[]; // Replace with the actual type for mock data
  quickSearch: boolean;
  columns: GridColDef<any>[]; // Replace with the actual type for columns
}

const Grid: React.FC<GridProps> = ({ title, subtitle, data, columns, quickSearch, ...otherProps }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiFormControl-root": {
          width: "100%",
        },
      }}
    > 
      <DataGrid 
        checkboxSelection 
        rows={data} 
        columns={columns} 
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: quickSearch,
            quickFilterProps: {
              variant: "outlined",
              size: "small",              
            }
          }
        }}
        {...otherProps}
      />
    </Box>
  );
};

export default Grid;
