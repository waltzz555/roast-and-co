import { ArrowDownRight, Clock3, MapPin } from 'lucide-react';

const featuredCoffee = [
  { name: 'Флэт уайт', note: 'двойной эспрессо · молоко', price: '1 750 ₸' },
  { name: 'Фильтр дня', note: 'Эфиопия · ягоды · какао', price: '1 450 ₸' },
  { name: 'Карамельный раф', note: 'сливки · карамель · ваниль', price: '2 150 ₸' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Roast & Co — на главную">
          <img src="/official-logo.jpg" alt="" aria-hidden="true" />
          Roast <span>&amp;</span> Co
        </a>
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#menu">Меню</a>
          <a href="#story">О нас</a>
          <a href="#visit">Контакты</a>
        </nav>
        <a className="header-cta" href="#visit">
          Как нас найти <ArrowDownRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Кофе свежей обжарки · каждый день</p>
          <h1>Ваше любимое<br />место для <em>паузы.</em></h1>
          <p className="hero-lead">
            Варим честный кофе, печём тёплую выпечку и создаём пространство,
            в котором хочется остаться чуть дольше.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#menu">Смотреть меню</a>
            <a className="text-link" href="#story">Узнать нашу историю <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>

        <div className="hero-art">
          <img
            src="/official-logo.jpg"
            alt="Официальный логотип Roast & Co — Freshly Roasted, Coffee Shop"
          />
        </div>

        <div className="hero-meta">
          <div><Clock3 aria-hidden="true" /><span>Ежедневно<br /><strong>08:00 — 22:00</strong></span></div>
          <div><MapPin aria-hidden="true" /><span>В самом сердце города<br /><strong>ул. Абая, 27</strong></span></div>
        </div>
      </section>

      <section className="menu-preview" id="menu">
        <div className="section-heading">
          <p className="eyebrow"><span /> Из нашей кофейной карты</p>
          <h2>Знакомые вкусы.<br /><em>Новый характер.</em></h2>
        </div>
        <div className="coffee-list">
          {featuredCoffee.map((coffee, index) => (
            <article className="coffee-row" key={coffee.name}>
              <span className="coffee-number">0{index + 1}</span>
              <div>
                <h3>{coffee.name}</h3>
                <p>{coffee.note}</p>
              </div>
              <strong>{coffee.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-photo">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85"
            alt="Свежесваренный кофе в керамической чашке"
            loading="lazy"
          />
          <span>Сделано с вниманием</span>
        </div>
        <div className="story-copy">
          <p className="story-kicker">Наша философия</p>
          <p className="story-quote">
            Мы верим, что хороший кофе — это не спешка, а маленький ежедневный ритуал.
          </p>
          <p className="story-body">
            Знаем происхождение каждого зерна, настраиваем помол каждое утро и всегда
            оставляем место для разговора.
          </p>
        </div>
      </section>

      <footer id="visit">
        <a className="wordmark footer-mark" href="#top">Roast <span>&amp;</span> Co</a>
        <p>Кофе. Люди. Хорошие паузы.</p>
        <div><span>ул. Абая, 27</span><span>+7 700 000 00 00</span><span>hello@roastandco.kz</span></div>
      </footer>
    </main>
  );
}
