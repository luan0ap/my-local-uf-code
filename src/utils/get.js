export const get = url => fetch(url).then(o => o.json())