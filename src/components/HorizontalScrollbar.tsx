import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import BodyPartCard from "./BodyPartCard";
import ExerciseCard from "./ExerciseCard";

type HorizontalScrollbarData = {
  data: string[] | any[];
  isBodyParts: boolean;
  isExerciseDetail?: boolean;
  bodyPart?: string;
  setBodyPart?: React.Dispatch<React.SetStateAction<string>>;
};

const HorizontalScrollbar = ({
  data,
  bodyPart,
  isExerciseDetail,
  isBodyParts,
  setBodyPart
}: HorizontalScrollbarData) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {data.map(item => { 
        if (isBodyParts) {
          return (
            <BodyPartCard
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          );
        };

        return (
          <ExerciseCard
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            exercise={item}
            isExerciseDetail={isExerciseDetail}
          />
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;