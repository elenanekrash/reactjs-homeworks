import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            home: {
                title: "Beautiful food & takeaway, delivered to your door.",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                button: "Place an Order",
                trustpilot: "Trustpilot",
                trustpilotScore: "4.8 out of 5 based on 2000+ reviews"
            },
            navbar: {
                home: "Home",
                menu: "Menu",
                order: "Order",
                login: "Login",
                brand: "Delivery"
            },
            footer: {
                company: "Company",
                template: "Template",
                flowbase: "Flowbase",
                home: "Home",
                order: "Order",
                faq: "FAQ",
                contact: "Contact",
                styleGuide: "Style Guide",
                changelog: "Changelog",
                licence: "Licence",
                webflowUniversity: "Webflow University",
                moreCloneables: "More Cloneables"
            }
        }
    },
    lt: {
        translation: {
            home: {
                title: "Gražus maistas ir išsinešimas, pristatomas į jūsų duris.",
                description: "Lorem Ipsum yra tik teksto vietos užpildas.",
                button: "Pateikti užsakymą",
                trustpilot: "Trustpilot",
                trustpilotScore: "4,8 iš 5, remiantis 2000+ atsiliepimų"
            },
            navbar: {
                home: "Pagrindinis",
                menu: "Meniu",
                order: "Užsakymas",
                login: "Prisijungti",
                brand: "Pristatymas"
            },
            footer: {
                company: "Įmonė",
                template: "Šablonas",
                flowbase: "Flowbase",
                home: "Pagrindinis",
                order: "Užsakymas",
                faq: "DUK",
                contact: "Kontaktai",
                styleGuide: "Stiliaus vadovas",
                changelog: "Pakeitimų žurnalas",
                licence: "Licencija",
                webflowUniversity: "Webflow Universitetas",
                moreCloneables: "Daugiau klonų"
            }
        }
    },
    es: {
        translation: {
            home: {
                title: "Comida deliciosa y para llevar, entregada a su puerta.",
                description: "Lorem Ipsum es simplemente texto de relleno.",
                button: "Hacer un pedido",
                trustpilot: "Trustpilot",
                trustpilotScore: "4.8 de 5 basado en más de 2000 reseñas"
            },
            navbar: {
                home: "Inicio",
                menu: "Menú",
                order: "Pedido",
                login: "Iniciar sesión",
                brand: "Entrega"
            },
            footer: {
                company: "Empresa",
                template: "Plantilla",
                flowbase: "Flowbase",
                home: "Inicio",
                order: "Pedido",
                faq: "FAQ",
                contact: "Contacto",
                styleGuide: "Guía de estilo",
                changelog: "Registro de cambios",
                licence: "Licencia",
                webflowUniversity: "Universidad Webflow",
                moreCloneables: "Más clonables"
            }
        }
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });

export default i18n;
