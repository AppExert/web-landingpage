/* eslint-disable react/prop-types */
import {
  createClient,
  createPortableTextComponent,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from "next-sanity";

import { config } from "./sanity-config";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const imageBuilder = createImageUrlBuilder(config);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format").fit("max");

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

const CodeBlock = (props) => (
  <pre data-language={props.node.language}>
    <code>{props.node.code}</code>
  </pre>
);

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      code: CodeBlock,
    },
  },
});

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (preview) => (preview ? previewClient : client);
export function overlayDrafts(docs) {
  const documents = docs || [];
  const overlayed = documents.reduce((map, doc) => {
    if (!doc._id) {
      throw new Error("Ensure that `_id` is included in query projection");
    }

    const isDraft = doc._id.startsWith("drafts.");
    const id = isDraft ? doc._id.slice(7) : doc._id;
    return isDraft || !map.has(id) ? map.set(id, doc) : map;
  }, new Map());

  return Array.from(overlayed.values());
}
export default client;
