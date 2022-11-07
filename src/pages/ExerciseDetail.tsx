import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {
  youtubeSearchAndDownloadAPIOptions,
  exerciseDBRequestOptions,
  fetchData
} from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

export type ExerciseResponseType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

export type ExerciseVideosType = {
  video: {
    channelName: string;
    title: string;
    videoId: string;
    thumbnails: [{ url: string; }];
  };
};

const ExerciseDetail = () => {
  window.scrollTo({ top: 0, left: 0 });
  const exerciseResponseInitialState = {
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: ""
  };

  const [exerciseDetail, setExerciseDetail] = useState<ExerciseResponseType>(exerciseResponseInitialState);
  const [exerciseVideos, setExerciseVideos] = useState<ExerciseVideosType[]>();
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<ExerciseResponseType[]>([exerciseResponseInitialState]);
  const [equipmentExercises, setEquipmentExercises] = useState<ExerciseResponseType[]>([exerciseResponseInitialState]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
      
      const exerciseDetailData: ExerciseResponseType = await fetchData(
        `${exerciseDBUrl}/exercises/exercise/${id}`,
        exerciseDBRequestOptions
      );
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeSearchAndDownloadAPIOptions
      );
      const targetMuscleExercisesData: ExerciseResponseType[] = await fetchData(
        `${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseDBRequestOptions
      );
      const equipmentExercisesData: ExerciseResponseType[] = await fetchData(
        `${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseDBRequestOptions
      );
      
      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideosData.contents);
      setTargetMuscleExercises(targetMuscleExercisesData.slice(0, 6));
      setEquipmentExercises(equipmentExercisesData.slice(0, 6));
    };

    fetchExercisesData();
  }, [id]);
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;