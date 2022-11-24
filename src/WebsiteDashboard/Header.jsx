import { Card, Grid, Typography, AppBar, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const DashBoardHeader = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">EduMetrix Enquiries</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};


