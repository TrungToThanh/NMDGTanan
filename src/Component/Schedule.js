import React from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import "./Schedule.css";

function Schedule() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDOmrwAblfm7odBFMUZ5gTy36-doszysqk",
    authDomain: "nmdgtanan.firebaseapp.com",
    projectId: "nmdgtanan",
    storageBucket: "nmdgtanan.appspot.com",
    messagingSenderId: "174612598352",
    appId: "1:174612598352:web:6c5336bd6f8d5595f74b55",
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const storage = getStorage(firebaseApp);
  const [image, setImage] = useState("none");

  const listRef = ref(storage, "");

  var danhsach1 = [];

  function getImage() {
    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          danhsach1.push(itemRef.name);
        });
      })
      .catch((error) => {
        console.log("lỗi");
        // Uh-oh, an error occurred!
      });

    if (danhsach1.length > 0) {
      getDownloadURL(ref(storage, danhsach1[0])).then((url) => {
        const img = document.getElementById("myimg");
        if (image === "none") {
          setImage("block");
          img.setAttribute("src", url);
        } else {
          setImage("none");
          img.setAttribute("src", "");
        }
      });
    }
  }

  return (
    <div>
      <center>
        <div className="Schedule d-flex justify-content-center mt-2">
          <h5>Lịch trực nhà máy điện gió Tân Ân 1</h5>
          <button onClick={getImage} className="btn btn-light btn-sm">
            <i class="fa fa-arrow-down" aria-hidden="true"></i>{" "}
            <i class="fa fa-arrow-up" aria-hidden="true"></i>{" "}
          </button>
        </div>
        <div style={{ display: image }}>
          <img
            id="myimg"
            className="d-block"
            alt="..."
            width="100%"
            height="450"
          />
        </div>
      </center>
    </div>
  );
}

export default Schedule;
