import Zaza, { KeymapsOptions } from '@zaza/core'

const keymaps_options: KeymapsOptions[] = [
  {
    lhs: '<C-e>',
    rhs: '<NOP>',
  },
  {
    lhs: '=',
    rhs: '<NOP>',
  },
  {
    lhs: '<C-f>',
    rhs: '<NOP>',
  },
]

Zaza.keymaps(keymaps_options)
