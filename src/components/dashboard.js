import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Dashboard({ inputs, setInputs }) {
  // const [data, setData] = useState(
  //   JSON.parse(localStorage.getItem("formData"))
  // );
  const [data, setData] = useState(
    JSON.parse(useParams()["data"])
  );

  const handleChange = (event, key) => {
    setData((values) => ({ ...values, [key]: event.target.value }));
  };

  const handleChecked = (key, value) => {
    const hobbies = data.hobbies;
    !data.hobbies.includes(value) ? hobbies.push(value) : hobbies.pop(value);
    setData((values) => ({ ...values, [key]: hobbies }));
  };

  const NameComp = () => {
    return (
      <input
        type="text"
        value={data.sname}
        onChange={(e) => handleChange(e, "sname")}
      />
    );
  };
  const CollegeComp = () => {
    return (
      <textarea value={data.cname} onChange={(e) => handleChange(e, "cname")} />
    );
  };
  const DobComp = () => {
    return (
      <input
        id="dob"
        type="date"
        value={data.dob}
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
          checked={data.gender === "male"}
          onChange={(e) => handleChange(e, "gender")}
        />
        <label htmlFor="r-male">Male</label>
        <input
          id="r-female"
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === "female"}
          onChange={(e) => handleChange(e, "gender")}
        />
        <label htmlFor="r-female">Female</label>
        <input
          id="r-other"
          type="radio"
          name="gender"
          value="other"
          checked={data.gender === "other"}
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
          checked={data.hobbies.includes("sports")}
          onChange={() => handleChecked("hobbies", "sports")}
        />
        <label htmlFor="sports">Sports</label>
        <input
          id="literature"
          type="checkbox"
          checked={data.hobbies.includes("literature")}
          onChange={() => handleChecked("hobbies", "literature")}
        />
        <label htmlFor="literature">Literature</label>
        <input
          id="leisure"
          type="checkbox"
          checked={data.hobbies.includes("leisure")}
          onChange={() => handleChecked("hobbies", "leisure")}
        />
        <label htmlFor="leisure">Leisure</label>
        <input
          id="skill"
          type="checkbox"
          checked={data.hobbies.includes("up-skilling")}
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
          Student Name: <EditItem data={data.sname} comp={<NameComp />} />
        </span>
        <span>
          College Name: <EditItem data={data.cname} comp={<CollegeComp />} />
        </span>
        <span>
          Data of Birth: <EditItem data={data.dob} comp={<DobComp />} />
        </span>
        <span>
          Gender: <EditItem data={data.gender} comp={<GenderComp />} />
        </span>
        <span>
          Hobbies:{" "}
          <EditItem data={data.hobbies.join(" ")} comp={<HobbiesComp />} />
        </span>
      </div>
    </div>
  );
}

function EditItem({ data, comp }) {
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
          {data} <i className="fa fa-pencil" onClick={editToggle}></i>
        </span>
      </div>
    );
  }
}
