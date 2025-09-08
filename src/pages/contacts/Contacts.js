import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
	return (
		<section id='contact' className={styles.wrapper}>
			<h2>Контакти</h2>
			<p>
				Напишіть мені на пошту:
				<a href='nadiia.poshtova@gmail.com'> nadiia.poshtova@gmail.com</a>
			</p>
			<p>
				Профіль у LinkedIn:{' '}
				<a
					href=' https://www.linkedin.com/in/nadiia-poshtova-73b59224b/'
					target='_blank'
					rel='noopener noreferrer'
				>
					{' '}
					https://www.linkedin.com/in/nadiia-poshtova-73b59224b/
				</a>
			</p>
		</section>
	);
};

export default Contacts;
