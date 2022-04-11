/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
// styles
import cx from 'classnames';
import { makeStyles } from '@mui/styles';
import { MuiButtonStyles } from './muiStyles';

const useStyles = makeStyles(MuiButtonStyles);

type ButtonProps = {
	title?: string;
	onClick?: () => void;
	variant?: 'text' | 'outlined' | 'contained' | undefined;
	disabled?: boolean;
	type?: 'button' | 'reset' | 'submit' | undefined;
	active?: boolean;
	parentClassName?: boolean;
};

export const Button: FC<ButtonProps> = ({
	onClick,
	variant = 'outlined',
	disabled,
	type,
	title,
	active,
	parentClassName,
}) => {
	const classes = useStyles();
	return (
		<MuiButton
			className={cx(
				classes.root,
				{
					[classes.active]: active,
				},
				parentClassName && parentClassName
			)}
			onClick={onClick}
			variant={variant}
			disabled={disabled}
			type={type}
		>
			{title}
		</MuiButton>
	);
};
