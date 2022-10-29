import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

type BodyPartData = {
    item: string | any;
    bodyPart: string;
    setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const BodyPart = ({
    item,
    bodyPart,
    setBodyPart
}: BodyPartData) => {
  return (
    <Stack
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? "4px solid #FF2625" : "",
            backgroundColor: "#FFFFFF",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "280px",
            cursor: "pointer",
            gap: "47px"
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({
                top: 1800,
                left: 100,
                behavior: "smooth"
            })
        }}
    >
        <img
            src={Icon}
            alt="dumbbell"
            style={{
                width: "40px",
                height: "40px"
            }}
        />
        <Typography
            fontSize="24px"
            fontWeight="bold"
            color="#3A1212"
            sx={{ textTransform: "capitalize" }}
        >
            {item}
        </Typography>
    </Stack>
  );
};

export default BodyPart;