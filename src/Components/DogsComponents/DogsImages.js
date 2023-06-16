import { useEffect } from "react"

const DogsImages = () => {
  return (
    useEffect(() => {
        fetch('https://dog.ceo/api/breed/hound/images')
        .then(res => res.json())
        .then(data => {
        //   console.log(data.message)
        })
      
      
      }, [])  )
}

export default DogsImages