import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

import { ExerciseRequestResponseType } from "../pages/Home";

type ExerciseCardData = {
    exercise: ExerciseRequestResponseType;
    isExerciseDetail?: boolean;
    itemId?: string;
    title?: string;
};

const ExerciseCard = ({ exercise, isExerciseDetail, itemId, title }: ExerciseCardData) => {
  return (
    <Link
        to={`/exercise/${exercise.id}`}
        className={`exercise-card ${isExerciseDetail ? "exercise-detail-card" : ""}`}
    >
        <img
            src={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy"
        />
        <Stack direction="row">
            <Button
                sx={{
                    ml: "21px",
                    color: "#FFFFFF",
                    background: "#FFA9A9",
                    fontSize: "14px",
                    borderRadius: "20px",
                    textTransform: "capitalize"
                }}
            >
                {exercise.bodyPart}
            </Button>
            <Button
                sx={{
                    ml: "21px",
                    color: "#FFFFFF",
                    background: "#FCC757",
                    fontSize: "14px",
                    borderRadius: "20px",
                    textTransform: "capitalize"
                }}
            >
                {exercise.target}
            </Button>
        </Stack>

        <Typography
            ml="21px"
            color="#000000"
            fontWeight="bold"
            mt="11px"
            pb="10px"
            textTransform="capitalize"
            fontSize="22px"
        >
            {exercise.name}
        </Typography>
    </Link>
  );
};

export default ExerciseCard;