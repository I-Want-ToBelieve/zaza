declare let dump: typeof import('@zaza/utils').dump

declare namespace Vim {
  export interface G {
    is_vscode: boolean
  }
}

declare interface NeovimPluginSetup {
  setup: (this: void, opts?: any) => any
}

/**
 * @noSelf
 */
declare interface mapping {
  complete(): any
  select_prev_item(): unknown
  select_next_item(): unknown
  scroll_docs(arg0: number): unknown
  close(): unknown
  confirm(arg0: { behavior: any; select: boolean }): unknown
  (a: any, b: any): any
}

/**
 * @noSelf
 */
declare interface Cmp extends NeovimPluginSetup {
  mapping: mapping
  ConfirmBehavior: any
  visible(): unknown
  select_next_item(): unknown
  select_prev_item(): unknown
}
