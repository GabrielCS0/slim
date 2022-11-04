import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="25px"
        alignItems="center"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt={Logo} width="150px" height="35px" />
        <Typography variant="h6" pb="28px" mt="8px" fontSize="14px">
          © 2022
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;