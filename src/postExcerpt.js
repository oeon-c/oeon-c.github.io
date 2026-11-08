export function postExcerpt(body) {
  return body
    .replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\(\/files\/[^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:#\d+|#x[0-9a-f]+|[a-z]+);/gi, " ")
    .replace(/https?:\/\/\S+|\/(?:images|files)\/\S+/g, " ")
    .replace(/^[ \t]{0,3}#{1,6}[ \t]+/gm, "")
    .replace(/[*_~`>#|\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
