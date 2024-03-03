import "styled-components";
import { ThemeKey } from "./themes/themes";
import { ImageKey } from "./helpers/image.helper";

declare module "styled-components" {
  export interface DefaultTheme {
    info?: {
      key: ThemeKey; // Key of the theme to store as selected theme.
      label: string; // Label of the theme to be displayed
      bikeImage?: ImageKey; // Image Key for the Bike
      tankImage?: ImageKey; // Image key for the Bike Tank
    };
    colors?: {
      bgBody?: string; // Background Body
      fgBody?: string; // Foreground Body
      bgPrimary?: string; // Primary Background or Color
      textPrimary?: string; // Text color of the element with primary background
    };
  }
}
