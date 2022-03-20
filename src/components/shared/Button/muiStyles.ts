export const MuiButtonStyles = {
	root: {
		'&.MuiButton-root': {
			marginRight: '15px',
			padding: '5px',
			fontSize: '15px',
			textAlign: 'center',
			color: '#000',
			marginBottom: '20px',
			marginTop: '20px',
			minWidth: '40px',

			'& .MuiTouchRipple-root': {
				display: 'none',
			},
		},
		'&.MuiButton-text': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			color: '#696969',
			fontWeight: 'bold',
		},
		'&.MuiButton-text:hover': {
			backgroundColor: 'rgba(236, 233, 233, 0.89)',
			color: '#000',
		},

		'&.MuiButton-outlined': {
			border: '1px solid #000',
			borderRadius: '20%',
		},
		'&.MuiButton-outlined:hover': {
			backgroundColor: 'rgba(236, 233, 233, 0.89)',
			border: '1px solid #000',

			color: '#000',
		},
	},
	active: {
		'&.MuiButton-text': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			color: '#000',
			fontWeight: 'bold',
		},

		'&.MuiButton-outlined': {
			border: '1px solid #000',
			borderRadius: '20%',
			color: '#FFF',
			backgroundColor: '#000',
		},
		'&.MuiButton-outlined:hover': {
			border: '1px solid #000',
			backgroundColor: '#000',
			color: '#FFF',
		},
	},
};
