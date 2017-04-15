import path from 'path'

export const root = process.cwd()

// Files generated in the `build` process
export const dist = path.join(root, 'dist')
export const distClient = path.join(dist, 'client')

export const src = path.join(root, 'src')
export const srcClient = path.join(src, 'client')
