const [has_cmp, cmp] = pcall<Parameters<typeof require>, Cmp>(require, 'cmp')

if (has_cmp) {
  vim.opt.completeopt = 'menuone,noselect'
  const border = (hl_name: string) => {
    return [
      ['─', hl_name],
      ['╮', hl_name],
      ['╭', hl_name],
      ['│', hl_name],
      ['╯', hl_name],
      ['─', hl_name],
      ['╰', hl_name],
      ['│', hl_name],
    ]
  }
  const cmp_window = require('cmp.utils.window')
  cmp_window.info_ = cmp_window.info
  cmp_window.info = function (self: { info_: () => any }) {
    const info = self.info_()
    info.scrollable = false
    return info
  }
  const options = {
    window: {
      compconstion: {
        border: border('CmpBorder'),
        winhighlight: 'Normal:CmpPmenu,CursorLine:PmenuSel,Search:None',
      },
      documentation: { border: border('CmpDocBorder') },
    },
    snippet: {
      expand (this: void, args: { body: any }) {
        ;(require('luasnip') as Luasnip).lsp_expand(args.body)
      },
    },
    formatting: {
      format (this: void, _: any, vim_item: { kind: string }) {
        // const icons = require('nvchad_ui.icons').lspkind
        // vim_item.kind = string.format('%s %s', icons[vim_item.kind], vim_item.kind)
        // return vim_item
      },
    },
    mapping: {
      ['<C-p>']: cmp.mapping.select_prev_item(),
      ['<C-n>']: cmp.mapping.select_next_item(),
      ['<C-d>']: cmp.mapping.scroll_docs(-4),
      ['<C-f>']: cmp.mapping.scroll_docs(4),
      ['<C-Space>']: cmp.mapping.complete(),
      ['<C-e>']: cmp.mapping.close(),
      ['<CR>']: cmp.mapping.confirm({
        behavior: cmp.ConfirmBehavior.Replace,
        select: false,
      }),
      ['<Tab>']: cmp.mapping(
        (fallback: () => void) => {
          if (cmp.visible()) {
            cmp.select_next_item()
          } else if (cmp.visible()) {
            cmp.select_next_item()
          } else {
            fallback()
          }
        },
        ['i', 's']
      ),
      ['<S-Tab>']: cmp.mapping(
        (fallback: () => void) => {
          if (cmp.visible()) {
            cmp.select_prev_item()
          } else if (cmp.visible()) {
            cmp.select_prev_item()
          } else {
            fallback()
          }
        },
        ['i', 's']
      ),
    },
    sources: [
      { name: 'luasnip' },
      { name: 'nvim_lsp' },
      { name: 'buffer' },
      { name: 'nvim_lua' },
      { name: 'path' },
    ],
  }
  cmp.setup(options)
}
