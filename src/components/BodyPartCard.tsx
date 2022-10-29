import React from "react";
import { Box } from "@mui/material";

import BodyPart from "./BodyPart";

const BodyPartCard = ({
    title,
    itemId,
    item,
    bodyPart,
    setBodyPart
  }: any) => {
  return (
    <Box>
      <BodyPart
        item={item}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default BodyPartCard;