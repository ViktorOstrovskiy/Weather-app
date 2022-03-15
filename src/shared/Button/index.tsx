import * as React from "react";
import { Button as MuiButton } from "@mui/material";
import { MuiButtonStyles } from "./muiStyles";
import { makeStyles } from "@mui/styles";
import cx from "classnames";

const useStyles = makeStyles(MuiButtonStyles);

export const Button = ({
  onClick,
  variant,
  disabled,
  type,
  title,
  temp,
  days,
  tempChange,
  daysChange,
}: any) => {
  const styles = useStyles();
  return (
    <MuiButton
      className={cx(styles, {
        [styles.temp]: temp,
        [styles.tempChange]: tempChange,
        [styles.days]: days,
        [styles.daysChange]: daysChange,
      })}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      type={type}
    >
      {title}
    </MuiButton>
  );
};
