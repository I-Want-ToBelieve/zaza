/** @noSelfInFile */
/**
 * @see https://github.com/NvChad/NvChad/blob/main/init.lua
 */
vim.defer_fn(() => {
  pcall(require, 'impatient')
}, 0)

import './global'
import './options'
import './better_move'
import './vscode'
import './neovide'

// disable some builtin vim plugins
const disabled_builtin_plugins = [
  '2html_plugin',
  'getscript',
  'getscriptPlugin',
  'gzip',
  'logipat',
  'netrw',
  'netrwPlugin',
  'netrwSettings',
  'netrwFileHandlers',
  'matchit',
  'tar',
  'tarPlugin',
  'rrhelper',
  'spellfile_plugin',
  'vimball',
  'vimballPlugin',
  'zip',
  'zipPlugin',
]

for (const plugin of disabled_builtin_plugins) {
  /**
   * @see https://neovim.discourse.group/t/how-to-disable-builtin-plugins/787
   * @see https://www.reddit.com/r/neovim/comments/p1qlbn/help_speeding_up_startup_time_disabling_builtin/
   */
  vim.g[`loaded_${plugin}`] = 1
}

import './packages'
