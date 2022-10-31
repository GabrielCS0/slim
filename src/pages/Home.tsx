import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

export type ExerciseRequestResponseType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState<ExerciseRequestResponseType[]>([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;