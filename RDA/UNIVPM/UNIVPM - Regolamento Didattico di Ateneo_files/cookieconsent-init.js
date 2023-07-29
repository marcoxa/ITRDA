// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: document.querySelector("meta[name='DC.language']").getAttribute("content"),
    //current_lang: "it",
    autoclear_cookies: true,                   // default: false
    theme_css: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css',  // replace with a valid path
    theme_css: 'https://www.univpm.it/Entra/Templates/css/cookieconsent.css',  // replace with a valid path	
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                       // default: false
    // hide_from_bots: false,                  // default: false
     remove_cookie_tables: true ,               // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'Notice',
                description: 'We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for "basic interactions & functionalities", "experience enhancement", "measurement" and "targeting & advertising" as specified in the cookie policy. Denying consent may make related features unavailable. You can freely give, deny, or withdraw your consent at any time. <button type="button" data-cc="c-settings" class="cc-link">Learn more and customise</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Your consent preferences',
                        description: 'The following panel allows you to customise your consent preferences for any tracking technology used to help us achieve the features and activities described below. To learn more about how these trackers help us and how they work, refer to the <a href="https://www.univpm.it/Entra/Cookie" class="cc-link">cookie policy</a>. You may review and change your choices at any time. Please be aware that denying consent for a particular purpose may make related features unavailable. '
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Distinguish users',
                                is_regex: true
                            },
                            {
                                col1: '_ga_#',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Track the pages viewed',
                            }
                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/Contacts">contact us</a>.',
                    }
                ]
            }
        },
        'it': {
            consent_modal: {
                title: 'Informativa',
                description: 'Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalit&agrave tecniche e, con il tuo consenso, anche per altre finalit&agrave come specificato nella cookie policy.<br />Puoi acconsentire all\'utilizzo di tali tecnologie utilizzando il pulsante "Accetta". <br /><br /> <button type="button" data-cc="c-settings" class="cc-link">Personalizza</button>',
                primary_btn: {
                    text: 'Accetta',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Rifiuta',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Preferenze',
                save_settings_btn: 'Salva impostazioni',
                accept_all_btn: 'Accetta tutti',
                reject_all_btn: 'Rifiuta tutti',
                close_btn_label: 'Chiudi',
                cookie_table_headers: [
                    {col1: 'Nome'},
                    {col2: 'Dominio'},
                    {col3: 'Scadenza'},
                    {col4: 'Descrizione'}
                ],
                blocks: [
                    {
                        title: 'Utilizzo dei cookie',
                        description: 'Utilizziamo i cookie per assicurare le funzionalit&agrave; base del sito e fornire la miglior esperienza possibile nella navigazione. Puoi modificare le impostazioni ogni volta che vuoi. Per maggiori dettagli su Cookie e altri dati sensibili, &egrave possibile fare riferimento alla pagina <a href="https://www.univpm.it/Entra/Cookie" class="cc-link">cookie policy</a> del sito.'
                    }, {
                        title: 'Cookies strettamente necessari',
                        description: 'Questi cookie sono essenziali per il corretto funzionamento del sito web. Senza questi cookie, il sito web non funzionerebbe correttamente',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Misurazione',
                        description: 'Questi strumenti di tracciamento permettono di misurare il traffico e analizzare il comportamento dell\'utente con l\'obiettivo di migliorare il nostro servizio.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Registra un ID univoco utilizzato per generare dati statistici su come il visitatore utilizza il sito internet.',
                                is_regex: true
                            },
                            {
                                col1: '_ga_#',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Utilizzato da Google Analytics per raccogliere dati sul numero di volte che un utente ha visitato il sito internet, oltre che le dati per la prima visita e la visita più recente.',
                            }
                        ]
                    }, {
                        title: 'Cookies di terze parti',
                        description: 'Sono cookie di entit&agrave; terze che possono essere installati in caso, per esempio, di condivisione/visualizzazione di elementi su piattaforme esterne (es. Facebook, YouTube)',
                        toggle: {
                            value: 'thirdparts',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Ulteriori informazioni',
                        description: 'I cookie tecnici, i cookie di terze parti legati alla presenza dei "social plugin" e gli analytics sono gli unici cookie che il sito web utilizza per rendere piacevole la navigazione dell\'utente. Non sono utilizzati invece cookie di profilazione.',
                    }
                ]
            }
        }
    },

    gui_options: {
        consent_modal: {
            layout: 'cloud',               // box/cloud/bar
            position: 'bottom center',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    }
    
}); 