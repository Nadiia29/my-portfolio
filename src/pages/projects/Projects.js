import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './Projects.module.scss';
import project1 from '../../assets/image/projects/pizza2.png';
import project2 from '../../assets/image/projects/linkUp.png';
import project3 from '../../assets/image/projects/shop3.png';
import project4 from '../../assets/image/projects/yoga.png';
import project5 from '../../assets/image/projects/autoMaster.png';
import project6 from '../../assets/image/projects/books.png';
import project7 from '../../assets/image/projects/finance.png';
import project8 from '../../assets/image/projects/build.png';

const projects = [
	{
		id: 1,
		title: '🍕 Сайт для замовлення піци',
		image: project1,
		github: 'https://nadiia29.github.io/react-pizza/',
		gitHubFileLink: 'https://github.com/Nadiia29/react-pizza/blob/main/src/redux/store.ts',
		code: `import { useDispatch } from 'react-redux';
				import { configureStore } from '@reduxjs/toolkit';
				import filter from './filter/slice';
				import cart from './cart/slice';
				import pizza from './pizza/slice';

				export const store = configureStore({
  					reducer: {
    					filter,
    					cart,
    					pizza,
  					},
				});

				export type RootState = ReturnType<typeof store.getState>;
				export type AppDispatch = typeof store.dispatch;
				export const useAppDispatch = () => useDispatch<AppDispatch>();`,
	},
	{
		id: 2,
		title: '🌐 Соціальна мережа (в розробці)',
		image: project2,
		github: 'https://github.com/yourusername/project-two',
		code: `function App() {
			const { isAuth, setIsAuth } = useAuth();

	useEffect(() => {
				setIsAuth(checkAuth());
				}, [setIsAuth]);

			return (
				<div className={styles.app}>
					<Header />
				{isAuth && <Sidebar />}

				<main className={styles.main}>
					<Routes>
						<Route path='/login' element={<LoginPage />} />`,
	},
	{
		id: 3,
		title: '🛍️ Інтернет-магазин',
		image: project3,
		github: 'https://nadiia29.github.io/Shop_CO/',
		code: `import React from 'react';
			const ProductCard = ({ product }) => (
 			 <div className="card">
   			 <h2>{product.name}</h2>
    		<p>{product.price} грн</p>
  			</div>
		);`,
	},
	{
		id: 4,
		title: '🧘‍♀️ Сторінка любителів йоги',
		image: project4,
		github: 'https://nadiia29.github.io/yoga-mind/',
		code: `<header id="header" class="header">
                    <div class="header__logo">
                        YogaMind
                    </div>
    
                    <nav class="header__menu">
                        <ul class="menu__list">
                            <li class="menu__item">
                                <a href="#Головна" class="menu__link">Головна</a>
                            </li>`,
	},
	{
		id: 5,
		title: '🔧 Автомайстерня',
		image: project5,
		github: 'https://nadiia29.github.io/auto-master/',
		code: `document.getElementById('theme-switch').addEventListener('change', function () {
				document.body.classList.toggle('light-theme', this.checked);
					});
		
			function togglePassword() {
				const passInput = document.getElementById('password');
					if (passInput.type === 'password') {
					passInput.type = 'text';
					} else {
					passInput.type = 'password';
			}
		}`,
	},
	{
		id: 6,
		title: '📚 Пошук та рецензії книг',
		image: project6,
		github: 'https://nadiia29.github.io/lidia/',
		code: ` <div class="wrapper">
        <header id="header" class="header">
            <div class="header__container">
                <a href="#header" class="header__logo">
                    <img src="img/Logo.png" alt="logo">
                </a>

                <nav class="header__menu menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <a href="#features" class="menu__link">Feature</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main class="page">
            <section class="page__hero hero">
                <div class="hero__container">
                    <div class="hero__content content-hero">
                        <h1 class="content__title">
                            Search & review your <a href="">fav book</a> effortlessly
                        </h1>
                        <a href="#" class="content-hero__button">
                            Start now →
                        </a>
                    </div>

                    <div class="hero__images images-hero">
                        <a href="#" class="images-hero__item  image-hero__item--01">
                            <img src="img/header_hero/hero_1.jpg" class="image-hero__image" alt="image">
                        </a>
                    </div>
                </div>
            </section>
            
            <section id="services" class="page__services services">
                <div class="services__container">
                    <div class="services__header-block header-block header-block--margin">
                        <div class="header-block__label">
                            SERVICES
                        </div>

                        <h2 class="header-block__title">
                            The Services for You
                        </h2>
                    </div>

                    <div class="services__items">
                        <article class="services__item">
                            <div class="services__image">
                                <img src="img/services/1.jpg" class="services__picture" alt="image">
                            </div>

                        </article>

                    </div>
                </div>
            </section>

            <section id="location" class="page__location location">
                <div class="location__container">
                    <div class="location__header-block header-block header-block--margin">
                        <div class="header-block__label">LOCATION</div>
                        <h2 class="header-block__title">Our Library Location</h2>
                    </div>

                    <iframe class="location__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.60044109002!2d23.73833935!3d37.9908372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2z0JDRhNC40L3Riywg0JPRgNC10YbQuNGP!5e0!3m2!1sru!2sua!4v1721660724855!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="footer__body">
                <div class="footer__container">`,
	},
	{
		id: 7,
		title: '💼 Фінансові послуги',
		image: project7,
		github: 'https://nadiia29.github.io/relvise/',
		code: `<body>
    	<div class="wrapper">
        	<header class="header">
          	 <div class="header__container _container">
              	<a href="" class="header__logo">
                  	  Relvise
               	 </a>

                <nav class="header__menu menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <a href="" class="menu__link">
                                Home
                            </a>
                        </li>`,
	},
	{
		id: 8,
		title: '🏗️ Нерухомість + інновації',
		image: project8,
		github: 'https://nadiia29.github.io/real-estate/',
		code: `<main class="page">
        <section class="page__main main-block">
            <div class="main-block__container">
                <div class="main-block__body body-main-block">
                    <div class="body-main-block__content content-main-block">
                        <div class="content-main-block__body">
                            <div class="content-main-block__sub-title">
                                 RESIDENTIAL & OFFICE SPACES
                             </div>

                            <h1 class="content-main-block__title">
                                Smart Living Style for Smart People
                            </h1>

                            <div class="content-main-block__text">
                                Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms
                            </div>
                        </div>
                                
                        <form class="content-main-block__form form-main-block" action="#">
                            <input placeholder="Enter Zipcode to search properties" type="text" class="form-main-block__input">
                            <button type="submit" class="form-main-block__button">Search Now!</button>
                        </form>`,
	},
];

const ProjectsGrid = () => {
	return (
		<section className={styles.grid} id='projects'>
			<h2>Мої практичні роботи</h2>
			{projects.map(({ id, title, image, github, code, gitHubFileLink }) => (
				<div key={id} className={styles.cardWrapper}>
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.card}>
						<div className={styles.inner}>
							<div className={styles.front}>
								<img src={image} alt={title} className={styles.image} />
							</div>

							<div className={styles.back}>
								<a href={github} target='_blank' rel='noopener noreferrer'>
									View on GitHub
								</a>
								<a href={gitHubFileLink} target='_blank' rel='noopener noreferrer'>
									фрагмент коду на GitHub
								</a>
								{code && (
									<SyntaxHighlighter
										language='javascript'
										style={oneDark}
										wrapLongLines
									>
										{code}
									</SyntaxHighlighter>
								)}
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default ProjectsGrid;
