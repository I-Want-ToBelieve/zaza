-- Automatically generated packer.nvim plugin loader code

if vim.api.nvim_call_function('has', {'nvim-0.5'}) ~= 1 then
  vim.api.nvim_command('echohl WarningMsg | echom "Invalid Neovim version for packer.nvim! | echohl None"')
  return
end

vim.api.nvim_command('packadd packer.nvim')

local no_errors, error_msg = pcall(function()

_G._packer = _G._packer or {}
_G._packer.inside_compile = true

local time
local profile_info
local should_profile = false
if should_profile then
  local hrtime = vim.loop.hrtime
  profile_info = {}
  time = function(chunk, start)
    if start then
      profile_info[chunk] = hrtime()
    else
      profile_info[chunk] = (hrtime() - profile_info[chunk]) / 1e6
    end
  end
else
  time = function(chunk, start) end
end

local function save_profiles(threshold)
  local sorted_times = {}
  for chunk_name, time_taken in pairs(profile_info) do
    sorted_times[#sorted_times + 1] = {chunk_name, time_taken}
  end
  table.sort(sorted_times, function(a, b) return a[2] > b[2] end)
  local results = {}
  for i, elem in ipairs(sorted_times) do
    if not threshold or threshold and elem[2] > threshold then
      results[i] = elem[1] .. ' took ' .. elem[2] .. 'ms'
    end
  end
  if threshold then
    table.insert(results, '(Only showing plugins that took longer than ' .. threshold .. ' ms ' .. 'to load)')
  end

  _G._packer.profile_output = results
end

time([[Luarocks path setup]], true)
local package_path_str = "/home/i.want.to.believe/.cache/nvim/packer_hererocks/2.1.0-beta3/share/lua/5.1/?.lua;/home/i.want.to.believe/.cache/nvim/packer_hererocks/2.1.0-beta3/share/lua/5.1/?/init.lua;/home/i.want.to.believe/.cache/nvim/packer_hererocks/2.1.0-beta3/lib/luarocks/rocks-5.1/?.lua;/home/i.want.to.believe/.cache/nvim/packer_hererocks/2.1.0-beta3/lib/luarocks/rocks-5.1/?/init.lua"
local install_cpath_pattern = "/home/i.want.to.believe/.cache/nvim/packer_hererocks/2.1.0-beta3/lib/lua/5.1/?.so"
if not string.find(package.path, package_path_str, 1, true) then
  package.path = package.path .. ';' .. package_path_str
end

if not string.find(package.cpath, install_cpath_pattern, 1, true) then
  package.cpath = package.cpath .. ';' .. install_cpath_pattern
end

time([[Luarocks path setup]], false)
time([[try_loadstring definition]], true)
local function try_loadstring(s, component, name)
  local success, result = pcall(loadstring(s), name, _G.packer_plugins[name])
  if not success then
    vim.schedule(function()
      vim.api.nvim_notify('packer.nvim: Error running ' .. component .. ' for ' .. name .. ': ' .. result, vim.log.levels.ERROR, {})
    end)
  end
  return result
end

time([[try_loadstring definition]], false)
time([[Defining packer_plugins]], true)
_G.packer_plugins = {
  ["FTerm.nvim"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n5\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\26plugins.configs.fterm\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/FTerm.nvim",
    url = "https://github.com/numToStr/FTerm.nvim"
  },
  LuaSnip = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n7\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\28plugins.configs.luasnip\frequire\0" },
    load_after = {
      ["nvim-cmp"] = true
    },
    loaded = false,
    needs_bufread = true,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/LuaSnip",
    url = "https://github.com/L3MON4D3/LuaSnip",
    wants = { "friendly-snippets" }
  },
  ["alpha-nvim"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n5\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\26plugins.configs.alpha\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/alpha-nvim",
    url = "https://github.com/goolord/alpha-nvim"
  },
  antovim = {
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/antovim",
    url = "https://github.com/backtolife2021/antovim"
  },
  dracula = {
    after = { "nvim-web-devicons" },
    after_files = { "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/dracula/after/plugin/dracula.vim" },
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\nð\5\0\0\3\0\16\00096\0\0\0009\0\1\0'\2\2\0B\0\2\0016\0\0\0009\0\1\0'\2\3\0B\0\2\0016\0\0\0009\0\1\0'\2\4\0B\0\2\0016\0\0\0009\0\1\0'\2\5\0B\0\2\0016\0\0\0009\0\1\0'\2\6\0B\0\2\0016\0\0\0009\0\1\0'\2\a\0B\0\2\0016\0\0\0009\0\1\0'\2\b\0B\0\2\0016\0\0\0009\0\1\0'\2\t\0B\0\2\0016\0\0\0009\0\1\0'\2\n\0B\0\2\0016\0\0\0009\0\1\0'\2\v\0B\0\2\0016\0\0\0009\0\1\0'\2\f\0B\0\2\0016\0\0\0009\0\1\0'\2\r\0B\0\2\0016\0\0\0009\0\1\0'\2\14\0B\0\2\0016\0\0\0009\0\1\0'\2\15\0B\0\2\1K\0\1\0\31hi! link @field Identifier,hi! link @operator.module DraculaPurple5hi! link @variable.imported.specifier Identifier,hi! link @namespace.exported Identifier,hi! link @namespace.imported Identifier.hi! link @constructor.imported Identifier%hi! link LspOperator DraculaPink&hi! link LspEnumMember Identifier%hi! link LspProperty  Identifier$hi! link LspMember DraculaGreen&hi! link LspFunction DraculaGreen/hi! link LspVariableReadOnly DraculaPurple.hi! link LspParameter DraculaOrangeItalic\24colorscheme dracula\bcmd\bvim\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/dracula",
    url = "https://github.com/dracula/vim"
  },
  ["friendly-snippets"] = {
    after = { "nvim-cmp" },
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/friendly-snippets",
    url = "https://github.com/rafamadriz/friendly-snippets"
  },
  ["impatient.nvim"] = {
    loaded = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/start/impatient.nvim",
    url = "https://github.com/lewis6991/impatient.nvim"
  },
  ["indent-blankline.nvim"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n¸\2\0\0\4\0\b\0\v6\0\0\0'\2\1\0B\0\2\0029\0\2\0005\2\3\0005\3\4\0=\3\5\0025\3\6\0=\3\a\2B\0\2\1K\0\1\0\20buftype_exclude\1\2\0\0\rterminal\21filetype_exclude\1\t\0\0\thelp\rterminal\14dashboard\vpacker\flspinfo\20TelescopePrompt\21TelescopeResults\22nvchad_cheatsheet\1\0\4\23indentLine_enabled\3\1\tchar\bâ–\28show_first_indent_level\1#show_trailing_blankline_indent\1\nsetup\21indent_blankline\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/indent-blankline.nvim",
    url = "https://github.com/lukas-reineke/indent-blankline.nvim"
  },
  ["lualine.nvim"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n]\0\0\4\0\6\0\t6\0\0\0'\2\1\0B\0\2\0029\0\2\0005\2\4\0005\3\3\0=\3\5\2B\0\2\1K\0\1\0\foptions\1\0\0\1\0\1\ntheme\fdracula\nsetup\flualine\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/lualine.nvim",
    url = "https://github.com/nvim-lualine/lualine.nvim"
  },
  ["mason.nvim"] = {
    commands = { "Mason", "MasonInstall", "MasonInstallAll", "MasonUninstall", "MasonUninstallAll", "MasonLog" },
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n5\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\26plugins.configs.mason\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/mason.nvim",
    url = "https://github.com/williamboman/mason.nvim"
  },
  ["nvim-cmp"] = {
    after = { "LuaSnip" },
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n3\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\24plugins.configs.cmp\frequire\0" },
    load_after = {
      ["friendly-snippets"] = true
    },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/nvim-cmp",
    url = "https://github.com/hrsh7th/nvim-cmp"
  },
  ["nvim-lspconfig"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n9\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\30plugins.configs.lspconfig\frequire\0" },
    load_after = {
      ["nvim-semantic-tokens"] = true
    },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/nvim-lspconfig",
    url = "https://github.com/neovim/nvim-lspconfig"
  },
  ["nvim-notify"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/nvim-notify",
    url = "https://github.com/rcarriga/nvim-notify"
  },
  ["nvim-semantic-tokens"] = {
    after = { "nvim-lspconfig" },
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n?\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0$plugins.configs.semantic_tokens\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/nvim-semantic-tokens",
    url = "https://github.com/backtolife2021/nvim-semantic-tokens"
  },
  ["nvim-tree.lua"] = {
    commands = { "NvimTreeToggle", "NvimTreeFocus" },
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n8\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\29plugins.configs.nvimtree\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/nvim-tree.lua",
    url = "https://github.com/kyazdani42/nvim-tree.lua"
  },
  ["nvim-treesitter"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n:\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\31plugins.configs.treesitter\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/nvim-treesitter",
    url = "https://github.com/nvim-treesitter/nvim-treesitter"
  },
  ["nvim-web-devicons"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    load_after = {
      dracula = true
    },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/nvim-web-devicons",
    url = "https://github.com/kyazdani42/nvim-web-devicons"
  },
  ["packer.nvim"] = {
    commands = { "PackerSnapshot", "PackerSnapshotRollback", "PackerSnapshotDelete", "PackerInstall", "PackerUpdate", "PackerSync", "PackerClean", "PackerCompile", "PackerStatus", "PackerProfile", "PackerLoad" },
    config = { "\27LJ\2\n-\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\18plugins.index\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/packer.nvim",
    url = "https://github.com/wbthomason/packer.nvim"
  },
  playground = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    loaded = false,
    needs_bufread = true,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/playground",
    url = "https://github.com/nvim-treesitter/playground"
  },
  ["plenary.nvim"] = {
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/plenary.nvim",
    url = "https://github.com/nvim-lua/plenary.nvim"
  },
  ["size-matters.nvim"] = {
    cond = { "\27LJ\2\n\17\0\0\1\1\0\0\2-\0\0\0L\0\2\0\3À\0" },
    config = { "\27LJ\2\nu\0\0\1\0\6\0\0196\0\0\0009\0\1\0009\0\2\0\14\0\0\0X\1\r€6\0\0\0009\0\1\0009\0\3\0\14\0\0\0X\1\b€6\0\0\0009\0\1\0009\0\4\0\14\0\0\0X\1\3€6\0\0\0009\0\1\0009\0\5\0L\0\2\0\ngnvim\tnvui\rgoneovim\fneovide\6g\bvimÆ\1\1\0\a\0\n\0\0183\0\0\0\18\1\0\0B\1\1\2\15\0\1\0X\2\f€6\1\1\0'\3\2\0B\1\2\0029\1\3\0015\3\4\0006\4\5\0009\4\6\0049\4\a\4'\6\b\0B\4\2\2=\4\t\3B\1\2\1K\0\1\0\15reset_font\fguifont\20nvim_get_option\bapi\bvim\1\0\3\18notifications\2\14step_size\3\1\21default_mappings\2\nsetup\17size-matters\frequire\0\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/size-matters.nvim",
    url = "https://github.com/tenxsoydev/size-matters.nvim"
  },
  ["surround.nvim"] = {
    config = { "\27LJ\2\nU\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0005\2\3\0B\0\2\1K\0\1\0\1\0\1\19mappings_style\rsurround\nsetup\rsurround\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/surround.nvim",
    url = "https://github.com/Mephistophiles/surround.nvim"
  },
  ["telescope.nvim"] = {
    commands = { "Telescope" },
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    config = { "\27LJ\2\n9\0\0\3\0\2\0\0046\0\0\0'\2\1\0B\0\2\1K\0\1\0\30plugins.configs.telescope\frequire\0" },
    loaded = false,
    needs_bufread = true,
    only_cond = false,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/telescope.nvim",
    url = "https://github.com/nvim-telescope/telescope.nvim"
  },
  ["vim-commentary"] = {
    cond = { "\27LJ\2\n+\0\0\1\0\3\0\0056\0\0\0009\0\1\0009\0\2\0\19\0\0\0L\0\2\0\14is_vscode\6g\bvim\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = true,
    path = "/home/i.want.to.believe/.local/share/nvim/site/pack/packer/opt/vim-commentary",
    url = "https://github.com/tpope/vim-commentary"
  }
}

time([[Defining packer_plugins]], false)
local module_lazy_loads = {
  ["^mason"] = "mason.nvim",
  ["^notify"] = "nvim-notify",
  ["^nvim%-semantic%-tokens"] = "nvim-semantic-tokens",
  ["^nvim%-treesitter"] = "nvim-treesitter",
  ["^packer"] = "packer.nvim",
  ["^plenary"] = "plenary.nvim",
  ["^telescope"] = "telescope.nvim"
}
local lazy_load_called = {['packer.load'] = true}
local function lazy_load_module(module_name)
  local to_load = {}
  if lazy_load_called[module_name] then return nil end
  lazy_load_called[module_name] = true
  for module_pat, plugin_name in pairs(module_lazy_loads) do
    if not _G.packer_plugins[plugin_name].loaded and string.match(module_name, module_pat) then
      to_load[#to_load + 1] = plugin_name
    end
  end

  if #to_load > 0 then
    require('packer.load')(to_load, {module = module_name}, _G.packer_plugins)
    local loaded_mod = package.loaded[module_name]
    if loaded_mod then
      return function(modname) return loaded_mod end
    end
  end
end

if not vim.g.packer_custom_loader_enabled then
  table.insert(package.loaders, 1, lazy_load_module)
  vim.g.packer_custom_loader_enabled = true
end

-- Setup for: FTerm.nvim
time([[Setup for FTerm.nvim]], true)
try_loadstring("\27LJ\2\nS\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0'\2\3\0B\0\2\1K\0\1\0\nfterm\17load_mapings\25plugins.load_mapings\frequire\0", "setup", "FTerm.nvim")
time([[Setup for FTerm.nvim]], false)
-- Setup for: nvim-lspconfig
time([[Setup for nvim-lspconfig]], true)
try_loadstring("\27LJ\2\nY\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0'\2\3\0B\0\2\1K\0\1\0\19nvim-lspconfig\17on_file_open\22plugins.lazy_load\frequire\0", "setup", "nvim-lspconfig")
time([[Setup for nvim-lspconfig]], false)
-- Setup for: telescope.nvim
time([[Setup for telescope.nvim]], true)
try_loadstring("\27LJ\2\nW\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0'\2\3\0B\0\2\1K\0\1\0\14telescope\17load_mapings\25plugins.load_mapings\frequire\0", "setup", "telescope.nvim")
time([[Setup for telescope.nvim]], false)
-- Setup for: nvim-treesitter
time([[Setup for nvim-treesitter]], true)
try_loadstring("\27LJ\2\nZ\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0'\2\3\0B\0\2\1K\0\1\0\20nvim-treesitter\17on_file_open\22plugins.lazy_load\frequire\0", "setup", "nvim-treesitter")
time([[Setup for nvim-treesitter]], false)
-- Setup for: nvim-tree.lua
time([[Setup for nvim-tree.lua]], true)
try_loadstring("\27LJ\2\nV\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0'\2\3\0B\0\2\1K\0\1\0\rnvimtree\17load_mapings\25plugins.load_mapings\frequire\0", "setup", "nvim-tree.lua")
time([[Setup for nvim-tree.lua]], false)
-- Conditional loads
time([[Conditional loading of size-matters.nvim]], true)
  require("packer.load")({"size-matters.nvim"}, {}, _G.packer_plugins)
time([[Conditional loading of size-matters.nvim]], false)
time([[Conditional loading of nvim-cmp]], true)
  require("packer.load")({"nvim-cmp"}, {}, _G.packer_plugins)
time([[Conditional loading of nvim-cmp]], false)
time([[Conditional loading of nvim-web-devicons]], true)
  require("packer.load")({"nvim-web-devicons"}, {}, _G.packer_plugins)
time([[Conditional loading of nvim-web-devicons]], false)
time([[Conditional loading of FTerm.nvim]], true)
  require("packer.load")({"FTerm.nvim"}, {}, _G.packer_plugins)
time([[Conditional loading of FTerm.nvim]], false)
time([[Conditional loading of vim-commentary]], true)
  require("packer.load")({"vim-commentary"}, {}, _G.packer_plugins)
time([[Conditional loading of vim-commentary]], false)
time([[Conditional loading of lualine.nvim]], true)
  require("packer.load")({"lualine.nvim"}, {}, _G.packer_plugins)
time([[Conditional loading of lualine.nvim]], false)
time([[Conditional loading of nvim-lspconfig]], true)
  require("packer.load")({"nvim-lspconfig"}, {}, _G.packer_plugins)
time([[Conditional loading of nvim-lspconfig]], false)
time([[Conditional loading of alpha-nvim]], true)
  require("packer.load")({"alpha-nvim"}, {}, _G.packer_plugins)
time([[Conditional loading of alpha-nvim]], false)
time([[Conditional loading of dracula]], true)
  require("packer.load")({"dracula"}, {}, _G.packer_plugins)
time([[Conditional loading of dracula]], false)
time([[Conditional loading of playground]], true)
  require("packer.load")({"playground"}, {}, _G.packer_plugins)
time([[Conditional loading of playground]], false)
time([[Conditional loading of LuaSnip]], true)
  require("packer.load")({"LuaSnip"}, {}, _G.packer_plugins)
time([[Conditional loading of LuaSnip]], false)

-- Command lazy-loads
time([[Defining lazy-load commands]], true)
pcall(vim.api.nvim_create_user_command, 'PackerUpdate', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerUpdate', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerUpdate ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerClean', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerClean', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerClean ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerCompile', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerCompile', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerCompile ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerStatus', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerStatus', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerStatus ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerProfile', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerProfile', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerProfile ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerLoad', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerLoad', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerLoad ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'NvimTreeToggle', function(cmdargs)
          require('packer.load')({'nvim-tree.lua'}, { cmd = 'NvimTreeToggle', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'nvim-tree.lua'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('NvimTreeToggle ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'NvimTreeFocus', function(cmdargs)
          require('packer.load')({'nvim-tree.lua'}, { cmd = 'NvimTreeFocus', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'nvim-tree.lua'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('NvimTreeFocus ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'MasonInstall', function(cmdargs)
          require('packer.load')({'mason.nvim'}, { cmd = 'MasonInstall', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'mason.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('MasonInstall ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'MasonInstallAll', function(cmdargs)
          require('packer.load')({'mason.nvim'}, { cmd = 'MasonInstallAll', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'mason.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('MasonInstallAll ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'MasonUninstall', function(cmdargs)
          require('packer.load')({'mason.nvim'}, { cmd = 'MasonUninstall', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'mason.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('MasonUninstall ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'MasonUninstallAll', function(cmdargs)
          require('packer.load')({'mason.nvim'}, { cmd = 'MasonUninstallAll', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'mason.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('MasonUninstallAll ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'MasonLog', function(cmdargs)
          require('packer.load')({'mason.nvim'}, { cmd = 'MasonLog', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'mason.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('MasonLog ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerSync', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerSync', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerSync ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'Telescope', function(cmdargs)
          require('packer.load')({'telescope.nvim'}, { cmd = 'Telescope', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'telescope.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('Telescope ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'Mason', function(cmdargs)
          require('packer.load')({'mason.nvim'}, { cmd = 'Mason', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'mason.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('Mason ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerSnapshot', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerSnapshot', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerSnapshot ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerSnapshotRollback', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerSnapshotRollback', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerSnapshotRollback ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerSnapshotDelete', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerSnapshotDelete', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerSnapshotDelete ', 'cmdline')
      end})
pcall(vim.api.nvim_create_user_command, 'PackerInstall', function(cmdargs)
          require('packer.load')({'packer.nvim'}, { cmd = 'PackerInstall', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'packer.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('PackerInstall ', 'cmdline')
      end})
time([[Defining lazy-load commands]], false)

vim.cmd [[augroup packer_load_aucmds]]
vim.cmd [[au!]]
  -- Filetype lazy-loads
time([[Defining lazy-load filetype autocommands]], true)
vim.cmd [[au FileType alpha ++once lua require("packer.load")({'nvim-tree.lua'}, { ft = "alpha" }, _G.packer_plugins)]]
time([[Defining lazy-load filetype autocommands]], false)
  -- Event lazy-loads
time([[Defining lazy-load event autocommands]], true)
vim.cmd [[au InsertEnter * ++once lua require("packer.load")({'friendly-snippets'}, { event = "InsertEnter *" }, _G.packer_plugins)]]
vim.cmd [[au BufRead * ++once lua require("packer.load")({'antovim', 'surround.nvim', 'indent-blankline.nvim'}, { event = "BufRead *" }, _G.packer_plugins)]]
time([[Defining lazy-load event autocommands]], false)
vim.cmd("augroup END")

_G._packer.inside_compile = false
if _G._packer.needs_bufread == true then
  vim.cmd("doautocmd BufRead")
end
_G._packer.needs_bufread = false

if should_profile then save_profiles() end

end)

if not no_errors then
  error_msg = error_msg:gsub('"', '\\"')
  vim.api.nvim_command('echohl ErrorMsg | echom "Error in packer_compiled: '..error_msg..'" | echom "Please check your config for correctness" | echohl None')
end
