import rif from 'replace-in-file'

const r = rif.replaceInFileSync({
  files: './lua/lualib_bundle.lua',
  from: /(thisArg, |, thisArg)/g,
  to: '',
})

console.log(r)
