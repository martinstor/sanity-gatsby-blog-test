export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6070587e7316c24b98c79ce2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-test-studio-41m4n789",
                  apiId: "7830bc80-cbd5-4595-800a-e0a00bdaa7a6",
                },
                {
                  buildHookId: "6070587f8d4b3754632027d1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-test-web-bumeu4og",
                  apiId: "91c3d07a-aa32-46ff-bbe7-d5d0d0a81d85",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/martinstor/sanity-gatsby-blog-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-test-web-bumeu4og.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
