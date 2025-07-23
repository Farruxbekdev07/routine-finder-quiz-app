import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

import { RESULTS_BACKGROUND } from "../assets";
import EmblaCarousel from "../components/Slider";
import Background from "../components/Background";
import { resetAnswers } from "../redux/reducers/quiz";

export default function Results() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    dispatch(resetAnswers());
    navigate("/quiz/1");
  };

  return (
    <Container>
      <Background background={RESULTS_BACKGROUND}>
        <Typography variant="h1">
          Build you everyday self care routine.
        </Typography>
        <Typography variant="subtitle1">
          Perfect for if you're looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
        </Typography>
        <Button
          variant="outlined"
          onClick={handleRetakeQuiz}
          sx={{ color: "white !important" }}
        >
          Retake the quiz
        </Button>
      </Background>
      <Box
        sx={{ transform: "translateY(-80px)", zIndex: 2, position: "relative" }}
      >
        <EmblaCarousel />
      </Box>
    </Container>
  );
}
