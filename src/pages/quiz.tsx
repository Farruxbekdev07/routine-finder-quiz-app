import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgressbar } from "react-circular-progressbar";
import { Box, Button, Container, Typography } from "@mui/material";

import { pxToRem } from "../utils";
import { TOTAL_STEPS } from "../constants";
import type { RootState } from "../redux/store";
import { setAnswer } from "../redux/reducers/quiz";
import type { QuestionProps } from "../types/question";
import { QUESTIONS_MOCK_DATA } from "../data/questions";

export default function Quiz() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("");
  const [data, setData] = useState<QuestionProps[]>([]);
  const selectedAnswers = useSelector((state: RootState) => state.quiz.answers);

  const step = Number(id);

  const handleNext = () => {
    if (!selected) {
      toast.warning("Please select an answer");
      return;
    }

    dispatch(setAnswer({ answer: selected, questionId: Number(id) }));

    if (step < TOTAL_STEPS) {
      navigate(`/quiz/${step + 1}`);
    } else {
      navigate("/results");
    }
  };

  const handleBack = () => {
    if (step === 1) return;
    navigate(`/quiz/${step - 1}`);
  };

  console.log("total steps:", TOTAL_STEPS);

  useEffect(() => {
    const filteredData = QUESTIONS_MOCK_DATA.filter(
      (item) => item.id === Number(id)
    );
    setData(filteredData);

    const previousAnswer = selectedAnswers.find(
      (item: { questionId: number }) => item.questionId === Number(id)
    );
    setSelected(previousAnswer?.answer || "");
  }, [id, selectedAnswers]);

  return (
    <Container>
      <Box
        className="flex"
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          width: "fit-content",
          height: "fit-content",
          flexDirection: "column",
        }}
      >
        <Box
          className="flex"
          sx={{
            width: "100%",
            gap: pxToRem(36),
            position: "relative",
            height: "fit-content",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ width: pxToRem(600) }} variant="h2">
            {data[0]?.question}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: pxToRem(16),
              justifyContent: "center",
            }}
          >
            {data[0]?.options.map((option, index) => {
              const letter = String.fromCharCode(97 + index);
              return (
                <Button
                  key={option}
                  onClick={() => setSelected(option)}
                  variant={selected === option ? "contained" : "outlined"}
                >
                  {`${letter}. ${option}`}
                </Button>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", gap: pxToRem(16) }}>
            <Button variant="text" onClick={handleBack} disabled={step === 1}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              endIcon={<ArrowForwardIcon />}
              disabled={Boolean(!selected)}
            >
              {step === TOTAL_STEPS ? "Discover your results" : "Next question"}
            </Button>
          </Box>
          <Box
            top={0}
            right={40}
            position="absolute"
            sx={{ width: pxToRem(100), height: pxToRem(100) }}
          >
            <CircularProgressbar
              value={step * 20}
              text={`${step}/${TOTAL_STEPS}`}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
