/** @onSelfInFile */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { keymaps } from './keymaps'
import { options } from './options'

export interface PluginEnv {
  zaza: typeof Zaza
}
export type Plugin<T extends Record<any, any> | void = void> = (
  args: T
) => (env: PluginEnv) => unknown

/** @noSelf */
export default class Zaza {
  static env: PluginEnv = {
    zaza: Zaza,
  }

  static options = options(Zaza)

  static keymaps = keymaps(Zaza)

  static use (plugin: ReturnType<Plugin>) {
    plugin(Zaza.env)
    return Zaza
  }
}

export * from './keymaps'
export * from './options'
