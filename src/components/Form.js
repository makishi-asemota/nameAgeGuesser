export default function Form({ input, setInput, names, setNames }) {
  const handleClick = async (e) => {
    e.preventDefault();
    // check if input field is empty
    if (input === "") {
      alert("please enter a name!");
    } else {
      try {
        // fetch data from api using input value as parameter
        const response = await fetch(`https://api.agify.io/?name=${input}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const result = await response.json();
        // append input to names array
        setNames((array) => [...array, result]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <form>
        <div>
          <label>
            Please enter a name here:
            <input
              type="text"
              name="name"
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>

      <h3>All Guesses</h3>
      {names.map((data, index) => {
        return (
          <div key={index}>
            <ul>
              <li>
                {data.name} - {data.age}
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
