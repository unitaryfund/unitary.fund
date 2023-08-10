const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamilyManrope = ['Manrope', ...defaultTheme.fontFamily.serif];
const fontFamilyGrotesk = ['Space Grotesk', ...defaultTheme.fontFamily.serif];
const fontFamilyMono = ['Space Mono', ...defaultTheme.fontFamily.mono];

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const em = (px, base) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: fontFamilyManrope,
        grotesk: fontFamilyGrotesk,
        mono: fontFamilyMono,
      },
      colors: {
        gray: {
          50: '#FCFCFC',
          100: '#FAFAFA',
          200: '#F6F6F6',
          300: '#D6D6D6',
          400: '#B8B8B8',
          500: '#999999',
          600: '#7A7A7A',
          700: '#5C5C5C',
          800: '#3D3D3D',
          900: '#1F1F1F',
          950: '#0F0F0F',
        },
        yellow: {
          100: '#fafacc',
          200: '#FFFF99', // Main Faded Yellow
          300: '#FFFF4D',
          400: '#FFFF00', // Main Brand Yellow
          500: '#d2d204',
          600: '#918802',
          700: '#6b6402',
          800: '#3a3501',
          900: '#282601',
        },
        purple: {
          50: '#EBD6FF',
          100: '#D6ADFF',
          200: '#AD5CFF',
          300: '#870FFF',
          400: '#5E00BD',
          500: '#36006C',
          600: '#2B0057',
          700: '#210042',
          800: '#140029',
          900: '#0A0014',
          950: '#05000A',
        },
        black: '#000000',
        'light-grey': '#f6f6f9',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.black'),
            '--tw-prose-links': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
            '--tw-prose-bullets': theme('colors.black'),
            '--tw-prose-hr': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.black'),
            '--tw-prose-quote-borders': theme('colors.black'),
            '--tw-prose-captions': theme('colors.black'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.black'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.black'),
            '--tw-prose-td-borders': theme('colors.black'),
            '--tw-prose-invert-body': theme('colors.black'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.white'),
            '--tw-prose-invert-bullets': theme('colors.white'),
            '--tw-prose-invert-hr': theme('colors.white'),
            '--tw-prose-invert-quotes': theme('colors.white'),
            '--tw-prose-invert-quote-borders': theme('colors.white'),
            '--tw-prose-invert-captions': theme('colors.white'),
            '--tw-prose-invert-code': theme('colors.colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.white'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.white'),
            '--tw-prose-invert-td-borders': theme('colors.white'),

            a: {
              wordBreak: 'break-word',
            },

            ul: {
              listStyleType: null,
              paddingLeft: '0',
            },

            h1: {
              fontSize: em(36, 16),
              marginTop: '0',
              marginBottom: em(32, 36),
              lineHeight: round(40 / 36),

              '@media (max-width: theme("screens.md"))': {
                fontSize: em(24, 16),
                marginTop: em(48, 24),
                marginBottom: em(24, 24),
                lineHeight: round(32 / 24),
              },
            },

            h2: {
              fontSize: em(24, 16),
              marginTop: em(48, 24),
              marginBottom: em(24, 24),
              lineHeight: round(32 / 24),

              '@media (max-width: theme("screens.md"))': {
                fontSize: em(16, 16),
                marginTop: em(32, 20),
                marginBottom: em(12, 20),
                lineHeight: round(32 / 20),
              },
            },

            h3: {
              fontSize: em(20, 16),
              marginTop: em(32, 20),
              marginBottom: em(12, 20),
              lineHeight: round(32 / 20),

              '@media (max-width: theme("screens.md"))': {
                fontSize: em(16, 16),
                marginTop: em(24, 16),
                marginBottom: em(8, 16),
                lineHeight: round(24 / 16),
              },
            },

            h4: {
              fontSize: em(16, 16),
              marginTop: em(24, 16),
              marginBottom: em(8, 16),
              lineHeight: round(24 / 16),

              '@media (max-width: theme("screens.md"))': {
                fontSize: em(16, 16),
                marginTop: em(24, 16),
                marginBottom: em(8, 16),
                lineHeight: round(24 / 16),
              },
            },

            // h1: {
            //   fontSize: em(36, 16),
            //   marginTop: '0',
            //   marginBottom: em(32, 36),
            //   lineHeight: round(40 / 36),

            //   '@media (max-width: theme("screens.md"))': {},
            // },

            // h2: {
            //   fontSize: em(24, 16),
            //   marginTop: em(48, 24),
            //   marginBottom: em(24, 24),
            //   lineHeight: round(32 / 24),

            //   '@media (max-width: theme("screens.md"))': {},
            // },

            // h3: {
            //   fontSize: em(20, 16),
            //   marginTop: em(32, 20),
            //   marginBottom: em(12, 20),
            //   lineHeight: round(32 / 20),

            //   '@media (max-width: theme("screens.md"))': {},
            // },

            // h4: {
            //   fontSize: em(16, 16),
            //   marginTop: em(24, 16),
            //   marginBottom: em(8, 16),
            //   lineHeight: round(24 / 16),

            //   '@media (max-width: theme("screens.md"))': {},
            // },
          },
        },
      }),
      minHeight: {
        'above-the-fold': 'calc(min(800px, 95vh - var(--header-height) - theme(spacing.6)))',
      },
      fontWeight: {
        inherit: 'inherit',
      },
      gridTemplateAreas: {
        header: ['logo nav', '.    nav'],
        navigation: ['menu trigger', 'submenu submenu'],
        'section-header': ['title title', 'subtitle button'],
        'tag-search': ['title search', '. search'],
      },
      gridTemplateRows: {
        header: 'auto auto',
        'navigation-desktop': 'var(--navigation-row-height) 1fr',
        'navigation-mobile': 'var(--navigation-row-height-mobile) 1fr',
        'section-header': 'auto auto',
        filters: '30px',
        'tag-search': '30px auto',
      },
      gridTemplateColumns: {
        header: 'auto 1fr',
        navigation: '1fr var(--menu-trigger-width)',
        'section-header': '1fr auto',
        filters: '130px 1fr auto',
        'tag-search': '130px auto',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderWidth: {
        5: '5px',
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.55rem' }],
        '4xl': ['2.7rem', { lineHeight: '3.3rem' }],
        '5xl': ['2.9rem', { lineHeight: '3.85rem' }],
      },
      filterOrder: {
        logo: 'invert brightness saturate',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, addUtilities, addBase, config, theme }) {
      addVariant('nav-desktop', 'body:not(.nav-mobile) &');
      addVariant('nav-desktop-open', 'body:not(.nav-mobile).nav-open &');
      addVariant('nav-mobile', 'body.nav-mobile &');
      addVariant('nav-mobile-open', 'body.nav-mobile.nav-open &');
      addVariant('page-title', '& h1');
      addVariant('page-title-direct-child', '& h1 > *');
      addVariant('paragraph', '& p');
      addVariant('only-strong', '& p.only-strong strong');
      addVariant('has-only-strong', '&:has(.only-strong)');
      addVariant('no-only-strong', '&:not(:has(.only-strong))');
      addVariant('svg-child', '& > svg');
      addVariant('svg-path-child', '& > svg path');
      addVariant('nav-icon', '& > .icon');
      addVariant('direct-child', '& > *');
      addVariant('direct-child-first', '& > *:first-child');
      addVariant('direct-child-last', '& > *:last-child');
      addVariant('button-link', '& a.button-link');
      addVariant(
        'button-link-first-part',
        '& :is(a.button-link:not(.button-link-subtext + a.button-link), .button-link-subtext:not(a.button-link + .button-link-subtext))'
      );

      addUtilities({
        '.svg-scale-h': {
          width: '100%',
          height: 'auto',
        },

        '.svg-scale-v': {
          width: 'auto',
          height: '100%',
        },
      });

      addBase({
        h2: {
          fontWeight: theme('fontWeight.semibold'),
        },
      });
    }),
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@joshdavenport/tailwindcss-filter-order'),
    require('tailwindcss-full-bleed'),
    require('tailwind-scrollbar-hide'),
  ],
};
