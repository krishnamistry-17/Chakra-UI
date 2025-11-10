function withLoggerUser(WrappedComponent) {
  return function Enhaced(props) {
    return <WrappedComponent {...props} />;
  };
}

function User({ name }) {
  return <h1>Hello, {name}!</h1>;
}

const UserWithLogger = withLoggerUser(User);

export default UserWithLogger;
