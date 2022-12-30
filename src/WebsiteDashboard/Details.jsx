import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export const DashBoardDetails = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Card>
              <CardContent sx={{ backgroundColor: "#e6f3ff" }}>
                <Typography variant="h6">Total Applications</Typography>
                <Typography variant="p">94</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent sx={{ backgroundColor: "#ccffcc" }}>
                <Typography variant="h6">Admission</Typography>
                <Typography variant="p">88</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent sx={{ backgroundColor: "#ffffb3" }}>
                <Typography variant="h6">Interested</Typography>
                <Typography variant="p">0</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent sx={{ backgroundColor: "#ffccff" }}>
                <Typography variant="h6">Not Interested</Typography>
                <Typography variant="p">6</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
