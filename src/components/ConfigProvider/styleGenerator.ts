import { OcBaseTheme, OcTheme, ThemeOptions } from './ConfigProvider.types';
import { TinyColor } from '@ctrl/tinycolor';
import generate from './generate';
import OcThemes from './themes';

export function getStyle(themeOptions: ThemeOptions): string {
    const variables: Record<string, string> = {};

    const fillColor = (
        colorPalettes: string[],
        type: string
    ): Record<string, string> =>
        colorPalettes.reduce((acc, color, index) => {
            const key: string = `${type}-${(index + 1) * 10}`;
            acc[key] = color;
            return acc;
        }, variables);

    const generatePalette = (colorVal: string, type: string): void => {
        const baseColor = new TinyColor(colorVal);
        const colorPalettes = generate(baseColor.toRgbString(), {});
        fillColor(colorPalettes, type);
    };

    const themeName = themeOptions.name || themeOptions.customTheme?.name;

    const theme: OcTheme | null = {
        ...OcThemes?.[themeOptions.name],
        ...themeOptions.customTheme,
    };

    // ================ Use existing palette ================
    if (theme.palette) {
        fillColor(theme.palette, 'primary-color');
        variables[`primary-color`] = theme.primaryColor;
    }

    // ================ Custom primary palette ================
    if (themeOptions.customTheme?.primaryColor) {
        generatePalette(theme.primaryColor, 'primary-color');
        variables[`primary-color`] = theme.primaryColor;
    }

    // ================ Background Color ================
    if (theme.backgroundColor) {
        variables[`background-color`] = theme.backgroundColor;
    }

    // ================ Text Color ================
    if (theme.textColor) {
        variables[`text-primary-color`] = theme.textColor;
    }

    if (theme.textColorSecondary) {
        variables[`text-secondary-color`] = theme.textColorSecondary;
    }

    if (theme.textColorInverse) {
        variables[`text-inverse-color`] = theme.textColorInverse;
    }

    // ================ Success Color ================
    if (theme.successColor) {
        variables[`success-color`] = theme.successColor;
    }

    // ================ Warning Color ================
    if (theme.warningColor) {
        variables[`warning-color`] = theme.warningColor;
    }

    // ================= Error Color =================
    if (theme.errorColor) {
        variables[`error-color`] = theme.errorColor;
    }

    // ================= Info Color ==================
    if (theme.infoColor) {
        variables[`info-color`] = theme.infoColor;
    }

    // Convert to css variables
    const cssList = Object.keys(variables).map(
        (key) => `--${key}: ${variables[key]};`
    );

    return `
  .theme-${themeName} {
    ${cssList.join('\n')}
  }
  `.trim();
}

interface Options {
    attachTo?: Element;
    csp?: { nonce?: string };
    prepend?: boolean;
    mark?: string;
}

function getContainer(option: Options) {
    if (option.attachTo) {
        return option.attachTo;
    }

    const head = document.querySelector('head');
    return head || document.body;
}

export function injectCSS(css: string, option: Options = {}) {
    const styleNode = document.createElement('style');
    if (option.csp?.nonce) {
        styleNode.nonce = option.csp?.nonce;
    }
    styleNode.innerHTML = css;

    const container = getContainer(option);
    const { firstChild } = container;

    if (option.prepend && container.prepend) {
        // Use `prepend` first
        container.prepend(styleNode);
    } else if (option.prepend && firstChild) {
        // Fallback to `insertBefore` like IE not support `prepend`
        container.insertBefore(styleNode, firstChild);
    } else {
        container.appendChild(styleNode);
    }

    return styleNode;
}

export function registerTheme(themeOptions: ThemeOptions) {
    console.log('jijhihih');
    injectCSS(getStyle(themeOptions));
}
