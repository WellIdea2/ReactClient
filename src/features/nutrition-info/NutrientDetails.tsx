import { Box, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import React from "react";
import { Nutrient } from "../../types/nutri-info/Nutrient";

interface NutrientDetailsProps {
  nutrient: Nutrient;
}

const NutrientDetails: React.FC<NutrientDetailsProps> = ({ nutrient }) => {
  return (
    <Box sx={{ p: 2, maxWidth: "100%", margin: "0 auto", mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Nutrient Information
      </Typography>

      <Card sx={{ mt: 2, background: "inherit", boxShadow: 0 }}>
        <CardHeader title={nutrient.name} />
        <CardContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {nutrient.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Functions
          </Typography>
          {Object.entries(nutrient.functions).map(([key, value], idx) => (
            <Typography key={idx} variant="body2">
              <strong>{key}:</strong> {value}
            </Typography>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Sources
          </Typography>
          {Object.entries(nutrient.sources).map(([key, value], idx) => (
            <Typography key={idx} variant="body2">
              <strong>{key}:</strong> {value}
            </Typography>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Daily Intake
          </Typography>
          <Typography variant="body2">{nutrient.dailyIntake}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Deficiency
          </Typography>
          <Typography variant="body2">{nutrient.deficiency}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Overdose
          </Typography>
          <Typography variant="body2">{nutrient.overdose}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            References
          </Typography>
          {nutrient.res.map((link, idx) => (
            <Typography
              key={idx}
              variant="body2"
              component="a"
              color="primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "block", textDecoration: "underline" }}
            >
              {link}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default NutrientDetails;
