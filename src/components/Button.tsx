import { Button } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
}

export default function ButtonComponent({ children }: ButtonProps) {
  return <Button>{children}</Button>;
}
