const mdxExtension = ".mdx";

const escapeAttribute = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const formatMDXBadge = ({ text, classname }) => {
  const className = classname
    ? ` className="gqlmd-badge gqlmd-badge-${escapeAttribute(classname.toLowerCase())}"`
    : ` className="gqlmd-badge"`;

  return `<mark${className}>${escapeAttribute(text)}</mark>`;
};

const formatMDXAdmonition = ({ text, title }) => {
  const heading = title ? `**${title}**\n\n` : "";
  return `\n> ${heading}${text}\n`;
};

const formatMDXBullet = (text = "") =>
  `<span className="gqlmd-bullet">&nbsp;*&nbsp;</span>${text}`;

const formatMDXDetails = ({ dataOpen }) =>
  `\n\n<details className="gqlmd-details">\n<summary className="gqlmd-details-summary">${escapeAttribute(dataOpen)}</summary>\n\n</details>\n\n`;

const formatMDXNameEntity = (name, parentType) => {
  const parentName = parentType
    ? `<code className="gqlmd-entity-parent">${escapeAttribute(parentType)}</code>.`
    : "";

  return `<span className="gqlmd-entity">${parentName}<code className="gqlmd-entity-name">${escapeAttribute(name)}</code></span>`;
};

const formatMDXSpecifiedByLink = (url) =>
  `<span className="gqlmd-specified-by">Specification: <a className="gqlmd-specified-by-link" target="_blank" rel="noreferrer" href="${escapeAttribute(url)}" title="Specified by ${escapeAttribute(url)}">${escapeAttribute(url)}</a></span>`;

const beforeComposePageTypeHook = (event) => {
  event.output = event.output.filter((section) => section !== "relations");
};

module.exports = {
  mdxExtension,
  formatMDXBadge,
  formatMDXAdmonition,
  formatMDXBullet,
  formatMDXDetails,
  formatMDXNameEntity,
  formatMDXSpecifiedByLink,
  beforeComposePageTypeHook,
};
