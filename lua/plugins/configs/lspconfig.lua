--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
has_lspconfig, lspconfig = pcall(require, "lspconfig")
if has_lspconfig then
    local function on_attach(client, bufnr)
        if vim.version().minor > 7 then
            client.server_capabilities.documentFormattingProvider = false
            client.server_capabilities.documentRangeFormattingProvider = false
        else
            client.resolved_capabilities.document_formatting = false
            client.resolved_capabilities.document_range_formatting = false
        end
        if client.server_capabilities.signatureHelpProvider then
        end
        require("plugins.load_mapings").load_mapings("lspconfig", {scope = {type = "buffer", buffer = bufnr}})
        local caps = client.server_capabilities
        if caps.semanticTokensProvider and caps.semanticTokensProvider.full then
            vim.cmd("autocmd BufEnter,CursorHold,InsertLeave <buffer> lua vim.lsp.buf.semantic_tokens_full()")
        end
    end
    local capabilities = require("nvim-semantic-tokens").extend_capabilities(vim.lsp.protocol.make_client_capabilities())
    capabilities.textDocument.completion.completionItem = {
        documentationFormat = {"markdown", "plaintext"},
        snippetSupport = true,
        preselectSupport = true,
        insertReplaceSupport = true,
        labelDetailsSupport = true,
        deprecatedSupport = true,
        commitCharactersSupport = true,
        tagSupport = {valueSet = {1}},
        resolveSupport = {properties = {"documentation", "detail", "additionalTextEdits"}}
    }
    lspconfig.lua_ls.setup({
        on_attach = on_attach,
        capabilities = capabilities,
        settings = {Lua = {
            diagnostics = {globals = {"vim"}},
            workspace = {
                library = {
                    [vim.fn.expand("$VIMRUNTIME/lua")] = true,
                    [vim.fn.expand("$VIMRUNTIME/lua/vim/lsp")] = true
                },
                maxPreload = 100000,
                preloadFileSize = 10000
            }
        }}
    })
    lspconfig.tsserver.setup({on_attach = on_attach, capabilities = capabilities})
    lspconfig.jsonls.setup({on_attach = on_attach, capabilities = capabilities})
    lspconfig.html.setup({on_attach = on_attach, capabilities = capabilities})
    lspconfig.cssls.setup({on_attach = on_attach, capabilities = capabilities})
    lspconfig.rust_analyzer.setup({on_attach = on_attach, capabilities = capabilities})
end
