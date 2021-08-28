--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("nvim-semantic-tokens").setup({preset = "backtolife"})
on_full = require("nvim-semantic-tokens.semantic_tokens").on_full
vim.lsp.buf.semantic_tokens_range = function(start_pos, end_pos)
    local params = vim.lsp.util.make_given_range_params(start_pos, end_pos)
    vim.lsp.buf_request(
        0,
        "textDocument/semanticTokens/range",
        params,
        vim.lsp.with(
            on_full,
            {on_token = function(ctx, token)
                vim.notify(tostring(token.type) .. "." .. table.concat(token.modifiers, "."))
            end}
        )
    )
end
