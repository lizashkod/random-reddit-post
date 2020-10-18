export const loadState = () => {
  try {
    const state = localStorage.getItem('state')
    return state ? JSON.parse(state) : {}
  } catch (err) {
    console.err(err)
    return {}
  }
}

export const saveState = state => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch {}
}
