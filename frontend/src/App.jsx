import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [image, setImage] = useState();
  const [title, setTilte] = useState();
  const [description, setDescription] = useState();
  const [allImage, setAllImage] = useState();

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const result = await axios.get("http://localhost:3000/media/get-image");
    console.log(result);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    console.log(image, title, description);

    const result = await axios.post(
      "http://localhost:3000/media/upload-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <>
      <form method="POST" onSubmit={submitImage}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTilte(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input type="file" accept="image/*" onChange={onInputChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
      {allImage == null
        ? ""
        : allImage.map((data) => {
            return (
              <img
                key={data._id}
                src={require(`./images/${data.image}`)}
                height={100}
                width={100}
              />
            );
          })}
    </>
  );
}

export default App;
