import { useNavigate } from "react-router-dom";

export default function Uniform({ appState, setAppState }) {
  const navigate = useNavigate();

  const handleChange = (event, key) => {
    setAppState((values) => ({ ...values, [key]: event.target.value }));
  };

  const handleChecked = (key, value) => {
    const hobbies = appState.hobbies;
    !appState.hobbies.includes(value)
      ? hobbies.push(value)
      : hobbies.pop(value);
    setAppState((values) => ({ ...values, [key]: hobbies }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAppState(appState);
    navigate("/dashboard");
  };

  return (
    <form id="uniform" onSubmit={handleSubmit}>
      <label htmlFor="sname">Student Name: </label>
      <input
        id="sname"
        type="text"
        value={appState.sname || ""}
        onChange={(e) => handleChange(e, "sname")}
      />
      <br />
      <label htmlFor="cname">College Name: </label>
      <textarea
        id="cname"
        rows={4}
        cols={30}
        value={appState.cname || ""}
        onChange={(e) => handleChange(e, "cname")}
      ></textarea>
      <br />
      <label htmlFor="dob">Date of birth: </label>
      <input
        id="dob"
        type="date"
        value={appState.dob || ""}
        onChange={(e) => handleChange(e, "dob")}
      />
      <br />
      <div id="gender-radio">
        <label htmlFor="gender-radio">Gender: </label>
        <input
          id="r-male"
          type="radio"
          name="gender"
          value="male"
          checked={appState.gender === "male" || false}
          onChange={(e) => handleChange(e, "gender")}
        />
        <label htmlFor="r-male">Male</label>
        <input
          id="r-female"
          type="radio"
          name="gender"
          value="female"
          checked={appState.gender === "female" || false}
          onChange={(e) => handleChange(e, "gender")}
        />
        <label htmlFor="r-female">Female</label>
        <input
          id="r-other"
          type="radio"
          name="gender"
          value="other"
          checked={appState.gender === "other" || false}
          onChange={(e) => handleChange(e, "gender")}
        />
        <label htmlFor="r-other">Other</label>
      </div>
      <br />
      <div id="hobbies">
        <label htmlFor="hobbies">Hobbies: </label>
        <input
          id="sports"
          type="checkbox"
          checked={appState.hobbies.includes("sports")}
          onChange={() => handleChecked("hobbies", "sports")}
        />
        <label htmlFor="sports">Sports</label>
        <input
          id="literature"
          type="checkbox"
          checked={appState.hobbies.includes("literature")}
          onChange={() => handleChecked("hobbies", "literature")}
        />
        <label htmlFor="literature">Literature</label>
        <input
          id="leisure"
          type="checkbox"
          checked={appState.hobbies.includes("leisure")}
          onChange={() => handleChecked("hobbies", "leisure")}
        />
        <label htmlFor="leisure">Leisure</label>
        <input
          id="skill"
          type="checkbox"
          checked={appState.hobbies.includes("up-skilling")}
          onChange={() => handleChecked("hobbies", "up-skilling")}
        />
        <label htmlFor="skill">Up-skilling</label>
      </div>
      <input id="submit" type="submit" />
    </form>
  );
}
