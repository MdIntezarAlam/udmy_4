// import React, { useState } from "react";
// const Apps = () => {
//   const [name, setName] = useState(""); //setname
//   const [updateName, setUdateName] = useState([]); //update new name
//   const changeName = (e) => {
//     setName(e.target.value);
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();
//     //update new user in the form
//     setUdateName([...updateName, { id: name.length, name }]);
//     setName("");
//   };

//   return (
//     <div style={{ textAlign: "center", margin: "30px auto" }}>
//       <form onSubmit={formSubmit}>
//         <input type="text" name="" value={name} onChange={changeName} />
//         <button type="submit">Add Users</button>
//       </form>
//       <hr />
//       {updateName.map((user) => (
//         <li>{user.name}</li>
//       ))}
//     </div>
//   );
// };

// export default Apps;

 