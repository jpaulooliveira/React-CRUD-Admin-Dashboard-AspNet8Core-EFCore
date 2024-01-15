import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../context/ThemeContext";
import Modal from '../Modal';

const DeleteModal: React.FC<any> = ({ onSubmit, isOpen, onClose, title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
          <Header title={title} subtitle={subtitle}/>
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
              type={"submit"}
            >
              Confirm
            </Button>
          </Box>
      </form>
    </Modal>
  );
};

export default DeleteModal;
