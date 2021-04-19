export default {
    app: {
        bar: {
            hideOnScroll: true,
            visible: true,
            height: '80',
            dark: false,
            logo: {
                mobileHeight: '50',
                height: '50',
                maxWidth: "50",
                src: './assets/pagesandbox_logo.png',
            },
            heading: {
                size: "text-h6",
                mobileSize: "text-h6",
                weight: "medium",
                space: "0",
                id: "app-bar-heading",
                title: 'PageSandbox'
            }
        },
        footer: {
            visible: true,
        },
        list: {
            editable: true,
            id: "app-list",
            items: [
                {
                    id: "app-list-items",
                    title: 'Hero',
                    componentName: 'BaseImage',
                    id: 'hero-img',
                    key: 'hero',
                },
                {
                    id: "app-list-items",
                    title: 'Theme Features',
                    componentName: 'BaseSection',
                    id: 'themeFeatures',
                    key: 'theme-features',
                },
                {
                    id: "app-list-items",
                    componentName: 'BaseSection',
                    title: 'Features',
                    id: 'features',
                    key: 'features',
                },
                {
                    id: "app-list-items",
                    title: 'Affiliates',
                    componentName: 'BaseSection',
                    id: 'affiliates',
                    key: 'affiliates',
                },
                {
                    id: "app-list-items",
                    componentName: 'BaseSection',
                    title: 'Social Media',
                    id: 'social',
                    key: 'social-media',
                },
            ],
        },
    },

    themeFeatures: {
        color: '#00000000',
        space: '100',
        heading: {
            space: "0",
            outlined: true,
            title: 'What it offers',
            subtitle: `Theme Features or`,
            align: 'center',
            text: `In this section you should explain what your product is offering and why it's worth it.`,
            editableProps: false,
        },
        list: {
            cols: '1',
            md: '2',
            id: 'themeFeatures-list',
            editable: true,
            items: [
                {
                    title: `It's free`,
                    componentName: 'BaseAvatarCard',
                    outlined: true,
                    editableProps: false,
                    id: 'themeFeatures-list-items',
                    icon: 'mdi-tag-heart-outline',
                    src: "",
                    srcDark: "",
                    height: "",
                    align: 'center',
                    text: `That's right, it is currently free to tweak and download.`,
                },
                {
                    componentName: 'BaseAvatarCard',
                    outlined: true,
                    editableProps: false,
                    id: 'themeFeatures-list-items',
                    title: 'No-Code approach',
                    icon: 'mdi-code-tags',
                    align: 'center',
                    text: `Build your landing page code free (No-Code). Just click and tweak things. You could then download the bundled resources and host them on to your needs.`,
                },
                {
                    title: 'Accessibility Ready',
                    componentName: 'BaseAvatarCard',
                    outlined: true,
                    editableProps: false,
                    id: 'themeFeatures-list-items',
                    icon: 'mdi-wheelchair-accessibility',
                    align: 'center',
                    text: `Accessibility features are meant to make the use of technology less challenging for those with disabilities.`,
                },
                {
                    color: 'primary',
                    dark: true,
                    title: 'Responsive Web Design',
                    componentName: 'BaseAvatarCard',
                    outlined: true,
                    editableProps: false,
                    id: 'themeFeatures-list-items',
                    icon: 'mdi-pencil-box-outline',
                    align: 'center',
                    text: `Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.`,
                },
                {
                    title: 'Simple and easy to use',
                    componentName: 'BaseAvatarCard',
                    outlined: true,
                    editableProps: false,
                    id: 'themeFeatures-list-items',
                    icon: 'mdi-responsive',
                    align: 'center',
                    text: `With Page Launch it's really hard to go wrong in with building your landing page. It's designed to follow the technical and conceptual best practices out of the box`,
                },
                {
                    title: 'SEO Friendly',
                    componentName: 'BaseAvatarCard',
                    outlined: true,
                    editableProps: false,
                    id: 'themeFeatures-list-items',
                    icon: 'mdi-cloud-search-outline',
                    align: 'center',
                    text: `Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic (known as "natural" or "organic") to a website or a web page from search engines.`,
                }
            ],
        },

    },

    hero: {
        aggregations: [
            "img", "heroContainer"
        ],
        space: 0,
        overlay: true,
        height: '',
        src: './assets/office_bg.jpg',
        srcDark: './assets/office_bg.jpg',
        color: "",
        heroContainer: {
            dark: true,
            align: 'left',
            componentName: "BaseHeroContainer",
            maxWidth: '1300px',
            id: "hero-heroContainer",
            cols: "1",
            md: "1",
            aggregations: ['img', 'subheading', 'heading', 'body', 'actions'],
            img: {
                id: 'hero-heroContainer-img',
                height: '',
                componentName: "BaseImage",
                src: './assets/office_bg.jpg',
            },
            subheading: {
                id: 'hero-heroContainer-subheading',
                componentName: "BaseTitle",
                tagName: "base-subheading",
                weight: 'regular',
                title: 'LAUNCH YOUR LANDING PAGE IN A MINUTES',
            },
            heading: {
                id: 'hero-heroContainer-heading',
                componentName: "BaseHeading",
                tagName: "base-heading",
                space: "4",
                size: 'text-h2',
                title: 'WELCOME TO PAGE LAUNCH',
                weight: 'medium',
            },
            body: {
                id: 'hero-heroContainer-body',
                componentName: "BaseBody",
                tagName: "base-body",
                text: `It often happens that you have many business ideas, but limited time to validate them? With Page Launch you don't waste valuable time creating a landing page. You can get it instantly`,
            },
            actions: {
                id: 'hero-heroContainer-actions',
                tagName: "base-actions",
                componentName: "BaseActions",
                horizontal: true,
                mainAction: true,
                secondaryAction: true,
                emailFormAction: false,
                linkAction: false,
                emailForm: {
                    id: "emailForm",
                    input: {
                        id: "input",
                        solo: true,
                        name: "email",
                        minWidth: "400",
                    },
                    submit: {
                        blockOnMobile: true,
                        id: "submit",
                        text: 'subscribe',
                        color: 'primary',
                        target: true,
                        size: 'x-large',
                    }
                },
                link: {
                    href: 'https://vuetifyjs.com',
                    openInNewTab: true,
                    id: 'link',
                },
                main: {
                    id: "main",
                    text: 'Discover More',
                    depressed: true,
                    tile: true,
                    color: 'primary',
                    target: true,
                    size: 'x-large',
                },
                secondary: {
                    id: "secondary",
                    tile: true,
                    color: 'primary',
                    text: 'Get Started Now',
                    textOnly: true,
                    target: true,
                    size: 'normal',
                },
            }
        },
        img: {
            height: "400",
            id: "hero-img",
            componentName: "BaseImg",
            src: "assets/logo.svg"
        }
    },

    features: {
        color: '#050B1F',
        space: '100',
        dark: true,
        heading: {
            space: "4",
            outlined: true,
            color: '#00000000',
            title: 'How it works',
            // subtitle: `Just hold the "E" key (or use the gear on top left)`,
            align: 'center',
            text: `You can try the builder directly from this page.
          
          The most effective way to make your landing page is to break it down into components.
    
          Just press "E" or use the settings button in the top right corner. 
    
          Let's see which are the building blocks of a successful landing page.
          
          `,
            editableProps: false,
        },
        list: {
            id: "features-list",
            cols: '1',
            md: '4',
            editable: true,
            items: [
                {
                    componentName: 'BaseInfoCard',
                    id: 'features-list-items',
                    editableProps: false,
                    align: 'center',
                    icon: 'mdi-keyboard-outline',
                    title: 'The Hero Section',
                    text: 'This is the first thing your clients will see. Its goal is to get their attention. It consists of big title, subtitle (optional), short description with big picture on background or some fancy illustration and a one or two Call-To-Action.',
                },
                {
                    componentName: 'BaseInfoCard',
                    editableProps: false,
                    align: 'center',
                    id: 'features-list-items',
                    icon: 'mdi-camera-outline',
                    title: 'The "How it works" Section',
                    text: `This is where you show how you achieve the said in the Hero section. For example, this is the section you are reading now. With Page Launch you build landing code free, you just click and tweak things with the mouse. You could then download the bundled resources.`,
                },
                {
                    componentName: 'BaseInfoCard',
                    editableProps: false,
                    align: 'center',
                    id: 'features-list-items',
                    icon: 'mdi-pencil-outline',
                    title: 'The "What it offers" section',
                    text: 'This is where you convince your visitors WHY they should convert on your landing page, clear copy is key. In this case it was the previous section.',
                },
                {
                    componentName: 'BaseInfoCard',
                    editableProps: false,
                    align: 'center',
                    id: 'features-list-items',
                    icon: 'mdi-puzzle-outline',
                    title: 'Social Proof',
                    text: `In this section, you need to show that you can be trusted. And the best way to do so is to show the companies that have trust in you. Don't lie, for example my section would still be empty as you could be the first customer.`,
                },
            ],
        },
    },

    affiliates: {
        color: '#00000000',
        space: '50',
        heading: {
            space: "4",
            title: "Who's using Zero?",
            editableProps: false,
            color: '#00000000',
        },
        list: {
            id: "affiliates-list",
            editable: true,
            items: [
                {
                    componentName: 'BaseImage',
                    id: 'affiliates-list-items',
                    src: './assets/omurtag-logo-light.png',
                    title: 'Affiliate Name',
                    icon: 'mdi-account-convert',
                },
                {
                    componentName: 'BaseImage',
                    id: 'affiliates-list-items',
                    src: './assets/omurtag-logo-light.png',
                    title: 'Affiliate Name',
                    icon: 'mdi-account-convert',
                },
                {
                    componentName: 'BaseImage',
                    id: 'affiliates-list-items',
                    src: './assets/omurtag-logo-light.png',
                    title: 'Affiliate Name',
                    icon: 'mdi-account-convert',
                },
                {
                    componentName: 'BaseImage',
                    id: 'affiliates-list-items',
                    src: './assets/omurtag-logo-light.png',
                    title: 'Affiliate Name',
                    icon: 'mdi-account-convert',
                },
                {
                    componentName: 'BaseImage',
                    id: 'affiliates-list-items',
                    src: './assets/omurtag-logo-light.png',
                    title: 'Affiliate Name',
                    icon: 'mdi-account-convert',
                },
                {
                    componentName: 'BaseImage',
                    id: 'affiliates-list-items',
                    src: './assets/omurtag-logo-light.png',
                    title: 'Affiliate Name',
                    icon: 'mdi-account-convert',
                },
            ],
        },

    },

    social: {
        color: '#204165',
        space: '50',
        dark: true,
        heading: {
            space: "4",
            editableProps: false,
            color: '#00000000',
            align: 'center',
            title: 'Social Media',
            text: `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aspernatur recusandae aut repudiandae illo error obcaecati dolores
          voluptate, tempore.`,
        },
        actions: {
            id: "social-actions",
            mainAction: true,
            secondaryAction: false,
            horizontal: false,
            linkAction: true,
            link: {
                href: 'https://vuetifyjs.com',
                openInNewTab: true,
                id: 'social-actions-link',
            },
            main: {
                color: "primary",
                id: "main",
                text: 'Follow Us',
                openInNewTab: true,
                iconSrc: 'mdi-open-in-new',
                href: 'https://twitter.com/vuetifyjs',
                minWidth: '168',
            },
            secondary: {
                id: "secondary",
                text: 'Discover More',
                depressed: true,
                tile: true,
                color: 'primary',
                target: true,
            },
        },

        list: {
            editable: true,
            id: "social-list",
            items: [
                {
                    id: 'social-list-items',
                    componentName: 'BaseIcon',
                    icon: 'mdi-twitter',
                    title: 'Twitter',
                },
                {
                    id: 'social-list-items',
                    componentName: 'BaseIcon',
                    icon: 'mdi-facebook',
                    title: 'Facebook',
                },
                {
                    id: 'social-list-items',
                    componentName: 'BaseIcon',
                    icon: 'mdi-youtube',
                    title: 'Youtube',
                },
                {
                    id: 'social-list-items',
                    componentName: 'BaseIcon',
                    icon: 'mdi-google',
                    title: 'Google',
                },
                {
                    id: 'social-list-items',
                    componentName: 'BaseIcon',
                    icon: 'mdi-linkedin',
                    title: 'Linkedin',
                },
            ],
        },
    },

    footer: {
        body: {
            html: 'Copyright &copy; 2021 Launch Page, LLC',
        },
    },

}