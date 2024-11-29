const translations = {
    es: {
        "page-title": "Catálogo Compacto",
        "language-label": "Idioma:",
        "catalog-title": "Catálogo de Productos",
        "personal-info": "Correo: negocioscorlop@gmail.com",
        "product-1-title": "Lámpara de calle nevada",
        "product-2-title": "Luces LED",
        "product-3-title": "Echo pop, Altavoz con alexa",
        "product-4-title": "Lámpara de lava",
        "product-5-title": "Quitapelusas Philips",
        "product-6-title": "Lámpara de pared de animales",
        "product-7-title": "Lámpara de luna",
        "product-8-title": "Lámpara Snitch dorada HP",  
        "product-9-title": "Lámpara de creeper",  
        "product-10-title": "Bombilla LED inteligente",      
        "footer": "&copy; 2024 Tu Catálogo. Todos los derechos reservados."
      },
      en: {
        "page-title": "Compact Catalog",
        "language-label": "Language:",
        "catalog-title": "Product Catalog",
        "personal-info": "Email: negocioscorlop@gmail.com",
        "product-1-title": "Snowy street lamp",
        "product-2-title": "LED lights",
        "product-3-title": "Echo pop, speakerphone with Alexa",
        "product-4-title": "Lava lamp",
        "product-5-title": "Philips lint remover",
        "product-6-title": "Animal wall lamp",
        "product-7-title": "Moon lamp",
        "product-8-title": "Golden Snitch lamp HP",
        "product-9-title": "Creeper lamp",     
        "product-10-title": "Intelligent LED bulb",   
        "footer": "&copy; 2024 Your Catalog. All rights reserved."
      },
      fr: {
        "page-title": "Catalogue Compact",
        "language-label": "Langue:",
        "catalog-title": "Catalogue de Produits",
        "personal-info": "Email: negocioscorlop@gmail.com",
        "product-1-title": "Lampe de rue enneigée",
        "product-2-title": "Lumières LED",
        "product-3-title": "Echo pop, enceinte avec Alexa",
        "product-4-title": "Lampe à lave",
        "product-5-title": "Philips lint remover",
        "product-6-title": "Lampe murale animalière",
        "product-7-title": "Lampe de lune",
        "product-8-title": "Lampe du mouchard d'or HP",
        "product-9-title": "Lampe creeper",     
        "product-10-title": "Ampoule LED intelligente",   
        "footer": "&copy; 2024 Votre Catalogue. Tous droits réservés."
      },
      pr: {
        "page-title": "Catálogo Compacto",
        "language-label": "Língua:",
        "catalog-title": "Catálogo de Produtos",
        "personal-info": "Correo: negocioscorlop@gmail.com",
        "product-1-title": "Candeeiro de calle nevada",
        "product-2-title": "Luzes LED",
        "product-3-title": "Echo pop, altifalante com Alexa",
        "product-4-title": "Lâmpada de lava",
        "product-5-title": "Removedor de cotão Philips",
        "product-6-title": "Candeeiro de parede para animais",
        "product-7-title": "Candeeiro da lua",
        "product-8-title": "Lâmpada do pomo de ouro HP",
        "product-9-title": "Lâmpada creeper",  
        "product-10-title": "Lâmpada LED inteligente",      
        "footer": "&copy; 2024 O seu catálogo. Todos os direitos reservados."
      }

    }

  // Detecta cambios en el selector de idioma
  document.getElementById('language').addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    updateLanguage(selectedLang);
  });

  function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
      const key = element.getAttribute('data-lang');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
  }

  // Inicializa el idioma por defecto (Español)
  document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('es');
  });
