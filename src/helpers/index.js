export const getMousePos = e => ({ x: e.clientX, y: e.clientY });
export const getMouseCoords = e => ({ x: e.clientX, y: e.clientY });
export const stripTags = (str, allow) => {
  // making sure the allow arg is a string containing only tags in lowercase (<a><b><c>)
  allow = ((`${allow || ''}`).toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

  const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return str.replace(commentsAndPhpTags, '').replace(tags, ($0, $1) => (allow.indexOf(`<${$1.toLowerCase()}>`) > -1 ? $0 : ''));
};
