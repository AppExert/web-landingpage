import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

export default function PostBody({ body }: any) {
  return (
    <div
      className='text-gray-400 max-w-2xl xl:max-w-4xl mx-auto text-[20px]'
    >
      <BlockContent blocks={body} className={markdownStyles.markdown} />
    </div>
  );
}
