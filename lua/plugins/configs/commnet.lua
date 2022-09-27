--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.default = function()
    local present, nvim_comment = pcall(require, "Comment")
    if not present then
        return
    end
    nvim_comment.setup({})
end
return ____exports
