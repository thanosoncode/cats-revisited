import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(({ text }: { text: string }) => ({
  backgroundColor: text === "thanos" ? "black" : "yello",
}));

export default MyButton;
