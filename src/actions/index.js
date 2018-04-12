export const keepInJar = (wisdom) => ({
  type: 'KEEP_IN_JAR',
  wisdom
});

export const takeOffJar = (id) => ({
  type: 'TAKE_OFF_JAR',
  id
});