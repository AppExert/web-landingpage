type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line react/prop-types
const PostTitle: React.FC<Props> = ({ children }) => {
  return (
    <h1 className='text-xl md:text-2xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'>
      {children}
    </h1>
  );
};

export default PostTitle;
