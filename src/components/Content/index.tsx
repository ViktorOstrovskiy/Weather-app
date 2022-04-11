/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import Header from 'components/Header';
import Widgets from 'components/Widgets';
// styles
import s from './Content.module.scss';

const Content: FC = () => (
	<div className={s.wrapper}>
		<div className={s.header}>
			<Header />
		</div>
		<h2>Todays Highlights</h2>
		<Widgets />
	</div>
);

export default Content;
