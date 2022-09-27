--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.default = function()
    local present, wk = pcall(require, "which-key")
    if not present then
        return
    end
    local options = {
        icons = {breadcrumb = "»", separator = "  ", group = "+"},
        popup_mappings = {scroll_down = "<c-d>", scroll_up = "<c-u>"},
        window = {border = "none"},
        layout = {spacing = 6},
        hidden = {
            "<silent>",
            "<cmd>",
            "<Cmd>",
            "<CR>",
            "call",
            "lua",
            "^:",
            "^ "
        },
        triggers_blacklist = {i = {"j", "k"}, v = {"j", "k"}}
    }
    wk.setup(options)
end
return ____exports
