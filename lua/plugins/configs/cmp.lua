--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
has_cmp, cmp = pcall(require, "cmp")
if has_cmp then
    vim.opt.completeopt = "menuone,noselect"
    local function border(hl_name)
        return {
            {"─", hl_name},
            {"╮", hl_name},
            {"╭", hl_name},
            {"│", hl_name},
            {"╯", hl_name},
            {"─", hl_name},
            {"╰", hl_name},
            {"│", hl_name}
        }
    end
    local cmp_window = require("cmp.utils.window")
    cmp_window.info_ = cmp_window.info
    cmp_window.info = function(____self)
        local info = ____self:info_()
        info.scrollable = false
        return info
    end
    local options = {
        window = {
            compconstion = {
                border = border("CmpBorder"),
                winhighlight = "Normal:CmpPmenu,CursorLine:PmenuSel,Search:None"
            },
            documentation = {border = border("CmpDocBorder")}
        },
        snippet = {expand = function(args)
            require("luasnip").lsp_expand(args.body)
        end},
        formatting = {format = function(_, vim_item)
        end},
        mapping = {
            ["<C-p>"] = cmp.mapping.select_prev_item(),
            ["<C-n>"] = cmp.mapping.select_next_item(),
            ["<C-d>"] = cmp.mapping.scroll_docs(-4),
            ["<C-f>"] = cmp.mapping.scroll_docs(4),
            ["<C-Space>"] = cmp.mapping.complete(),
            ["<C-e>"] = cmp.mapping.close(),
            ["<CR>"] = cmp.mapping.confirm({behavior = cmp.ConfirmBehavior.Replace, select = false}),
            ["<Tab>"] = cmp.mapping(
                function(fallback)
                    if cmp.visible() then
                        cmp.select_next_item()
                    elseif cmp.visible() then
                        cmp.select_next_item()
                    else
                        fallback()
                    end
                end,
                {"i", "s"}
            ),
            ["<S-Tab>"] = cmp.mapping(
                function(fallback)
                    if cmp.visible() then
                        cmp.select_prev_item()
                    elseif cmp.visible() then
                        cmp.select_prev_item()
                    else
                        fallback()
                    end
                end,
                {"i", "s"}
            )
        },
        sources = {
            {name = "luasnip"},
            {name = "nvim_lsp"},
            {name = "buffer"},
            {name = "nvim_lua"},
            {name = "path"}
        }
    }
    cmp.setup(options)
end
