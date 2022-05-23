import React, { useEffect } from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";

function Upload() {
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
  const [image, setImage] = useState("");
  const storageRef = ref(storage, `${image.name}`);
  const listRef = ref(storage, "");
  var danhsach1 = [];

  useEffect(() => {
    getImage();
  });

  const getImage = async () => {
    // Find all the prefixes and items.
    await listAll(listRef)
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
        img.setAttribute("src", url);
      });
    }
  };

  const listdata = () => {
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
    console.log(danhsach1.length);

    if (danhsach1.length > 0) {
      for (var i = 0; i < danhsach1.length; i++) {
        console.log(danhsach1[i]);
        deleteObject(ref(storage, danhsach1[i]));
      }
      console.log("File cũ đã bị xóa");
    } else {
      console.log("Danh sách rỗng");
    }
  };

  const uploadimage = () => {
    if (image === "") {
      alert("Bạn chưa thêm Lịch Trực!");
    } else {
      listdata(); //liet ke danh sach anh va xoa anh cu di
      uploadBytes(storageRef, image).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getImage();
      });
      alert("Đăng lịch trực thành công!");
      setImage("");
    }
  };

  return (
    <div>
      <center>
        <img
          id="myimg"
          className="d-block"
          alt="..."
          width="100%"
          height="450"
        />
        <div className="d-inline-flex gap-2 mt-2 ">
          <div className="card p-5">
            <h5>Hướng dẫn tải lịch trực mới lên hệ thống:</h5>
            <div className="text-start">
              <p>
                1. Click vào nút "Choose File" để hiển thị hộp thoại chọn ảnh
              </p>
              <p> 2. Chọn file ảnh lịch trực phù hợp</p>
              <p> 3. Click vào nút "Đăng lịch trực" để chọn kết quả</p>
              <p> 4. Hộp thoại thông báo xuất hiện để thông báo kết quả!</p>
            </div>
          </div>
          <div className="card p-5 text-center gap-2">
            <h5> Đường dẫn file lịch trực: </h5>
            <div>
              <p>
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </p>
              <p>
                <button className="btn btn-primary mt-2" onClick={uploadimage}>
                  Đăng lịch trực
                </button>
              </p>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Upload;
