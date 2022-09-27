--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.default = function()
    local has_indent_blankline, indent_blankline = pcall(require, "indent_blankline")
    if not has_indent_blankline then
        return
    end
    local options = {
        indentLine_enabled = 1,
        filetype_exclude = {
            "help",
            "terminal",
            "alpha",
            "packer",
            "lspinfo",
            "TelescopePrompt",
            "TelescopeResults",
            "mason",
            ""
        },
        buftype_exclude = {"terminal"},
        show_trailing_blankline_indent = false,
        show_first_indent_level = false,
        show_current_context = true,
        show_current_context_start = true
    }
    indent_blankline.setup(options)
end
return ____exports
