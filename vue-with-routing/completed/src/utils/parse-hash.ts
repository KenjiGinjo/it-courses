export function parseHash(hash: string) {
    hash = hash.slice(1)

    const [path, queryString] = hash.split('?')

    const query: { [key: string]: string } = {}
    if (queryString) {
        const params = new URLSearchParams(queryString)
        for (const [key, value] of params) {
            query[key] = value
        }
    }

    return { path: path || '/', query }
}