import styles from './App.module.css';
import { Field, Informatin, Restart } from './components';

export const AppLayout = () => {
	return (
		<header className={styles.header}>
			<Informatin />
			<Field />
			<Restart />
		</header>
	);
};
