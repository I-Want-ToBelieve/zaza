--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
has_web_devicons, devicons = pcall(require, "nvim-web-devicons")
if has_web_devicons then
    local options = {override = require("plugins.icons").web_devicons}
    devicons.setup(options)
end
