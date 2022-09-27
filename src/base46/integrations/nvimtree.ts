const colors = require('base46.colors').dracula

export default {
  NvimTreeEmptyFolderName: { fg: colors.folder_bg },
  NvimTreeEndOfBuffer: { fg: colors.darker_black },
  NvimTreeFolderIcon: { fg: colors.folder_bg },
  NvimTreeFolderName: { fg: colors.folder_bg },
  NvimTreeGitDirty: { fg: colors.red },
  NvimTreeIndentMarker: { fg: colors.grey_fg },
  NvimTreeNormal: { bg: 'NONE' },
  NvimTreeNormalNC: { bg: 'NONE' },
  NvimTreeOpenedFolderName: { fg: colors.folder_bg },
  NvimTreeGitIgnored: { fg: colors.light_grey },
  NvimTreeWinSeparator: { fg: colors.black, bg: colors.black },
  NvimTreeWindowPicker: { fg: colors.red, bg: colors.black2 },
  NvimTreeCursorLine: { bg: colors.black2 },
  NvimTreeGitNew: { fg: colors.yellow },
  NvimTreeGitDeleted: { fg: colors.red },
  NvimTreeSpecialFile: { fg: colors.yellow, bold: true },
  NvimTreeRootFolder: { fg: colors.red, bold: true },
}
