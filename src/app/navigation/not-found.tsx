import React from "react";
import { Typography } from "@material-ui/core";

import { ROUTES } from '../core/data/routes';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      {/* Page Not Found! */}
      <Link to={ ROUTES.root }>Home</Link>
      <Typography variant="h2">404: page not found!</Typography>
    </>
  );
};
