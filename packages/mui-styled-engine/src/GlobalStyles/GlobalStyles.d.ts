import * as React from 'react';
import { Interpolation } from '@emotion/react/macro';

export interface GlobalStylesProps<Theme = {}> {
  defaultTheme?: object;
  styles: Interpolation<Theme>;
}

export default function GlobalStyles<Theme = {}>(
  props: GlobalStylesProps<Theme>,
): React.ReactElement;
