import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseDBRequestOptions, fetchData } from "../utils/fetchData";
import { ExerciseRequestResponseType } from "../pages/Home";
import ExerciseCard from "./ExerciseCard";

type ExercisesData = {
  bodyPart: string;
  exercises: ExerciseRequestResponseType[];
  setExercises: React.Dispatch<React.SetStateAction<ExerciseRequestResponseType[]>>;
}

const Exercises = ({
  bodyPart,
  exercises,
  setExercises
}: ExercisesData) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
  const paginate = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseDBRequestOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseDBRequestOptions
        );
      };

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      mt="50px"
      p="20px"
      sx={{
        mt: { lg: "110px" }
      }}
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: { lg: "110px", xs: "50px" }
        }}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
              defaultPage={1}
            />
          )}
      </Stack>
    </Box>
  );
};

export default Exercises;