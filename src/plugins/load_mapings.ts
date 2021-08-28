import Zaza, { KeymapsOptions } from '@zaza/core'

const zaza = require('lua_modules.@zaza.core.dist.index').default as typeof Zaza

export const load_mapings = (
  key: keyof typeof import('./mappings'),
  options: Pick<KeymapsOptions, 'scope'> = {}
) => {
  const mappings = require('plugins.mappings') as typeof import('./mappings')
  const allkeys = mappings[key]

  for (const [mode, keys] of pairs(allkeys)) {
    for (const [k, v] of pairs(keys)) {
      const keymapsOptions = {
        mode,
        lhs: k,
        rhs: v[1],
        ...options,
      } as KeymapsOptions
      zaza.keymaps.set(keymapsOptions)
    }
  }
}
