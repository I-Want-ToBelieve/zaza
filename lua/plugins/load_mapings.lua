local ____lualib = require("lualib_bundle")
local __TS__ObjectAssign = ____lualib.__TS__ObjectAssign
local ____exports = {}
local zaza = require("lua_modules.@zaza.core.dist.index").default
____exports.load_mapings = function(key, options)
    if options == nil then
        options = {}
    end
    local mappings = require("plugins.mappings")
    local allkeys = mappings[key]
    for mode, keys in pairs(allkeys) do
        for k, v in pairs(keys) do
            local keymapsOptions = __TS__ObjectAssign({mode = mode, lhs = k, rhs = v[1]}, options)
            zaza.keymaps.set(keymapsOptions)
        end
    end
end
return ____exports
