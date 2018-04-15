export const loadWisdoms = (wisdoms) => ({
  type: 'LOAD_WISDOMS',
  wisdoms
});

export const keepInJar = (wisdom) => ({
  type: 'KEEP_IN_JAR',
  wisdom
});

export const trashFromJar = (id) => ({
  type: 'TRASH_FROM_JAR',
  id
});

export const loadMoons = (moonphases) => ({
  type: 'LOAD_MOONS',
  moonphases
});