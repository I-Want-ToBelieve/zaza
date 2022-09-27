export const telescope = {
  n: {
    ['<leader>ff']: ['<cmd> Telescope find_files <CR>', 'find files'],
    ['<leader>fa']: [
      '<cmd> Telescope find_files follow=true no_ignore=true hidden=true <CR>',
      'find all',
    ],
    ['<leader>fw']: ['<cmd> Telescope live_grep <CR>', 'live grep'],
    ['<leader>fb']: ['<cmd> Telescope buffers <CR>', 'find buffers'],
    ['<leader>fh']: ['<cmd> Telescope help_tags <CR>', 'help page'],
    ['<leader>fo']: ['<cmd> Telescope oldfiles <CR>', 'find oldfiles'],
    ['<leader>tk']: ['<cmd> Telescope keymaps <CR>', 'show keys'],
    ['<leader>cm']: ['<cmd> Telescope git_commits <CR>', 'git commits'],
    ['<leader>gt']: ['<cmd> Telescope git_status <CR>', 'git status'],
    ['<leader>pt']: ['<cmd> Telescope terms <CR>', 'pick hidden term'],
    ['<leader>th']: ['<cmd> Telescope themes <CR>', 'nvchad themes'],
  },
}

export const fterm = {
  n: {
    ['<A-t>']: ['<cmd>lua require("FTerm").toggle()<CR>', 'pick hidden term'],
    ['<C-@>']: ['<cmd>lua require("FTerm").toggle()<CR>', 'pick hidden term'], // Ctrl + `
  },
  t: {
    ['<A-t>']: ['<C-\\><C-n><cmd>lua require("FTerm").toggle()<CR>', 'nvchad themes'],
    ['<C-@>']: ['<C-\\><C-n><cmd>lua require("FTerm").toggle()<CR>', 'nvchad themes'],
  },
}

export const lspconfig = {
  n: {
    ['gD']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { declaration: (this: void) => {} } }
        ).buf.declaration()
      },
      'lsp declaration',
    ],
    ['gd']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { definition: (this: void) => {} } }
        ).buf.definition()
      },
      'lsp definition',
    ],
    ['H']: [
      () => {
        ;(vim.lsp as unknown as { buf: { hover: (this: void) => {} } }).buf.hover()
      },
      'lsp hover',
    ],
    ['gi']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { implementation: (this: void) => {} } }
        ).buf.implementation()
      },
      'lsp implementation',
    ],
    ['<leader>ls']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { signature_help: (this: void) => {} } }
        ).buf.signature_help()
      },
      'lsp signature_help',
    ],
    ['<leader>D']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { type_definition: (this: void) => {} } }
        ).buf.type_definition()
      },
      'lsp definition type',
    ],
    ['<leader>ra']: [
      () => {
        require('plugins.ui.renamer').open()
      },
      'lsp rename',
    ],
    ['<leader>ca']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { code_action: (this: void) => {} } }
        ).buf.code_action()
      },
      'lsp code_action',
    ],
    ['gr']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { references: (this: void) => {} } }
        ).buf.references()
      },
      'lsp references',
    ],
    ['<leader>f']: [
      () => {
        vim.diagnostic.open_float()
      },
      'floating diagnostic',
    ],
    ['[d']: [
      () => {
        vim.diagnostic.goto_prev()
      },
      'goto prev',
    ],
    ['d]']: [
      () => {
        vim.diagnostic.goto_next()
      },
      'goto_next',
    ],
    ['<leader>q']: [
      () => {
        vim.diagnostic.setloclist()
      },
      'diagnostic setloclist',
    ],
    ['<leader>fm']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { formatting: (this: void, a: any) => {} } }
        ).buf.formatting({})
      },
      'lsp formatting',
    ],
    ['<leader>wa']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { add_workspace_folder: (this: void) => {} } }
        ).buf.add_workspace_folder()
      },
      'add workspace folder',
    ],
    ['<leader>wr']: [
      () => {
        ;(
          vim.lsp as unknown as { buf: { remove_workspace_folder: (this: void) => {} } }
        ).buf.remove_workspace_folder()
      },
      'remove workspace folder',
    ],
    ['<leader>wl']: [
      () => {
        print(
          vim.inspect(
            (
              vim.lsp as unknown as { buf: { list_workspace_folders: (this: void) => {} } }
            ).buf.list_workspace_folders()
          )
        )
      },
      'list workspace folders',
    ],
  },
}

export const nvimtree = {
  n: {
    ['<C-e>']: ['<cmd> NvimTreeToggle <CR>', 'toggle nvimtree'],
    ['<leader>e']: ['<cmd> NvimTreeFocus <CR>', 'focus nvimtree'],
  },
}

export const indent_blankline = {
  n: {
    ['<leader>cc']: [
      () => {
        const utils = require('indent_blankline.utils')

        const [ok, start] = (
          utils as {
            get_current_context: (
              this: void,
              a: any,
              b: any
            ) => LuaMultiReturn<[boolean, number]>
          }
        ).get_current_context(
          vim.g.indent_blankline_context_patterns,
          vim.g.indent_blankline_use_treesitter_scope
        )

        if (!ok) return

        vim.api.nvim_win_set_cursor(vim.api.nvim_get_current_win(), [start, 0])
        vim.cmd('normal! _')
      },
      'Jump to current_context',
    ],
  },
}

export const comment = {
  n: {
    ['<leader>/']: [
      () => {
        require('Comment.api').toggle.linewise.current()
      },
      'toggle comment',
    ],
    ['<C-/>']: [
      () => {
        require('Comment.api').toggle.linewise.current()
      },
      'toggle comment',
    ],
  },
  v: {
    ['<leader>/']: [
      "<ESC><cmd>lua require('Comment.api').toggle.linewise(vim.fn.visualmode())<CR>",
      'toggle comment',
    ],
    ['<C-/>']: [
      "<ESC><cmd>lua require('Comment.api').toggle.linewise(vim.fn.visualmode())<CR>",
      'toggle comment',
    ],
  },
}

export const whichkey = {
  n: {
    ['<leader>wK']: [
      () => {
        vim.cmd('WhichKey')
      },
      'which-key all keymaps',
    ],
    ['<leader>wk']: [
      () => {
        const input = vim.fn.input('WhichKey: ')
        vim.cmd('WhichKey ' + input)
      },
      'which-key query lookup',
    ],
  },
}
