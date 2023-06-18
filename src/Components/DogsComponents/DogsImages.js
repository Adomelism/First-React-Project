import { useEffect, useState } from "react"

const DogsImages = ({breed}) => {

    const [img, setImg] = useState('')
    
    useEffect(() => {

        console.log(breed)
        if (!breed) {
            return;
        }

        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => res.json())
        .then(data => {
            setImg(data.message)
        })
      }, [breed])
  return (
    <div>
        {img && <img src={img} alt="dog"></img>}
    </div>
        )
}

export default DogsImages