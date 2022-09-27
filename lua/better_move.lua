local ____lualib = require("lualib_bundle")
local __TS__ObjectAssign = ____lualib.__TS__ObjectAssign
local __TS__ArrayMap = ____lualib.__TS__ArrayMap
local ____exports = {}
local ____core = require("lua_modules.@zaza.core.dist.index")
local Zaza = ____core.default
local speed = 5
local keymaps_options = {{lhs = "k", rhs = "j"}, {lhs = "j", rhs = "h"}, {lhs = "i", rhs = "k"}}
Zaza.keymaps({
    {lhs = "h", rhs = "i"},
    {
        lhs = "L",
        rhs = tostring(speed) .. "l"
    }
})
Zaza.keymaps.set(keymaps_options)
Zaza.keymaps.set(__TS__ArrayMap(
    keymaps_options,
    function(it) return __TS__ObjectAssign(
        {},
        it,
        {
            lhs = string.upper(it.lhs),
            rhs = tostring(speed) .. it.rhs
        }
    ) end
))
return ____exports
