import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { fetchData, exerciseDBRequestOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { ExerciseRequestResponseType } from "../pages/Home";

type SearchExercisesData = {
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  setExercises: React.Dispatch<React.SetStateAction<ExerciseRequestResponseType[]>>;
};

const SearchExercises = ({
  bodyPart,
  setBodyPart,
  setExercises
}: SearchExercisesData) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseDBRequestOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if(search) {
      const exercisesData: ExerciseRequestResponseType[] = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseDBRequestOptions
      );

      const searchedExercises = exercisesData.filter(
        exercise => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    };
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mt="37px"
      p="20px"
    >

      <Typography
        fontWeight="700"
        mb="50px"
        textAlign="center"
        sx={{
          fontSize: { lg: "44px", xs: "30px" }
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box
        position="relative"
        mb="72px"
      >
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px"
            },
            height: "76px",
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFFFFF",
            borderRadius: "40px"
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#FFFFFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0"
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px"
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>

    </Stack>
  );
};

export default SearchExercises;