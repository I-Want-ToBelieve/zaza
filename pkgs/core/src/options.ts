/** @onSelfInFile */

export const options = <Class extends { new (...args: any[]): any }>(cls: Class) => {
  const set = (opts: Partial<typeof vim.opt>) => {
    for (const [k, v] of Object.entries(opts)) {
      ;(vim.opt as any)[k] = v
    }
    return cls
  }

  function fn_table (opts: Partial<typeof vim.opt>) {
    return set(opts)
  }

  fn_table.set = set

  fn_table.get = (keys: keyof typeof vim.opt | (keyof typeof vim.opt)[]) => {
    const get_option = (key: keyof typeof vim.opt) =>
      // eslint-disable-next-line
      (vim.opt as any)[key].get((vim.opt as any)[key])

    if (Array.isArray(keys)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return keys.map((key) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return get_option(key)
      })
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return get_option(keys)
  }

  fn_table.append = (opts: Partial<typeof vim.opt>) => {
    for (const [k, v] of Object.entries(opts)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ;(vim.opt as any)[k].append(v)
    }
    return cls
  }

  fn_table.remove = (opts: Partial<typeof vim.opt>) => {
    for (const [k, v] of Object.entries(opts)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ;(vim.opt as any)[k].remove(v)
    }
    return cls
  }

  return fn_table
}
