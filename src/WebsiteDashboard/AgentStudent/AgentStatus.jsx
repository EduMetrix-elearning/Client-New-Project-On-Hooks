import React from "react";
import "./AgentStatus.scss";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const AgentStatus = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      try {
        const agents = await axios.get("http://localhost:9000/agent");
        setAgents(agents.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAgents();
  }, []);

  return (
    <div className="Agent-Showing-details-div">
      <div className="filtering-agent-div">
        <input
          type="text"
          placeholder="Search Name..."
          className="filtering-name"
        />
        <div className="Filtering-email-status-location">
          <input type="email" placeholder="Search email" />
          <input type="text" placeholder="Search location" />
          <input type="text" placeholder="Search status" />
        </div>
      </div>

      <div className="all-agent-Card-page">
        {agents.map((agent) => (
          <Link
            key={agent.agent_id}
            to={"/student-card/" + agent.agent_id}
            style={{ textDecoration: "none" }}
          >
            <Card sx={{ maxWidth: 345 }} className="one-agent-card">
              <Box className="banner">
                <CardMedia
                  className="img-circle mx-auto mb-3"
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                />
              </Box>
              <CardContent className="card_container">
                <Typography
                  className="card_header"
                  variant="h5"
                  component="div"
                >
                  {agent.agent_name}
                </Typography>
                <Typography
                  className="card_detail"
                  variant="body2"
                  color="text.secondary"
                >
                  <i class="fa fa-globe mr-2"></i> {agent.agent_email}
                </Typography>
                <Typography
                  className="card_detail"
                  variant="body2"
                  color="text.secondary"
                >
                  <i class="fa fa-phone mr-2"></i> {agent.agent_phone}
                </Typography>
                <Typography
                  className="card_detail"
                  variant="body2"
                  color="text.secondary"
                >
                  <i class="fa  fa-map-marker-alt mr-2"></i>{" "}
                  {agent.agent_address}
                </Typography>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* <div className="all-agent-Card-page">
        {agents.map((agent) => (
          <Link
            key={agent.agent_id}
            to={"/student-card/" + agent.agent_id}
            style={{ textDecoration: "none" }}
          >
            <div class="row shadow">
              <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 one-agent-card">
                <div class=" card rounded-lg p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
                  <div class="banner"></div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt=""
                    class="img-circle mx-auto mb-3"
                  />
                  <h3 class="mb-4"> {agent.agent_name}</h3>
                  <div class="text-left mb-4">
                    <p class="mb-2">
                      <i class="fa fa-envelope mr-2"></i> {agent.agent_email}
                    </p>
                    <p class="mb-2">
                      <i class="fa fa-phone mr-2"></i> {agent.agent_phone}
                    </p>
                    {/* <p class="mb-2">
                      <i class="fa fa-globe mr-2"></i> kiranworkspace.com
                    </p> */}
      {/* <p class="mb-2">
                      <i class="fa fa-map-marker-alt mr-2"></i>{" "}
                      {agent.agent_address}
                    </p>
                  </div> */}
      {/* </div>
              </div>
            </div>
          </Link>
        ))} */}
      {/* </div> */}
    </div>
  );
};
