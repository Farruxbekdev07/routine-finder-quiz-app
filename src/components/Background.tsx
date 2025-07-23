import { Box } from "@mui/material";

import { pxToRem } from "../utils";

interface BackgroundProps {
  background: string;
  children: React.ReactNode;
}
export default function Background({ children, background }: BackgroundProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60vh",
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        padding: `0 ${pxToRem(20)}`,
        background: `url(${background}) no-repeat center center/cover`,
        "::before": {
          top: 0,
          left: 0,
          zIndex: 0,
          content: '""',
          width: "100%",
          height: "100%",
          position: "absolute",
          bgcolor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          position: "relative",
          height: "fit-content",
          gap: `${pxToRem(20)}`,
          flexDirection: "column",
          justifyContent: "center",
          width: `${pxToRem(500)}`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
