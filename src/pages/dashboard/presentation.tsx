import { Button, Typography } from "@mui/material";
import { IDashboardPresentation } from "./interface";

export default function DashboardPresentation(state: IDashboardPresentation) {
  return (
    <div className="p-10">
      <Typography color="error" fontSize={24}>
        {state.title}
      </Typography>
      <Button>Clique Aqui</Button>
    </div>
  );
}
