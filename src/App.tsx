/* eslint-disable react/function-component-definition */
import { FC } from 'react';
// components
import Content from 'components/Content';
import Sidebar from 'components/Sidebar';
// styles
import s from './App.module.scss';

const App: FC = () => (
	<div className={s.container}>
		<Sidebar />
		<Content />
	</div>
);

export default App;
