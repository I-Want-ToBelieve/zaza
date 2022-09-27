--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.default = function()
    local present1, autopairs = pcall(require, "nvim-autopairs")
    local present2, cmp = pcall(require, "cmp")
    if not (present1 and present2) then
        return
    end
    local options = {fast_wrap = {}, disable_ficonstype = {"TelescopePrompt", "vim"}}
    autopairs.setup(options)
    local cmp_autopairs = require("nvim-autopairs.completion.cmp")
    cmp.event:on(
        "confirm_done",
        cmp_autopairs.on_confirm_done()
    )
end
return ____exports
