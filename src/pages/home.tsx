import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

import { HOME_BACKGROUND } from "../assets";
import Background from "../components/Background";

export default function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz/1");
  };
  return (
    <Container>
      <Background background={HOME_BACKGROUND}>
        <Typography variant="h1">
          Build a self care routine suitable for you
        </Typography>
        <Typography variant="subtitle1">
          Take out test to get a personalised self care <br /> routine based on
          your needs.
        </Typography>
        <Button onClick={handleStartQuiz} variant="contained">
          Start the quiz
        </Button>
      </Background>
    </Container>
  );
}
