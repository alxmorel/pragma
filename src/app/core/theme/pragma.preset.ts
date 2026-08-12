import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const PragmaPreset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '4px',
      lg: '6px',
      xl: '6px',
    },
  },
  semantic: {
    primary: {
      50: '#F1E8E1',
      100: '#E8D5C8',
      200: '#D4B09A',
      300: '#C08C6C',
      400: '#AC704E',
      500: '#9A5B3C',
      600: '#7E492F',
      700: '#663B26',
      800: '#4F2E1E',
      900: '#382115',
      950: '#24160E',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#FFFFFF',
          50: '#F5F4F2',
          100: '#F1E8E1',
          200: '#D8D3CC',
        },
        text: {
          color: '#171513',
          mutedColor: '#6A635C',
        },
        formField: {
          borderRadius: '4px',
          shadow: 'none',
          focusRing: {
            width: '2px',
            style: 'solid',
            color: '#9A5B3C',
            offset: '1px',
          },
        },
      },
    },
  },
});
