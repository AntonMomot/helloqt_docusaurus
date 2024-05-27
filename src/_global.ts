import type { Config } from "@docusaurus/types";

declare global {
    export const wp: DocsWpConfig;

    export interface DocsWpConfig {
        site_url: string;
        admin_url: string;
    }

    export interface Window {
        wp: DocsWpConfig;
    }
}

const wp: DocsWpConfig = {
    site_url: location.origin,
    admin_url: new URL("/wp-admin", location.origin).href,
};

window.wp = wp;
