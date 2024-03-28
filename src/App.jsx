const App = () => {
  const name = "James Harden";
  const x = 10;
  const y = 20;
  const names = ["Gareth", "ronaldo", "messi"];
  const loggedIn = false;
  const styles = {
    color: "red",
    fontSize: "24px",
  };

  if (loggedIn) {
    return <h1>Hello Member</h1>;
  }
  return (
    <>
      <div className="text-5xl">APP</div>
      <p style={styles}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        {loggedIn ? <h1> Hello Member</h1> : <h1>Hello Guest</h1>}
      </ul>
    </>
  );
};

export default App;
