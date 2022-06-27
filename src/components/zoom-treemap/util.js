// Formats the text displayed on each rectangle and in the <title> tag
// with name and version. If multiple version exist it lists "multiple"
export const formatText = (d) => {
  const { version, name } = d.data;
  if (typeof version === "string") {
    return `${name}/v.${version}`;
  } else if (!version) {
    return `${name}`;
  } else {
    return `${name}/multiple-versions`;
  }
};

// Assigns a color  to the root and each repo, randomly assigns colors to component tiles
export const selectColor = (repo) => {
  const colors = {
    flare: "white",
    vis: "#d53e4f",
    util: "#f46d43",
    query: "#fdae61",
    analytics: "#fee08b",
    animate: "#e6f598",
    scale: "#abdda4",
    physics: "#66c2a5",
    data: "#3288bd",
    display: "#5e4fa2",
    flex: "#9e0142",
  };

  if (colors[repo]) {
    return colors[repo];
  } else {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
  }
};
