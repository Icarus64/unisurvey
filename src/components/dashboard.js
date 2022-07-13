import { useState } from "react";

export default function Dashboard({ appState, setAppState }) {
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

  const NameComp = () => {
    return (
      <input
        type="text"
        value={appState.sname}
        onChange={(e) => handleChange(e, "sname")}
      />
    );
  };
  const CollegeComp = () => {
    return (
      <textarea
        value={appState.cname}
        onChange={(e) => handleChange(e, "cname")}
      />
    );
  };
  const DobComp = () => {
    return (
      <input
        id="dob"
        type="date"
        value={appState.dob}
        onChange={(e) => handleChange(e, "dob")}
      />
    );
  };
  const GenderComp = () => {
    return (
      <div id="gender-radio">
        <label htmlFor="gender-radio">Gender: </label>
        <input
          id="r-male"
          type="radio"
          name="gender"
          value="male"
          checked={appState.gender === "male"}
          onChange={(e) => handleChange(e, "gender")}
        />
        <label htmlFor="r-male">Male</label>
        <input
          id="r-female"
          type="radio"
          name="gender"
          value="female"
          checked={appState.gender === "female"}
          onChange={(e) => handleChange(e, "gender")}
        />
        <label htmlFor="r-female">Female</label>
        <input
          id="r-other"
          type="radio"
          name="gender"
          value="other"
          checked={appState.gender === "other"}
          onChange={(e) => handleChange(e, "gender")}
        />
        <label htmlFor="r-other">Other</label>
      </div>
    );
  };
  const HobbiesComp = () => {
    return (
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
    );
  };

  return (
    <div id="dashboard">
      <h2>Dashboard</h2>
      <div>
        <span>
          Student Name:{" "}
          <EditItem appState={appState.sname} comp={<NameComp />} />
        </span>
        <span>
          College Name:{" "}
          <EditItem appState={appState.cname} comp={<CollegeComp />} />
        </span>
        <span>
          appState of Birth:{" "}
          <EditItem appState={appState.dob} comp={<DobComp />} />
        </span>
        <span>
          Gender: <EditItem appState={appState.gender} comp={<GenderComp />} />
        </span>
        <span>
          Hobbies:{" "}
          <EditItem
            appState={appState.hobbies.join(" ")}
            comp={<HobbiesComp />}
          />
        </span>
      </div>
    </div>
  );
}

function EditItem({ appState, comp }) {
  const [edit, setEdit] = useState(false);
  const editToggle = () => setEdit(!edit);
  if (edit) {
    return (
      <div id="editable">
        {comp}
        <i className="fa fa-pencil" onClick={editToggle}></i>
      </div>
    );
  } else {
    return (
      <div id="editable">
        <span>
          {appState} <i className="fa fa-pencil" onClick={editToggle}></i>
        </span>
      </div>
    );
  }
}
