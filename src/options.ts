import Zaza from '@zaza/core'

/**
 * @see https://github.com/NvChad/NvChad/blob/main/lua/core/options.lua
 */
Zaza.options
  .set({
    // -- NeoVim/Vim options
    title: true,
    cursorline: true,
    fillchars: 'eob: ',
    clipboard: 'unnamedplus',
    cmdheight: 1,
    hidden: true,
    ignorecase: true,
    mouse: 'a',
    // Numbers
    ruler: true,
    number: true,
    // -- relative numbers in normal mode tool at the bottom of options.lua
    numberwidth: 2,
    relativenumber: false,
    // -- Indentline
    expandtab: true,
    shiftwidth: 2,
    smartindent: true,
    signcolumn: 'yes',
    splitbelow: true,
    splitright: true,
    tabstop: 8, // -- Number of spaces that a <Tab> in the file counts for
    timeoutlen: 400,
    // -- interval for writing swap file to disk, also used by gitsigns
    updatetime: 250,
    undofile: true, // -- keep a permanent undo (across restarts)
    termguicolors: true,
  })
  .options.append({
    shortmess: 'sI', // -- disable nvim intro
    // -- go to previous/next line with h,l,left arrow and right arrow
    // -- when cursor reaches end/beginning of line
    whichwrap: '<>[]hl',
  })
