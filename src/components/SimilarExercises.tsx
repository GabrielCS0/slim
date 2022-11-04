import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
import { ExerciseResponseType } from "../pages/ExerciseDetail";

type SimilarExercisesData = {
  targetMuscleExercises: ExerciseResponseType[];
  equipmentExercises: ExerciseResponseType[];
};

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises
}: SimilarExercisesData) => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0px" }
      }}
    >
      <Typography
        variant="h3"
        mb={5}
        fontWeight={700}
        color="#000000"
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px"
        }}
      >
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: 2,
          position: "relative"
        }}
      >
        {
          targetMuscleExercises.length
            ? <HorizontalScrollbar
                data={targetMuscleExercises}
                isBodyParts={false}
                isExerciseDetail={true}
              />
            : <Loader />
        }
      </Stack>

      <Typography
        variant="h3"
        mb={5}
        fontWeight={700}
        color="#000000"
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          mt: { lg: "100px", xs: "60px" },
          ml: "20px"
        }}
      >
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: 2,
          position: "relative"
        }}
      >
        {
          equipmentExercises.length
            ? <HorizontalScrollbar
                data={equipmentExercises}
                isBodyParts={false}
                isExerciseDetail={true}
              />
            : <Loader />
        }
      </Stack>
    </Box>
  );
};

export default SimilarExercises;