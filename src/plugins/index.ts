/** @noSelfInFile */
import * as utils from '@zaza/utils'

const is_vscode = vim.g.is_vscode
const can_load = () => !vim.g.is_vscode

const [has_packer, packer] = pcall(require, 'packer') as [boolean, Packer]

if (has_packer) {
  vim.cmd('packadd packer.nvim')

  packer.init((require('packages') as typeof import('../packages')).packer_init_config)

  const use = utils.formal_fn(packer.use)

  /**
   * @see https://github.com/wbthomason/packer.nvim/issues/432
   * @see https://github.com/wbthomason/packer.nvim#compiling-lazy-loaders
   * If you use a function value for config or setup keys in any plugin specifications, it must not have any upvalues (i.e. captures)
   */
  use('nvim-lua/plenary.nvim', {
    module: 'plenary',
  })

  // Is using a standard Neovim install, i.e. built from source or using a
  // provided appimage.
  use('lewis6991/impatient.nvim')

  // Packer can manage itself
  use('wbthomason/packer.nvim', {
    cmd: (require('plugins.cmds') as typeof import('./cmds')).packer_cmds,
    module: 'packer',
    config () {
      require('plugins.index')
    },
  })

  use('rcarriga/nvim-notify', {
    disable: is_vscode,
    cond: can_load,
    module: 'notify',
  })

  use('backtolife2021/nvim-semantic-tokens', {
    disable: is_vscode,
    cond: can_load,
    module: 'nvim-semantic-tokens',
    as: 'nvim-semantic-tokens',
    opt: false,
    config () {
      require('plugins.configs.semantic_tokens')
    },
  })

  use('dracula/vim', {
    disable: is_vscode,
    cond: can_load,
    as: 'dracula',
    config () {
      vim.cmd('colorscheme dracula')
      vim.cmd('hi! link LspParameter DraculaOrangeItalic')
      vim.cmd('hi! link LspVariableReadOnly DraculaPurple')
      vim.cmd('hi! link LspFunction DraculaGreen')
      vim.cmd('hi! link LspMember DraculaGreen')
      // vim.cmd('hi! link LspNamespace DraculaCyan')
      // vim.cmd('hi! link LspNamespaceDeclaration DraculaCyan')
      vim.cmd('hi! link LspProperty  Identifier')
      vim.cmd('hi! link LspEnumMember Identifier')
      // vim.cmd('hi! link LspClass DraculaCyan')
      vim.cmd('hi! link LspOperator DraculaPink')
      vim.cmd('hi! link @constructor.imported Identifier')
      vim.cmd('hi! link @namespace.imported Identifier')
      vim.cmd('hi! link @namespace.exported Identifier')
      vim.cmd('hi! link @variable.imported.specifier Identifier')
      vim.cmd('hi! link @operator.module DraculaPurple')
      // vim.cmd('hi! link @constructor.jsx DraculaCyanItalic')
      vim.cmd('hi! link @field Identifier')
    },
  })

  use('nvim-treesitter/nvim-treesitter', {
    disable: is_vscode,
    cond: can_load,
    module: 'nvim-treesitter',
    run: ':TSUpdate',
    setup () {
      ;(require('lazy_load') as typeof import('./lazy_load')).on_file_open(
        'nvim-treesitter'
      )
    },
    config () {
      require('plugins.configs.treesitter')
    },
  })

  use('nvim-treesitter/playground', {
    disable: is_vscode,
    cond: can_load,
  })

  // use('icedman/nvim-textmate', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   config () {
  //     const [has_nvim_textmate, nvim_textmate] = pcall<
  //       Parameters<typeof require>,
  //       NeovimPluginSetup
  //     >(require, 'nvim-textmate')

  //     if (!has_nvim_textmate || typeof nvim_textmate === 'string') return null

  //     nvim_textmate.setup({
  //       quick_load: true,
  //       theme_name: 'Dracula',
  //       override_colorscheme: true,
  //       debug_scopes: true,
  //     })
  //   },
  // })

  use('williamboman/mason.nvim', {
    disable: is_vscode,
    cond: can_load,
    module: 'mason',
    cmd: (require('plugins.cmds') as typeof import('./cmds')).mason_cmds,
    config () {
      require('plugins.configs.mason')
    },
  })

  /**
   * @see https://github.com/neovim/nvim-lspconfig
   * @see https://github.com/NvChad/NvChad/blob/c5fe1f711e/lua/plugins/init.lua#L116
   */
  use('neovim/nvim-lspconfig', {
    disable: is_vscode,
    cond: can_load,
    opt: true,
    after: 'nvim-semantic-tokens',
    setup () {
      ;(require('lazy_load') as typeof import('./lazy_load')).on_file_open('nvim-lspconfig')
    },
    config () {
      require('plugins.configs.lspconfig')
    },
  })

  use('nvim-telescope/telescope.nvim', {
    disable: is_vscode,
    cond: can_load,
    module: 'telescope',
    cmd: 'Telescope',
    config () {
      require('plugins.configs.telescope')
    },
    setup () {
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'telescope'
      )
    },
  })

  use('numToStr/FTerm.nvim', {
    disable: is_vscode,
    cond: can_load,
    config () {
      require('plugins.configs.fterm')
    },
    setup () {
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'fterm'
      )
    },
  })

  use('tenxsoydev/size-matters.nvim', {
    disable: is_vscode,
    cond: () => can_load,
    config () {
      const is_gui = () => vim.g.neovide || vim.g.goneovim || vim.g.nvui || vim.g.gnvim
      if (is_gui()) {
        ;(require('size-matters') as NeovimPluginSetup).setup({
          default_mappings: true,
          step_size: 1, // font resize step size
          notifications: true, // default value is true if notify is installed else false
          reset_font: vim.api.nvim_get_option('guifont'), // Font loaded when using the reset cmd / shortcut
        })
      }
    },
  })

  use('goolord/alpha-nvim', {
    disable: is_vscode,
    cond: can_load,
    config () {
      require('plugins.configs.alpha')
    },
  })

  use('kyazdani42/nvim-tree.lua', {
    disable: is_vscode,
    cond: can_load,
    cmd: ['NvimTreeToggle', 'NvimTreeFocus'],
    ft: 'alpha',
    config () {
      require('plugins.configs.nvimtree')
    },
    setup () {
      ;(require('plugins.load_mapings') as typeof import('./load_mapings')).load_mapings(
        'nvimtree'
      )
    },
  })

  use('kyazdani42/nvim-web-devicons', {
    disable: is_vscode,
    cond: can_load,
    after: 'dracula',
  })

  use('lukas-reineke/indent-blankline.nvim', {
    disable: is_vscode,
    cond: can_load,
    event: 'BufRead',
    config () {
      ;(require('indent_blankline') as NeovimPluginSetup).setup({
        indentLine_enabled: 1,
        char: '▏',
        filetype_exclude: [
          'help',
          'terminal',
          'dashboard',
          'packer',
          'lspinfo',
          'TelescopePrompt',
          'TelescopeResults',
          'nvchad_cheatsheet',
        ],
        buftype_exclude: ['terminal'],
        show_trailing_blankline_indent: false,
        show_first_indent_level: false,
      })
    },
  })

  // use('akinsho/bufferline.nvim', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   after: 'nvim-web-devicons',
  //   setup () {
  //     const zaza = require("lua_modules.@zaza.core.dist.index").default as typeof Zaza
  //     const mappings = require('mappings').default as typeof import('../mappings')
  //     const keys = mappings.plugins.bufferline

  //     zaza.keymaps.set([
  //       {
  //         lhs: keys.next_buffer,
  //         rhs: ':BufferLineCycleNext <CR>',
  //       },
  //       {
  //         lhs: keys.prev_buffer,
  //         rhs: ':BufferLineCyclePrev <CR>',
  //       },
  //     ])
  //   },
  //   config () {},
  // })

  use('nvim-lualine/lualine.nvim', {
    disable: is_vscode,
    cond: can_load,
    requires: [{ 1: 'kyazdani42/nvim-web-devicons', opt: true }],
    config () {
      ;(require('lualine') as NeovimPluginSetup).setup({
        options: {
          theme: 'dracula',
        },
      })
    },
  })

  use('lewis6991/gitsigns.nvim', {
    disable: true,
    cond: can_load,
    opt: true,
    setup () {
      vim.defer_fn(() => {
        ;(require('packer') as Packer).loader('gitsigns.nvim')
      }, 0)
    },
    config () {
      const [has_gitsigns, gitsigns] = pcall<Parameters<typeof require>, NeovimPluginSetup>(
        require,
        'gitsigns'
      )
      if (!has_gitsigns || typeof gitsigns === 'string') return null

      gitsigns.setup({
        signs: {
          add: { hl: 'DiffAdd', text: '│', numhl: 'GitSignsAddNr' },
          change: { hl: 'DiffChange', text: '│', numhl: 'GitSignsChangeNr' },
          delete: { hl: 'DiffDelete', text: '', numhl: 'GitSignsDeleteNr' },
          topdelete: { hl: 'DiffDelete', text: '‾', numhl: 'GitSignsDeleteNr' },
          changedelete: { hl: 'DiffChangeDelete', text: '~', numhl: 'GitSignsChangeNr' },
        },
      })
    },
  })

  //   // load luasnips + cmp related in insert mode only

  use('rafamadriz/friendly-snippets', {
    disable: is_vscode,
    cond: can_load,
    event: 'InsertEnter',
  })

  use('L3MON4D3/LuaSnip', {
    disable: is_vscode,
    cond: can_load,
    wants: 'friendly-snippets',
    after: 'nvim-cmp',
    config () {
      require('plugins.configs.luasnip')
    },
  })

  use('hrsh7th/nvim-cmp', {
    disable: is_vscode,
    cond: can_load,
    after: 'friendly-snippets',
    config () {
      require('plugins.configs.cmp')
    },
  })

  // use('saadparwaiz1/cmp_luasnip', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   after: 'LuaSnip',
  // })

  // use('hrsh7th/cmp-nvim-lua', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   after: 'cmp_luasnip',
  // })

  // use('hrsh7th/cmp-nvim-lsp', {
  //   disable: is_vscode    // use('dracula/vim', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   as: 'dracula',
  //   config () {
  //     vim.cmd('colorscheme dracula')
  //   },
  // },
  //   cond: can_load,
  //   after: 'cmp-nvim-lua',
  // })

  // use('hrsh7th/cmp-buffer', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   after: 'cmp-nvim-lsp',
  // })

  // use('hrsh7th/cmp-path', {
  //   disable: is_vscode,
  //   cond: can_load,
  //   after: 'cmp-buffer',
  // })

  use('tpope/vim-commentary', {
    disable: is_vscode,
    cond: can_load,
  })

  use('backtolife2021/antovim', {
    event: 'BufRead',
  })

  use('Mephistophiles/surround.nvim', {
    event: 'BufRead',
    config () {
      ;(require('surround') as Surround).setup({ mappings_style: 'surround' })
    },
  })
}
