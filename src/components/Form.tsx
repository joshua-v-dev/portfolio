import { useState, ChangeEvent } from "react";

export default function Form() {
  const [selectValue, setSelectValue] = useState("coconut");

  const handleSubmit = () => {
    // TODO: implement form submission
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={selectValue} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
