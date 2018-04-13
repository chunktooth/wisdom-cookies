export const loadWisdoms = (wisdoms) => ({
  type: 'LOAD_WISDOMS',
  wisdoms
});

export const keepWisdom = (wisdom) => ({
  type: 'KEEP_WISDOM',
  wisdom
});

export const trashWisdom = (id) => ({
  type: 'TRASH_WISDOM',
  id
});