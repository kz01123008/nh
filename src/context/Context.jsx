import React, { useState } from 'react';
import MensajeIngles from './../language/en.json';
import MensajeEspañol from './../language/es.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    // Thiết lập giá trị mặc định
    let localePorDefecto = 'en-US'; 
    let mensajesPorDefecto = MensajeIngles;

    // Lấy ngôn ngữ từ localStorage nếu có
    const lang = localStorage.getItem('lang');

    if (lang) {
        localePorDefecto = lang;

        if (lang === 'es-ES') {
            mensajesPorDefecto = MensajeEspañol;
        } else if (lang === 'en-US') {
            mensajesPorDefecto = MensajeIngles;
        }
    }

    // State để lưu trữ ngôn ngữ và messages
    const [mensaje, setMensaje] = useState(mensajesPorDefecto);
    const [locale, setLocale] = useState(localePorDefecto);

    // Hàm để chọn ngôn ngữ
    const selectLanguage = (language) => {
        switch (language) {
            case 'es-ES':
                setMensaje(MensajeEspañol);
                setLocale('es-ES');
                localStorage.setItem('lang', 'es-ES');
                break;
            case 'en-US':
                setMensaje(MensajeIngles);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMensaje(MensajeIngles);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    };

    return (
        <langContext.Provider value={{ selectLanguage }}>
            {/* IntlProvider sử dụng locale và messages */}
            <IntlProvider locale={locale} messages={mensaje}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export { LangProvider, langContext };
