export const signature_window = (_: any, result: any, ctx: any, config: any) => {
  const [bufnr, winner] = (
    vim.lsp.handlers as {
      signature_help: (...args: any[]) => LuaMultiReturn<[number, number]>
    }
  ).signature_help(_, result, ctx, config)
  const current_cursor_line = vim.api.nvim_win_get_cursor(0)[1]
  if (winner) {
    if (current_cursor_line > 3) {
      vim.api.nvim_win_set_config(winner, {
        anchor: 'SW',
        relative: 'cursor',
        row: 0,
        col: -1,
      })
    }
  }
  if (bufnr && winner) {
    return [bufnr, winner]
  }
}

const augroup = vim.api.nvim_create_augroup
const autocmd = vim.api.nvim_create_autocmd
const util = require('vim.lsp.util')
const clients = {} as any
const check_trigger_char = function (
  line_to_cursor: string,
  triggers: Record<number, unknown>
) {
  if (!triggers) {
    return false
  }
  for (const [_, trigger_char] of ipairs(triggers)) {
    const current_char = string.sub(
      line_to_cursor,
      line_to_cursor.length,
      line_to_cursor.length
    )
    const prev_char = string.sub(
      line_to_cursor,
      line_to_cursor.length - 1,
      line_to_cursor.length - 1
    )
    if (current_char === trigger_char) {
      return true
    }
    if (current_char === ' ' && prev_char === trigger_char) {
      return true
    }
  }
  return false
}
export const open_signature = () => {
  let triggered = false
  for (const [_, client] of pairs(clients)) {
    let triggers = client.server_capabilities.signatureHelpProvider.triggerCharacters
    if (client.name === 'csharp') {
      triggers = ['(', ',']
    }
    const pos = vim.api.nvim_win_get_cursor(0)
    const line = vim.api.nvim_get_current_line()
    const line_to_cursor = line.sub(1, pos[2])
    if (!triggered) {
      triggered = check_trigger_char(line_to_cursor, triggers)
    }
  }
  if (triggered) {
    const params = util.make_position_params()
    ;(vim.lsp as any).buf_request(
      0,
      'textDocument/signatureHelp',
      params,
      vim.lsp.with(signature_window, { border: 'single', focusable: false })
    )
  }
}
export const setup = (client: any) => {
  table.insert(clients, client)
  const group = augroup('LspSignature', { clear: false })
  vim.api.nvim_clear_autocmds({ group: group, pattern: '<buffer>' })
  autocmd('TextChangedI', {
    group: group,
    pattern: '<buffer>',
    callback: function () {
      const active_clients: any[] = vim.lsp.get_active_clients()
      if (active_clients.length < 1) {
        return
      }
      open_signature()
    },
  })
}
