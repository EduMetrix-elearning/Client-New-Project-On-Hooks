import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function LoadingScreen(props) {
  return (
    <Stack
      spacing={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Skeleton
        variant="rectangular"
        width={"600px"}
        height={"75px"}
        sx={{ marginBottom: "40px" }}
      />

      <Skeleton variant="text" width={"600px"} sx={{ fontSize: "1rem" }} />
      <Skeleton
        variant="rectangular"
        width={"600px"}
        height={"50px"}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton variant="text" width={"600px"} sx={{ fontSize: "1rem" }} />
      <Skeleton
        variant="rectangular"
        width={"600px"}
        height={"50px"}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton variant="text" width={"600px"} sx={{ fontSize: "1rem" }} />
      <Skeleton
        variant="rectangular"
        width={"600px"}
        height={"50px"}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton variant="text" width={"600px"} sx={{ fontSize: "1rem" }} />
      <Skeleton
        variant="rectangular"
        width={"600px"}
        height={"50px"}
        sx={{ marginBottom: "50px" }}
      />
      <Skeleton
        variant="rectangular"
        width={"600px"}
        height={"30px"}
        sx={{ marginBottom: "40px" }}
      />
      <Skeleton
        variant="rectangular"
        width={"600px"}
        height={"30px"}
        sx={{ marginBottom: "10px" }}
      />
     
    </Stack>
  );
}

export default LoadingScreen;
