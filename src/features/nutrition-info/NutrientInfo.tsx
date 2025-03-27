import { Container, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useState } from "react";
import { useGetNutrientsQuery } from "../../hooks/custom/useGetNutrientsQuery";
import { Nutrient } from "../../types/nutri-info/Nutrient";
import NutrientDetails from "./NutrientDetails";

const NutrientInfo: React.FC = () => {
  const [selectedNutrient, setSelectedNutrient] = useState<Nutrient | null>(null);
  const { data: nutrients = [], isLoading, isError, error } = useGetNutrientsQuery();

  if (isLoading) {
    return <Typography>Loading nutrients...</Typography>;
  }

  if (isError) {
    return <Typography>Error: {(error as Error).message}</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        Search and Select a Nutrient
      </Typography>
      <Autocomplete
        options={nutrients}
        getOptionLabel={(option) => option.name}
        value={selectedNutrient}
        onChange={(_, value) => setSelectedNutrient(value)}
        renderInput={(params) => (
          <TextField {...params} label="Select a Nutrient" variant="outlined" />
        )}
      />
      {selectedNutrient && <NutrientDetails nutrient={selectedNutrient} />}
    </Container>
  );
};

export default NutrientInfo;
