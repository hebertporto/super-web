export function allNovels (state, { payload }) {
  return { ...state, novels: payload }
}
