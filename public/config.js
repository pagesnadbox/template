window.com = window.com || {}
window.com.config = {
    "app": {
        "publicPath": "/pagesandbox-v2/",
        "componentName": "BaseApp",
        "id": "app",
        "bar": {
            "componentName": "BaseAppBar",
            "id": "app-bar",
            "hideOnScroll": true,
            "visible": true,
            "height": "80",
            "dark": false,
            "logo": {
                "componentName": "BaseVuetifyImg",
                "id": "app-bar-logo",
                "mobileHeight": "50",
                "height": "50",
                "maxWidth": "50",
                "src": "/assets/pagesandbox_logo.png"
            },
            "heading": {
                "componentName": "BaseHeading",
                "size": "text-h6",
                "mobileSize": "text-h6",
                "weight": "medium",
                "space": "0",
                "id": "app-bar-heading",
                "title": "PageSandbox",
                "align": "center"
            }
        },
        "footer": {
            "id": "app-footer",
            "visible": true
        },
        "list": {
            "editable": true,
            "id": "app-list",
            "items": [
                {
                    "id": "hero-img",
                    "title": "Hero",
                    "componentName": "BaseImage",
                    "key": "hero"
                },
                {
                    "id": "themeFeatures",
                    "title": "Theme Features",
                    "componentName": "BaseSection",
                    "key": "theme-features"
                },
                {
                    "id": "features",
                    "componentName": "BaseSection",
                    "title": "Features",
                    "key": "features"
                },
                {
                    "id": "affiliates",
                    "title": "Affiliates",
                    "componentName": "BaseSection",
                    "key": "affiliates"
                },
                {
                    "id": "social",
                    "componentName": "BaseSection",
                    "title": "Social Media",
                    "key": "social-media"
                }
            ]
        },
        "dark": false,
        "primary": "#50778D"
    },
    "themeFeatures": {
        "id": "themeFeatures",
        "componentName": "BaseSection",
        "space": "100",
        "heading": {
            "componentName": "BaseHeading",
            "id": "themeFeatures-heading",
            "space": "0",
            "title": "What it offers",
            "subtitle": "Theme Features or",
            "align": "center",
            "text": "In this section you should explain what your product is offering and why it's worth it.",
            "editableProps": false
        },
        "list": {
            "componentName": "BaseList",
            "cols": "1",
            "md": "2",
            "id": "themeFeatures-list",
            "editable": true,
            "items": [
                {
                    "iconDark": null,
                    "title": "It's free",
                    "componentName": "BaseAvatarCard",
                    "outlined": true,
                    "editableProps": false,
                    "id": "themeFeatures-list-items",
                    "icon": "mdi-tag-heart-outline",
                    "src": "",
                    "srcDark": "",
                    "height": "",
                    "align": "center",
                    "text": "That's right, it is currently free to tweak and download."
                },
                {
                    "componentName": "BaseAvatarCard",
                    "outlined": true,
                    "editableProps": false,
                    "id": "themeFeatures-list-items",
                    "title": "No-Code approach",
                    "icon": "mdi-code-tags",
                    "align": "center",
                    "text": "Build your landing page code free (No-Code). Just click and tweak things. You could then download the bundled resources and host them on to your needs.",
                    "iconDark": false
                },
                {
                    "title": "Accessibility Ready",
                    "componentName": "BaseAvatarCard",
                    "outlined": true,
                    "editableProps": false,
                    "id": "themeFeatures-list-items",
                    "icon": "mdi-wheelchair-accessibility",
                    "align": "center",
                    "text": "Accessibility features are meant to make the use of technology less challenging for those with disabilities."
                },
                {
                    "color": "primary_pagesandbox",
                    "title": "Responsive Web Design",
                    "componentName": "BaseAvatarCard",
                    "outlined": true,
                    "editableProps": false,
                    "id": "themeFeatures-list-items",
                    "icon": "mdi-pencil-box-outline",
                    "align": "center",
                    "text": "Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
                    "iconDark": true
                },
                {
                    "title": "Simple and easy to use",
                    "componentName": "BaseAvatarCard",
                    "outlined": true,
                    "editableProps": false,
                    "id": "themeFeatures-list-items",
                    "icon": "mdi-responsive",
                    "align": "center",
                    "text": "With Page Launch it's really hard to go wrong in with building your landing page. It's designed to follow the technical and conceptual best practices out of the box"
                },
                {
                    "title": "SEO Friendly",
                    "componentName": "BaseAvatarCard",
                    "outlined": true,
                    "editableProps": false,
                    "id": "themeFeatures-list-items",
                    "icon": "mdi-cloud-search-outline",
                    "align": "center",
                    "text": "Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic (known as \"natural\" or \"organic\") to a website or a web page from search engines."
                }
            ]
        },
        "dark": false
    },
    "hero": {
        "componentName": "BaseHero",
        "id": "hero",
        "aggregations": [
            "img",
            "heroContainer"
        ],
        "space": 0,
        "overlay": true,
        "height": "900",
        "src": "bg.png",
        "srcDark": "/assets/office_bg.jpg",
        "heroContainer": {
            "dark": true,
            "align": "center",
            "componentName": "BaseHeroContainer",
            "maxWidth": "1000px",
            "id": "hero-heroContainer",
            "cols": "1",
            "md": "1",
            "aggregations": [
                "subheading",
                "heading",
                "body",
                "actions"
            ],
            "subheading": {
                "id": "hero-heroContainer-subheading",
                "componentName": "BaseTitle",
                "tagName": "base-subheading",
                "weight": "regular",
                "title": "LAUNCH YOUR LANDING PAGE IN A MINUTES"
            },
            "heading": {
                "id": "hero-heroContainer-heading",
                "componentName": "BaseHeading",
                "tagName": "base-heading",
                "space": "4",
                "size": "text-h2",
                "title": "WELCOME TO PAGESANDBOX",
                "weight": "medium"
            },
            "body": {
                "id": "hero-heroContainer-body",
                "componentName": "BaseBody",
                "tagName": "base-body",
                "text": "It often happens that you have many business ideas, but limited time to validate them? With Page Launch you don't waste valuable time creating a landing page. You can get it instantly"
            },
            "actions": {
                "id": "hero-heroContainer-actions",
                "tagName": "base-actions",
                "componentName": "BaseActions",
                "horizontal": true,
                "mainAction": true,
                "secondaryAction": true,
                "emailFormAction": false,
                "linkAction": false,
                "emailForm": {
                    "componentName": "BaseEmailForm",
                    "id": "emailForm",
                    "input": {
                        "componentName": "BaseInput",
                        "id": "input",
                        "solo": true,
                        "name": "email",
                        "minWidth": "400"
                    },
                    "submit": {
                        "componentName": "BaseBtn",
                        "blockOnMobile": true,
                        "id": "submit",
                        "text": "subscribe",
                        "color": "primary_pagesandbox",
                        "target": true,
                        "size": "x-large"
                    }
                },
                "link": {
                    "componentName": "BaseLink",
                    "href": "https://vuetifyjs.com",
                    "openInNewTab": true,
                    "id": "link"
                },
                "main": {
                    "componentName": "BaseBtn",
                    "id": "main",
                    "text": "Discover More",
                    "depressed": false,
                    "tile": false,
                    "color": "",
                    "target": true,
                    "size": "x-large",
                    "dark": true,
                    "outlined": true
                },
                "secondary": {
                    "componentName": "BaseBtn",
                    "id": "secondary",
                    "tile": true,
                    "color": "#B1B1B1FF",
                    "text": "Get Started Now",
                    "textOnly": true,
                    "target": true,
                    "size": "normal"
                }
            }
        },
        "img": {
            "height": "400",
            "id": "hero-img",
            "componentName": "BaseImg",
            "src": "/assets/logo.svg",
            "hidden": true
        },
        "color": ""
    },
    "features": {
        "color": "#080C19",
        "componentName": "BaseSection",
        "space": "100",
        "dark": true,
        "heading": {
            "componentName": "BaseSectionHeading",
            "space": "4",
            "title": "How it works",
            "align": "center",
            "text": "You can try the builder directly from this page. The most effective way to make your landing page is to break it down into components. Just press \"E\" or use the settings button in the top right corner.    Let's see which are the building blocks of a successful landing page.",
            "editableProps": false,
            "dark": true
        },
        "list": {
            "componentName": "BaseList",
            "id": "features-list",
            "cols": "1",
            "md": "4",
            "editable": true,
            "items": [
                {
                    "componentName": "BaseInfoCard",
                    "id": "features-list-items",
                    "editableProps": false,
                    "align": "center",
                    "icon": "mdi-keyboard-outline",
                    "title": "The Hero Section",
                    "text": "This is the first thing your clients will see. Its goal is to get their attention. It consists of big title, subtitle (optional), short description with big picture on background or some fancy illustration and a one or two Call-To-Action.",
                    "color": "#50778D"
                },
                {
                    "componentName": "BaseInfoCard",
                    "editableProps": false,
                    "align": "center",
                    "id": "features-list-items",
                    "icon": "mdi-camera-outline",
                    "title": "The \"How it works\" Section",
                    "text": "This is where you show how you achieve the said in the Hero section. For example, this is the section you are reading now. With Page Launch you build landing code free, you just click and tweak things with the mouse. You could then download the bundled resources.",
                    "color": "#50778D"
                },
                {
                    "componentName": "BaseInfoCard",
                    "editableProps": false,
                    "align": "center",
                    "id": "features-list-items",
                    "icon": "mdi-pencil-outline",
                    "title": "The \"What it offers\" section",
                    "text": "This is where you convince your visitors WHY they should convert on your landing page, clear copy is key. In this case it was the previous section.",
                    "color": "#50778D"
                },
                {
                    "componentName": "BaseInfoCard",
                    "editableProps": false,
                    "align": "center",
                    "id": "features-list-items",
                    "icon": "mdi-puzzle-outline",
                    "title": "Social Proof",
                    "text": "In this section, you need to show that you can be trusted. And the best way to do so is to show the companies that have trust in you. Don't lie, for example my section would still be empty as you could be the first customer.",
                    "color": "#50778D"
                }
            ]
        }
    },
    "affiliates": {
        "componentName": "BaseSection",
        "space": "100",
        "heading": {
            "componentName": "BaseSectionHeading",
            "space": "4",
            "title": "Who's using Zero?",
            "editableProps": false
        },
        "list": {
            "componentName": "BaseList",
            "id": "affiliates-list",
            "editable": true,
            "items": [
                {
                    "componentName": "BaseImage",
                    "id": "affiliates-list-items",
                    "src": "/assets/omurtag-logo-light.png",
                    "title": "Affiliate Name",
                    "icon": "mdi-account-convert"
                },
                {
                    "componentName": "BaseImage",
                    "id": "affiliates-list-items",
                    "src": "/assets/omurtag-logo-light.png",
                    "title": "Affiliate Name",
                    "icon": "mdi-account-convert"
                },
                {
                    "componentName": "BaseImage",
                    "id": "affiliates-list-items",
                    "src": "/assets/omurtag-logo-light.png",
                    "title": "Affiliate Name",
                    "icon": "mdi-account-convert"
                },
                {
                    "componentName": "BaseImage",
                    "id": "affiliates-list-items",
                    "src": "/assets/omurtag-logo-light.png",
                    "title": "Affiliate Name",
                    "icon": "mdi-account-convert"
                },
                {
                    "componentName": "BaseImage",
                    "id": "affiliates-list-items",
                    "src": "/assets/omurtag-logo-light.png",
                    "title": "Affiliate Name",
                    "icon": "mdi-account-convert"
                },
                {
                    "componentName": "BaseImage",
                    "id": "affiliates-list-items",
                    "src": "/assets/omurtag-logo-light.png",
                    "title": "Affiliate Name",
                    "icon": "mdi-account-convert"
                }
            ]
        }
    },
    "social": {
        "componentName": "BaseSection",
        "color": "#080C19",
        "space": "50",
        "dark": true,
        "heading": {
            "componentName": "BaseSectionHeading",
            "space": "4",
            "editableProps": false,
            "align": "center",
            "title": "Social Media",
            "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut repudiandae illo error obcaecati dolores voluptate, tempore."
        },
        "actions": {
            "componentName": "BaseActions",
            "id": "social-actions",
            "mainAction": true,
            "secondaryAction": false,
            "horizontal": false,
            "linkAction": true,
            "link": {
                "componentName": "BaseLink",
                "href": "https://vuetifyjs.com",
                "openInNewTab": true,
                "id": "social-actions-link"
            },
            "main": {
                "componentName": "BaseBtn",
                "color": "primary",
                "id": "main",
                "text": "Follow Us",
                "openInNewTab": true,
                "iconSrc": "mdi-open-in-new",
                "href": "https://twitter.com/vuetifyjs",
                "minWidth": "168"
            },
            "secondary": {
                "componentName": "BaseBtn",
                "id": "secondary",
                "text": "Discover More",
                "depressed": true,
                "tile": true,
                "color": "primary_pagesandbox",
                "target": true
            }
        },
        "list": {
            "componentName": "BaseSlideList",
            "editable": true,
            "id": "social-list",
            "items": [
                {
                    "id": "social-list-items",
                    "componentName": "BaseIcon",
                    "icon": "mdi-twitter",
                    "title": "Twitter"
                },
                {
                    "id": "social-list-items",
                    "componentName": "BaseIcon",
                    "icon": "mdi-facebook",
                    "title": "Facebook"
                },
                {
                    "id": "social-list-items",
                    "componentName": "BaseIcon",
                    "icon": "mdi-youtube",
                    "title": "Youtube"
                },
                {
                    "id": "social-list-items",
                    "componentName": "BaseIcon",
                    "icon": "mdi-google",
                    "title": "Google"
                },
                {
                    "id": "social-list-items",
                    "componentName": "BaseIcon",
                    "icon": "mdi-linkedin",
                    "title": "Linkedin"
                }
            ]
        }
    },
    "footer": {
        "body": {
            "componentName": "BaseBody",
            "html": "Copyright &copy; 2021 Launch Page, LLC"
        }
    }
}