import styles from '../app/App.module.scss';
import Contacts from '../pages/contacts/Contacts';
import Header from '../components/layout/header/Header';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';

function App() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main_box}>
				<div className={styles.ava_block}></div>
				<About />
				<Projects />
				<Contacts />
			</main>
		</div>
	);
}

export default App;
