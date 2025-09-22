/* Lightweight client-side i18n with per-element keys.
 * Usage: add data-i18n="key" for textContent, or data-i18n-html for innerHTML.
 * Optional: data-i18n-attr="aria-label" to translate an attribute.
 * Toggle language by calling window.setLang('en'|'fr') or clicking any element with [data-set-lang].
 */
(function(){
  const I18N = {
    en: {
      nav: {
        research: 'Research Portfolio',
        prints: 'Prints',
        portraits: 'Portraits',
        info: 'Info',
        photography: 'Photography',
        about: 'about',
        blog: 'blog',
        cv: 'cv',
        vitae: 'cv',
        dropdown: 'dropdown',
        projects: 'projects',
        publications: 'publications',
        repositories: 'repositories',
        talks: 'talks',
        teaching: 'teaching'
      },
      subtitle: {
        role: 'Cosmologist & Photographer',
        photo_line: 'Photographer • Fine‑art prints • Portrait sessions'
      },
      cta: {
        explore_prints: 'Explore Prints',
        selected_work: 'Selected Work',
        portrait_sessions: 'Portrait Sessions',
        meeting: 'Book a meeting',
        collaboration: 'Collaboration'
      },
      intro: {
        photography: 'I’m a PhD student in cosmological physics at the Institut d’Astrophysique de Paris. I work with the <a href="https://esa.int/Euclid/" class="underline pastel-link">Euclid Space Telescope</a> and develop statistical methods to answer some of the most fascinating questions in modern cosmology: What is dark energy, the mysterious component accelerating the Universe’s expansion? To what extent did neutrinos affect structure formation? If you want to know more about my research, feel free to <a class="underline pastel-link" href="https://hoellin.github.io/about/">visit my academic profile</a>. If you enjoy my photos, purchasing a print helps me focusing on my passions — also it’s an original gift idea —, I’d be deeply grateful. Any other enquiry? Contact me.',
        prints: 'I’m a PhD student in cosmological physics at the Institut d’Astrophysique de Paris. I work with the <a href="https://esa.int/Euclid/" class="underline pastel-link">Euclid Space Telescope</a> and develop statistical methods to answer some of the most fascinating questions in modern cosmology: What is dark energy, the mysterious component accelerating the Universe’s expansion? To what extent did neutrinos affect structure formation? If you want to know more about my research, feel free to <a class="underline pastel-link" href="https://hoellin.github.io/about/">visit my academic profile</a>. If you enjoy my photos, purchasing a print helps me focusing on my passions — also it’s an original gift idea —, I’d be deeply grateful. Any other enquiry? Contact me.',
        portraits_lead: 'To book a portrait session, propose a collaboration, or schedule a meeting, email <a class="underline pastel-link" href="mailto:hoellin.photo@gmail.com?subject=Portrait%20Session%20Enquiry">hoellin.photo@gmail.com</a>. I’ll reply promptly with availability and options.'
      },
      labels: {
        about: 'About',
        contact: 'Contact',
        bookings_contact: 'Bookings & Contact',
        imprint: 'Imprint & Terms',
        selection_get_own: 'Selection of portraits — <a class="underline pastel-link" href="mailto:hoellin.photo@gmail.com?subject=Portrait%20session%20enquiry">Get your own</a>.',
        buy_stripe: 'Buy via Stripe',
        rights: 'All rights reserved.',
        close: 'Close'
      },
      about: {
        intro1: 'I am a PhD candidate in Cosmology at the <a href="http://www.iap.fr/?langue=en">Institut d\'Astrophysique de Paris</a>, and a full member of the <a href="https://www.aquila-consortium.org">Aquila</a> and <a href="https://www.esa.int/Science_Exploration/Space_Science/Euclid">Euclid</a> consortia. I additionally serve as a teaching assistant in Mathematics at <a href="https://en.wikipedia.org/wiki/Sorbonne_Universityen">Sorbonne University</a>.',
        intro2: 'My doctoral research centres on safely enhancing cosmological simulations and inference using machine learning.',
        postdoc: 'Postdoctoral availability: October 2026.',
        photo1: 'Besides my academic work, I am a passionate photographer.',
        photo2: 'I meticulously craft <b>limited-edition</b> prints, which are <a href="/prints/">available for purchase.</a>'
      },
      photography: {
        about_blurb: 'Tempus fugit…',
        contact_blurb: 'For portrait sessions, collaborations, or general enquiries, email <a class="underline pastel-link" href="mailto:hoellin.photo@gmail.com">hoellin.photo@gmail.com</a>.'
      },
      prints_page: {
        about_blurb: 'Printed on archival fine‑art papers with pigment inks; editions limited to 30 per size. Each print ships with a signed certificate of authenticity.',
        contact_blurb: 'Book a meeting, propose a collaboration, or enquire about a portrait session:'
      },
      portraits_page: {
        about_blurb: 'Sessions are tailored to you; natural light, timeless results.',
        contact_blurb: 'For bookings and enquiries, email <a class="underline pastel-link" href="mailto:hoellin.photo@gmail.com">hoellin.photo@gmail.com</a>.'
      },
      talks: {
        invited: 'Invited',
        contributed: 'Selected Contributed Talks',
        others: 'Other Talks'
      },
      repos: {
        title: 'GitHub Repositories'
      },
      teaching: {
        title: 'Teaching'
      },
      titles: {
        publications: 'Publications'
      },
      prints: {
        info: 'I offer a small selection of limited‑edition, archival black‑and‑white photographic prints. For details and purchasing, please visit the dedicated page:'
      },
      footer: {
        last_updated: 'Last updated:'
      },
      news: {
        latest: 'latest',
        none: 'No news so far.',
        portfolio_live: 'My photography portfolio is now live.'
      }
    },
    fr: {
      nav: {
        research: 'Portfolio scientifique',
        prints: 'Tirages',
        portraits: 'Portraits',
        info: 'Infos',
        photography: 'Photographie',
        about: 'accueil',
        blog: 'blog',
        cv: 'cv',
        vitae: 'cv',
        dropdown: 'menu',
        projects: 'projets',
        publications: 'publications',
        repositories: 'github',
        talks: 'conférences',
        teaching: 'enseignement'
      },
      subtitle: {
        role: 'Cosmologue & Photographe',
        photo_line: 'Photographe • Tirages d’art • Séances portraits'
      },
      cta: {
        explore_prints: 'Découvrir les tirages',
        selected_work: 'Galerie',
        portrait_sessions: 'Séances Portrait',
        meeting: 'Prendre rendez‑vous',
        collaboration: 'Collaboration'
      },
      intro: {
        photography: 'Je suis doctorant en cosmologie à l’<span lang="fr">Institut d’Astrophysique de Paris</span>. Je travaille avec le <a href="https://esa.int/Euclid/" class="underline pastel-link">téléscope spatial Euclid</a>, et je conçois de nouvelles méthodes statistiques pour répondre à des questions physiques fondamentales : Qu’est‑ce que l’énergie noire, responsable de l\'accélération de l’expansion de l’Univers ? Quel est l\'effet des neutrinos sur la formation des structures cosmiques ? Pour en savoir plus, vous pouvez <a class="underline pastel-link force-light" href="/about/">jeter un oeil à mon profil académique</a>. Si mes photos vous plaisent et que vous êtes en quête d\'un cadeau original, vous pouvez commander un tirage sur papier d\'art.',
        prints: 'Je suis doctorant en cosmologie à l’<span lang="fr">Institut d’Astrophysique de Paris</span>. Je travaille avec le <a href="https://esa.int/Euclid/" class="underline pastel-link">téléscope spatial Euclid</a>, et je conçois de nouvelles méthodes statistiques pour répondre à des questions physiques fondamentales : Qu’est‑ce que l’énergie noire, responsable de l\'accélération de l’expansion de l’Univers ? Quel est l\'effet des neutrinos sur la formation des structures cosmiques ? Pour en savoir plus, vous pouvez <a class="underline pastel-link force-light" href="/about/">jeter un oeil à mon profil académique</a>. Si mes photos vous plaisent et que vous êtes en quête d\'un cadeau original, vous pouvez commander un tirage sur papier d\'art.',
        portraits_lead: 'Pour réserver une séance ou prendre un rendez‑vous, écrivez à <a class="underline pastel-link" href="mailto:hoellin.photo@gmail.com?subject=Portrait%20Session%20Enquiry">hoellin.photo@gmail.com</a>. Je vous répondrai rapidement avec mes disponibilités.'
      },
      labels: {
        about: 'À propos',
        contact: 'Contact',
        bookings_contact: 'Réservations & Contact',
        imprint: 'Mentions légales',
        selection_get_own: 'Sélection de portraits — <a class="underline pastel-link" href="mailto:hoellin.photo@gmail.com?subject=Portrait%20session%20enquiry">Réservez le vôtre</a>.',
        buy_stripe: 'Acheter via Stripe',
        rights: 'Tous droits réservés.',
        close: 'x'
      },
      about: {
        intro1: 'Je suis doctorant en cosmologie à l\'<a href="http://www.iap.fr/?langue=en">Institut d\'Astrophysique de Paris</a>, et membre des collaborations <a href="https://www.aquila-consortium.org">Aquila</a> et <a href="https://www.esa.int/Science_Exploration/Space_Science/Euclid">Euclid</a>. Je suis également chargé de TD en mathématiques à <a href="https://en.wikipedia.org/wiki/Sorbonne_University">Sorbonne Université</a>.',
        intro2: 'Ma recherche porte sur le développement de méthodes fiables pour maximiser l\'information extraite des grands relevés de galaxies.',
        postdoc: 'Disponibilité pour un postdoc : octobre 2026.',
        photo1: 'En parallèle à mes recherches, je suis photographe.',
        photo2: 'Je réalise des <b>tirages</b> qui sont disponibles à la vente en <a href="/prints/">éditions limitées</a>.'
      },
      photography: {
        about_blurb: 'Tempus fugit…',
        contact_blurb: 'Pour réserver une séance portrait, proposer une collaboration ou toute autre demande, écrivez à <a class="underline pastel-link" href="mailto:hoellin.photo@gmail.com">hoellin.photo@gmail.com</a>.'
      },
      prints_page: {
        about_blurb: 'Tirages sur papiers d’art ; éditions limitées à 30 par format. Chaque tirage est accompagné d’un certificat d’authenticité signé.',
        contact_blurb: 'Prendre rendez‑vous, proposer une collaboration ou demander une séance portrait :'
      },
      portraits_page: {
        about_blurb: 'Les séances sont soigneusement pensées en amont — n\'hésitez pas à proposer vos idées.',
        contact_blurb: 'Pour toute réservation ou demande, écrivez à <a class="underline pastel-link" href="mailto:hoellin.photo@gmail.com">hoellin.photo@gmail.com</a>.'
      },
      talks: {
        invited: 'Invitations',
        contributed: 'Contributions',
        others: 'Autres'
      },
      repos: {
        title: 'Dépôts GitHub'
      },
      titles: {
        publications: 'Publications'
      },
      prints: {
        info: 'Je propose une petite sélection de tirages photographiques en noir et blanc, d’archives et en éditions limitées. Pour les détails et l’achat, veuillez consulter la page dédiée :'
      },
      footer: {
        last_updated: 'Dernière mise à jour :'
      },
      news: {
        latest: 'actualités',
        none: 'Rien pour le moment.',
        portfolio_live: 'Mon portfolio de photos est en ligne !'
      }
    }
  };

  function get(obj, path){
    return path.split('.').reduce((o,k)=> (o && k in o) ? o[k] : undefined, obj);
  }

  function applyTranslations(lang){
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      try {
        const key = el.getAttribute('data-i18n');
        const html = el.hasAttribute('data-i18n-html');
        const val = get(dict, key);
        if (typeof val === 'string') {
          if (html) { el.innerHTML = val; }
          else { el.textContent = val; }
        }
        const attr = el.getAttribute('data-i18n-attr');
        if (attr) {
          const v2 = get(dict, key + '.attr') || get(dict, key);
          if (typeof v2 === 'string') { el.setAttribute(attr, v2); }
        }
      } catch (e) {
        // Fail gracefully on a single element so others still translate
      }
    });
    // Update toggle labels
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.textContent = (lang === 'en') ? 'FR' : 'EN';
      btn.setAttribute('aria-label', (lang === 'en') ? 'Basculer en français' : 'Switch to English');
    });
  }

  function setLang(lang){
    try { localStorage.setItem('lang', lang); } catch(e){}
    document.documentElement.setAttribute('lang', lang);
    applyTranslations(lang);
    // Reveal content once translations are applied
    try { document.documentElement.classList.remove('i18n-pending'); } catch(e){}
  }

  window.setLang = setLang;

  document.addEventListener('click', function(e){
    const t = e.target.closest('[data-set-lang]');
    if(!t) return;
    if(t.tagName === 'A') { e.preventDefault(); }
    const current = (localStorage.getItem('lang') || document.documentElement.getAttribute('lang') || 'en');
    setLang(current === 'en' ? 'fr' : 'en');
  });

  (function initI18N(){
    const run = function(){
      const lang = localStorage.getItem('lang') || document.documentElement.getAttribute('lang') || 'en';
      setLang(lang);
      // Extra safety: re-apply once after full load (e.g., if late DOM changes)
      try { window.addEventListener('load', function(){ setLang(localStorage.getItem('lang') || document.documentElement.getAttribute('lang') || 'en'); }); } catch(e){}
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  })();
})();
