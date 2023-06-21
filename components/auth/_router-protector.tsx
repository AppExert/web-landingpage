const withPrivate = (Component: any) => {
  return function WithPrivate(props: any) {
    return <Component {...props} />;
  };
};

export default withPrivate;
