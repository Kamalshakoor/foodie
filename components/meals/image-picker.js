"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
   const [pickedImage, setPickedImage]  =useState([])

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handlePickImage = (event) => {
    const file = event.target.files[0];
    if(!file){
      setPickedImage(null)
      return
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPickedImage(reader.result);
    }
  };
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {pickedImage ? (
              <Image src={pickedImage} alt="preview" fill />
            ) : (
              <>                <div className={classes.placeholder}>
                  <span>+</span>
                </div>
                <p>pleae select an image</p>
                </>
            )}
          </div>
          <input
            className={classes.input}
            type="file"
            id="image"
            name={name}
            accept="image/png, image/jpeg, image/jpg"
            ref={imageInput}
            onChange={handlePickImage}
            required
          />
          <button type="button" className={classes.button} onClick={handlePickClick}>
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
