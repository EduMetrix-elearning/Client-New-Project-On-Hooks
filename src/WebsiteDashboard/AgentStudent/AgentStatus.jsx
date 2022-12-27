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

import * as services from "../../services/pages/agentRoute";

export const AgentStatus = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    try {
      const getAgents = async () => {
        const agent = await services.allAgents();
        setAgents(agent);
      };
      getAgents();
    } catch (error) {
      alert(error.response.data.message);
    }
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
            to={"/agent-card/" + agent.agent_id}
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
                  <i className="fa fa-globe mr-2"></i> {agent.agent_email}
                </Typography>
                <Typography
                  className="card_detail"
                  variant="body2"
                  color="text.secondary"
                >
                  <i className="fa fa-phone mr-2"></i> {agent.agent_phone}
                </Typography>
                <Typography
                  className="card_detail"
                  variant="body2"
                  color="text.secondary"
                >
                  <i className="fa  fa-map-marker-alt mr-2"></i>{" "}
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
    </div>
  );
};
