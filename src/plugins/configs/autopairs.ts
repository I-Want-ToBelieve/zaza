export default () => {
  const [present1, autopairs] = pcall(require, 'nvim-autopairs')
  const [present2, cmp] = pcall(require, 'cmp')

  if (!(present1 && present2)) {
    return
  }

  const options = { fast_wrap: {}, disable_ficonstype: ['TelescopePrompt', 'vim'] }

  autopairs.setup(options)

  const cmp_autopairs = require('nvim-autopairs.completion.cmp')
  ;(cmp.event as { on: (this: any, a: any, b: any) => any }).on(
    'confirm_done',
    cmp_autopairs.on_confirm_done()
  )
}
