export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
    },
    {
      name: "headerImage",
      title: "Header Image",
      type: "image",
    },
    {
      name: "desc",
      title: "Project Description",
      type: "text",
    },
    {
      name: "techUsed",
      title: "Technology Used",
      type: "text",
    },
    {
      name: "liveHref",
      title: "Portfolio Live Link",
      type: "url",
    },
    {
      name: "githubHref",
      title: "Portfolio Github Link",
      type: "url",
    },
    {
      name: "behanceHref",
      title: "Behance Link",
      type: "url",
    },
    {
      name: "isMobile",
      title: "Is A Mobile Project",
      type: "boolean",
    },
    {
      name: "isWeb",
      title: "Is A Web Project",
      type: "boolean",
    },
  ],
};
