import { style } from '@vanilla-extract/css'

import {
  borderRadiusVars,
  fontSizeVars,
  semanticColorVars,
  spaceVars,
} from '../../styles/vars.css.js'
import { root as Anchor } from './Anchor.css.js'
import { root as Pre } from './Pre.css.js'

export const root = style({
  selectors: {
    [`:not(${Pre})>&`]: {
      borderRadius: borderRadiusVars['4'],
      fontSize: fontSizeVars.code,
      padding: `${spaceVars['3']} ${spaceVars['6']}`,
    },
    [`:not(${Pre}, [data-rehype-pretty-code-fragment])>&`]: {
      backgroundColor: semanticColorVars.inlineCodeBackground,
      color: semanticColorVars.inlineCode,
    },
    '[data-rehype-pretty-code-fragment]>&': {
      backgroundColor: semanticColorVars.codeHighlightBackground,
    },
    [`${Anchor}>&`]: {
      color: semanticColorVars.link,
      textDecoration: 'underline',
      textUnderlineOffset: spaceVars['2'],
    },
    [`${Anchor}>&:hover`]: {
      color: semanticColorVars.linkHover,
    },
  },
})