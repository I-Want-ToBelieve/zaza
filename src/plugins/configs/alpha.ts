const [has_alpha, alpha] = pcall<Parameters<typeof require>, NeovimPluginSetup>(
  require,
  'alpha'
)

if (has_alpha) {
  const button = (sc: any, txt: string, keybind: string) => {
    const sc_ = sc.gsub('%s', '').gsub('SPC', '<leader>')
    const opts = {
      position: 'center',
      text: txt,
      shortcut: sc,
      cursor: 5,
      width: 36,
      align_shortcut: 'right',
      hl: 'AlphaButtons',
      keymap: [] as any,
    }
    if (!!keybind) {
      opts.keymap = ['n', sc_, keybind, { noremap: true, silent: true }]
    }
    return {
      type: 'button',
      val: txt,
      on_press: function () {
        const key = vim.api.nvim_replace_termcodes(sc_, true, false, true) || ''
        vim.api.nvim_feedkeys(key, 'normal', false)
      },
      opts: opts,
    }
  }
  const fn = vim.fn
  const marginTopPercent = 0.3
  const headerPadding = fn.max([2, fn.floor(fn.winheight(0) * marginTopPercent)])
  const options = {
    header: {
      type: 'text',
      val: [
        '   ⣴⣶⣤⡤⠦⣤⣀⣤⠆     ⣈⣭⣿⣶⣿⣦⣼⣆          ',
        '    ⠉⠻⢿⣿⠿⣿⣿⣶⣦⠤⠄⡠⢾⣿⣿⡿⠋⠉⠉⠻⣿⣿⡛⣦       ',
        '          ⠈⢿⣿⣟⠦ ⣾⣿⣿⣷    ⠻⠿⢿⣿⣧⣄     ',
        '           ⣸⣿⣿⢧ ⢻⠻⣿⣿⣷⣄⣀⠄⠢⣀⡀⠈⠙⠿⠄    ',
        '          ⢠⣿⣿⣿⠈    ⣻⣿⣿⣿⣿⣿⣿⣿⣛⣳⣤⣀⣀   ',
        '   ⢠⣧⣶⣥⡤⢄ ⣸⣿⣿⠘  ⢀⣴⣿⣿⡿⠛⣿⣿⣧⠈⢿⠿⠟⠛⠻⠿⠄  ',
        '  ⣰⣿⣿⠛⠻⣿⣿⡦⢹⣿⣷   ⢊⣿⣿⡏  ⢸⣿⣿⡇ ⢀⣠⣄⣾⠄   ',
        ' ⣠⣿⠿⠛ ⢀⣿⣿⣷⠘⢿⣿⣦⡀ ⢸⢿⣿⣿⣄ ⣸⣿⣿⡇⣪⣿⡿⠿⣿⣷⡄  ',
        ' ⠙⠃   ⣼⣿⡟  ⠈⠻⣿⣿⣦⣌⡇⠻⣿⣿⣷⣿⣿⣿ ⣿⣿⡇ ⠛⠻⢷⣄ ',
        '      ⢻⣿⣿⣄   ⠈⠻⣿⣿⣿⣷⣿⣿⣿⣿⣿⡟ ⠫⢿⣿⡆     ',
        '       ⠻⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⣀⣤⣾⡿⠃     ',
      ],
      opts: { position: 'center', hl: 'AlphaHeader' },
    },
    buttons: {
      type: 'group',
      val: [
        button('SPC f f', '  Find File  ', ':Telescope find_files<CR>'),
        button('SPC f o', '  Recent File  ', ':Telescope oldfiles<CR>'),
        button('SPC f w', '  Find Word  ', ':Telescope live_grep<CR>'),
        button('SPC b m', '  Bookmarks  ', ':Telescope marks<CR>'),
        button('SPC t h', '  Themes  ', ':Telescope themes<CR>'),
        button('SPC e s', '  Settings', ':e $MYVIMRC | :cd %:p:h <CR>'),
      ],
      opts: { spacing: 1 },
    },
    headerPaddingTop: { type: 'padding', val: headerPadding },
    headerPaddingBottom: { type: 'padding', val: 2 },
  }

  alpha.setup({
    layout: [
      options.headerPaddingTop,
      options.header,
      options.headerPaddingBottom,
      options.buttons,
    ],
    opts: {},
  })

  vim.api.nvim_create_autocmd('FileType', {
    pattern: 'alpha',
    callback () {
      const old_laststatus = vim.opt.laststatus
      vim.api.nvim_create_autocmd('BufUnload', {
        buffer: 0,
        callback () {
          vim.opt.laststatus = old_laststatus
        },
      })
      vim.opt.laststatus = 0
    },
  })
}
