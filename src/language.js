document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      hello: "Hello.",
      name: "My name is Msamuelsons",
      intro1: "I am currently an independent software developer. I am a Data Science professional with experience in Python, TensorFlow, Keras, and other technologies related to the field of data science. I have a solid track record of developing and implementing machine learning and deep learning models to solve complex problems and extract valuable insights from large volumes of data.",
      intro2: "You can follow me on <a href='https://www.linkedin.com/in/marcos-samuel-641a7a19a/' class='link-hover-effetct' target='_blank'>LinkedIn</a> or <a href='https://www.github.com/msamuelsons' target='_blank' class='link-hover-effetct'>GitHub</a> where I mainly post about Machine Learning and technologies in general."
    },
    pt: {
      hello: "Olá.",
      name: "Meu nome é Msamuelsons",
      intro1: "Sou um desenvolvedor de software independente atualmente. Sou um profissional de Data Science com  experiência em Python, TensorFlow, Keras e outras tecnologias relacionadas ao campo de ciência de dados. Tenho um sólido histórico de desenvolvimento e implementação de modelos de machine learning e deep learning para resolver problemas complexos e extrair insights valiosos a partir de grandes volumes de dados.",
      intro2: "Você pode me seguir no <a href='https://www.linkedin.com/in/marcos-samuel-641a7a19a/' class='link-hover-effetct' target='_blank'>Linkedin</a>  ou <a href='https://www.github.com/msamuelsons' target='_blank' class='link-hover-effetct'>GitHub</a> onde eu posto principalmente sobre Machine Learning e tecnologias em geral."
    }
  };

  const languageToggle = document.getElementById('language-toggle');
  let currentLanguage = 'pt';

  const updateText = () => {
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      element.innerHTML = translations[currentLanguage][key];
    });
  };

  languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    languageToggle.textContent = currentLanguage === 'pt' ? '🇺🇸' : '🇧🇷';
    updateText();
  });

  updateText();
});
