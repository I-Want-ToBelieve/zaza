--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.default = function()
    local has_luasnip, luasnip = pcall(require, "luasnip")
    if not has_luasnip then
        return
    end
    local options = {history = true, updateevents = "TextChanged,TextChangedI"}
    luasnip.config.set_config(options)
    require("luasnip.loaders.from_vscode").lazy_load({paths = vim.g.luasnippets_path or ""})
    require("luasnip.loaders.from_vscode").lazy_load()
    vim.api.nvim_create_autocmd(
        "InsertLeave",
        {callback = function()
            if require("luasnip").session.current_nodes[vim.api.nvim_get_current_buf()] and not require("luasnip").session.jump_active then
                require("luasnip").unlink_current()
            end
        end}
    )
end
return ____exports
