import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("John Doe");
  const [age, setAge] = useState<number>(23);
  const [description, setDescription] = useState<string>(
    "A great programmer learning React"
  );

  return (
    <>
      <div className="profile-card">
        <h2>Profile Card</h2>
        <p>
          <strong>Name: </strong>
          {name}
        </p>
        <p>
          <strong>Age: </strong>
          {age}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>

        <h3>Update Profile</h3>
        <input
          type="text"
          placeholder="Enter new Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter new Age"
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
        <input
          type="text"
          placeholder="Enter new Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
