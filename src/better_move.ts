import Zaza, { KeymapsOptions } from '@zaza/core'

const speed = 5

const keymaps_options: KeymapsOptions[] = [
  {
    lhs: 'k',
    rhs: 'j',
  },
  {
    lhs: 'j',
    rhs: 'h',
  },
  {
    lhs: 'i',
    rhs: 'k',
  },
]

Zaza.keymaps([
  {
    lhs: 'h',
    rhs: 'i',
  },
  {
    lhs: 'L',
    rhs: `${speed}l`,
  },
])

Zaza.keymaps.set(keymaps_options)

Zaza.keymaps.set(
  keymaps_options.map((it) => ({
    ...it,
    lhs: it.lhs.toUpperCase(),
    rhs: `${speed}${it.rhs}`,
  }))
)
