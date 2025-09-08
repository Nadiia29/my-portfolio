import React from 'react';
import backgroundImage from '../../../assets/image/header-logo3.png';
import styles from '../header/Header.module.scss';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<header className={styles.header} style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className={styles.wrapper}>
				<h1>Portfolio by Nadiia Poshtova</h1>
				<nav className={styles.nav_header}>
					<Link to='about' smooth={true} duration={500}>
						Про мене
					</Link>
					<Link to='projects' smooth={true} duration={500}>
						Проєкти
					</Link>
					<Link to='contact' smooth={true} duration={500}>
						Контакти
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
