import type { Plugin } from "./api";

const copy = (text: string) => void navigator.clipboard?.writeText(text);

const plugin: Plugin = {
  id: "message-tools",
  name: "Message Tools",
  description: "Adds quote and copy helpers to the message right-click menu, under Apps.",
  authors: ["OrangChat"],
  start: () => {},
  messageActions: [
    {
      id: "copy-quote",
      label: "Copy as quote",
      visible: (message) => message.content.length > 0,
      run: (message) =>
        copy(
          message.content
            .split("\n")
            .map((line) => `> ${line}`)
            .join("\n") + `\n- ${message.authorName}`,
        ),
    },
    {
      id: "copy-author-id",
      label: "Copy author ID",
      run: (message) => copy(message.authorId),
    },
    {
      id: "copy-timestamp",
      label: "Copy timestamp",
      run: (message) => copy(new Date(message.createdAt).toLocaleString()),
    },
  ],
};

export default plugin;
