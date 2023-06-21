/* eslint-disable react/prop-types */
import cn from "classnames";
type Props = {
  className?: string;
  children: React.ReactNode;
};
const Container: React.FC<Props> = ({ children, ...props }) => {
  const classProps = props.className;
  return (
    <div
      className={cn(
        classProps,
        "container md:px-6 px-4 mx-auto max-w-screen-xl"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
