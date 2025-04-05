'use client'

import Image from 'next/image';
import { useRef, useState } from 'react'

import style from './image-picker.module.css'

function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);

    const imageInputRef = useRef()

    const handleClick = () => imageInputRef.current.click();

    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (!file) {
            setPickedImage(null)
            return
        }

        // set data URL for image
        const fileReader = new FileReader()
        fileReader.onload = () => setPickedImage(fileReader.result)
        fileReader.readAsDataURL(file)

    }

    return (
        <div className={style.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={style.controls}>
                <input type="file" name={name} id={name} accept='image/png, image/jpeg' className={style.input} ref={imageInputRef} onChange={handleImageChange} />
                <button type='button' onClick={handleClick} className={style.button}>Pick an Image</button>
                <div className={style.preview}>{!pickedImage ? <p>No image picked yet</p> : <Image src={pickedImage} alt='user selected image' fill />}</div>
            </div>
        </div>
    )
}

export default ImagePicker
