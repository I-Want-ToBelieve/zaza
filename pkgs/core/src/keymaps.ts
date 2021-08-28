/** @onSelfInFile */

export interface KeymapsOptions
  extends Partial<Record<Exclude<Neovim.MapArguments, 'buffer'> | 'noremap', boolean>> {
  mode?: Neovim.KeyMapMode | Neovim.KeyMapMode[]
  scope?: {
    type: Exclude<Neovim.Scope, 'window'>
    buffer?: NeovimBuffer
  }
  lhs: string
  rhs: string
}
export const keymaps = <Class extends { new (...args: any[]): any }>(cls: Class) => {
  const set = (opts: KeymapsOptions | KeymapsOptions[]) => {
    const _opts = Array.isArray(opts) ? opts : [opts]

    for (const { mode, scope, lhs, rhs, ...other } of _opts) {
      const _mode = Array.isArray(mode) ? mode : [mode ?? '']

      for (const __mode of _mode) {
        switch (scope?.type) {
          case 'buffer':
            vim.keymap.set(__mode, lhs, rhs, {
              ...{ remap: false, silent: true, buffer: scope?.buffer ?? 0 },
              ...other,
            })
            break
          default:
            vim.keymap.set(__mode, lhs, rhs, {
              ...{ remap: false, silent: true },
              ...other,
            })
            break
        }
      }
    }

    return cls
  }

  function fn_table (opts: KeymapsOptions | KeymapsOptions[]) {
    return set(opts)
  }

  fn_table.set = set

  return fn_table
}
