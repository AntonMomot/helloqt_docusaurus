import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const isProd = process.env.NODE_ENV === "production";

const config: Config = {
    title: "HelloQt Theme Documentation",
    tagline: "Theme documentation for HelloQt.de",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://AntonMomot.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/helloqt_docusaurus/",
    deploymentBranch: 'main',

    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    clientModules: ["./src/_global.ts"],

    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.ts",
                    include: ["**/*.md", "**/*.mdx"],
                    exclude: ["**/_*.{js,jsx,ts,tsx,md,mdx}", "**/_*/**"],
                },
                // pages: false,
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
                sitemap: false,
            } satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        colorMode: {
            defaultMode: "dark",
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 4,
        },
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "HelloQt",
            // logo: {
            //     alt: "HelloQt Logo",
            //     src: "img/logo.svg",
            // },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "docsSidebar",
                    position: "left",
                    label: "Theme Documentation",
                },
                // { to: "/", label: "Back To Site", position: "right" },
                // { to: "/", label: "Back To Admin", position: "right" },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "User Guide",
                    items: [
                        {
                            label: "Introduction",
                            to: "/",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} HelloQt.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;