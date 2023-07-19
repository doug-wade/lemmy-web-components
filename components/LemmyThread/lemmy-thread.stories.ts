import LemmyPost from "./lemmy-thread";

export default {
  title: "lemmy-post",
  tags: ["autodocs"],
  render: ({ postUrl }) => {
    return `<lemmy-thread post-url="${postUrl}"></lemmy-thread>`;
  },
};

export const Default = {
  args: {
    postUrl: "https://lemmy.world/post/1540834",
  },
};
