const [has_lspconfig, lspconfig] = pcall<
  Parameters<typeof require>,
  {
    [key: string]: NeovimPluginSetup
  }
>(require, 'lspconfig')

if (has_lspconfig) {
  const on_attach = (client: any, bufnr: NeovimBuffer) => {
    if (vim.version().minor > 7) {
      client.server_capabilities.documentFormattingProvider = false
      client.server_capabilities.documentRangeFormattingProvider = false
    } else {
      client.resolved_capabilities.document_formatting = false
      client.resolved_capabilities.document_range_formatting = false
    }
    // utils.load_mappings("lspconfig", { buffer: bufnr });
    if (client.server_capabilities.signatureHelpProvider) {
      // require("nvchad_ui.signature").setup(client);
    }

    ;(require('plugins.load_mapings') as typeof import('../load_mapings')).load_mapings(
      'lspconfig',
      { scope: { type: 'buffer', buffer: bufnr } }
    )

    const caps = client.server_capabilities
    if (caps.semanticTokensProvider && caps.semanticTokensProvider.full) {
      vim.cmd(
        'autocmd BufEnter,CursorHold,InsertLeave <buffer> lua vim.lsp.buf.semantic_tokens_full()'
      )
    }
  }

  const capabilities = (
    require('nvim-semantic-tokens') as {
      extend_capabilities: (this: void, client: any) => any
    }
  ).extend_capabilities(vim.lsp.protocol.make_client_capabilities())
  capabilities.textDocument.completion.completionItem = {
    documentationFormat: ['markdown', 'plaintext'],
    snippetSupport: true,
    preselectSupport: true,
    insertReplaceSupport: true,
    labelDetailsSupport: true,
    deprecatedSupport: true,
    commitCharactersSupport: true,
    tagSupport: { valueSet: [1] },
    resolveSupport: { properties: ['documentation', 'detail', 'additionalTextEdits'] },
  }
  lspconfig.lua_ls.setup({
    on_attach,
    capabilities,
    settings: {
      Lua: {
        diagnostics: { globals: ['vim'] },
        workspace: {
          library: {
            [vim.fn.expand('$VIMRUNTIME/lua')]: true,
            [vim.fn.expand('$VIMRUNTIME/lua/vim/lsp')]: true,
          },
          maxPreload: 100000,
          preloadFileSize: 10000,
        },
      },
    },
  })

  lspconfig.tsserver.setup({
    on_attach,
    capabilities,
  })

  lspconfig.jsonls.setup({
    on_attach,
    capabilities,
  })

  lspconfig.html.setup({
    on_attach,
    capabilities,
  })

  lspconfig.cssls.setup({
    on_attach,
    capabilities,
  })

  lspconfig.rust_analyzer.setup({
    on_attach,
    capabilities,
  })
}
