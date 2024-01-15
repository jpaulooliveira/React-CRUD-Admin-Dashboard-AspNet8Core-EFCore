import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { CategoryService } from "../../../pages-services/categoryService";
import { CategoryFormInput } from "../../../types/GlobalTypes";
import * as zodValidator from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import endpoints from "../../../helpers/Endpoints";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import RHFTextField from "../../../components/ReactHookForm/RHFTextField";

const categoryService = new CategoryService(
  endpoints.CATEGORY.v1
);

const validationSchema = zodValidator
  .object({
    name: zodValidator.string().min(1, "Please enter your name"),
  })
  .required();

export function SectionCategory() {
  const params = useParams();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CategoryFormInput>({
    resolver: zodResolver(validationSchema),
    defaultValues: async () => await categoryService.getCategory(Number(params.id))
  });

  const onSubmit = async (data: CategoryFormInput) => {
    if (params?.id)
      await categoryService.editCategory(Number(params?.id), data)
    else
      await categoryService.createCategory(data);
    redirect("/categories");
  };

  const redirect = useNavigate();

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box m="20px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <RHFTextField
            name={"name"}
            label={"Name"}
            control={control}
            variant="filled"
          />

        </Box>
        <Box display="flex" justifyContent="start" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            CONFIRM
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SectionCategory;
