--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.default = function()
    local present, colorizer = pcall(require, "colorizer")
    if not present then
        return
    end
    local options = {filetypes = {"*"}, user_default_options = {
        RGB = true,
        RRGGBB = true,
        names = false,
        RRGGBBAA = false,
        rgb_fn = false,
        hsl_fn = false,
        css = false,
        css_fn = false,
        mode = "background"
    }}
    colorizer.setup(options)
    vim.defer_fn(
        function()
            require("colorizer").attach_to_buffer(0)
        end,
        0
    )
end
return ____exports
