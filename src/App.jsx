import React, { useState, useEffect } from 'react'

const App = (props) => {
  const [hue, setHue] = useState(Math.round(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.round(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.round(Math.random() * 100))

  const changeHue = (e) => {
    let hue = e.target.value
    setHue(hue)
  }
  const changeSaturation = (e) => {
    let saturation = e.target.value
    setSaturation(saturation)
  }
  const changeLightness = (e) => {
    let light = e.target.value
    setLightness(lightness)
  }
  const randomButton = (e) => {
    setHue(Math.round(Math.random() * 360))
    setSaturation(Math.round(Math.random() * 100))
    setLightness(Math.round(Math.random() * 100))
  }

  const newColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  console.log(newColor)

  return (
    <>
      <section className="grid-container">
        <section className="header">Color Picker</section>
        <section>
          <section
            className="color-box"
            style={{ backgroundColor: newColor }}
          ></section>
          <p>Color is currently {newColor}</p>
          <br></br>
          <button style={{ backgroundColor: newColor }} onClick={randomButton}>
            Random Color
          </button>
        </section>
        <section className="property">H</section>
        <section className="slide-container">
          <input
            type="range"
            min="1"
            max="360"
            onChange={changeHue}
            value={hue}
            className="slider"
          />
        </section>
        <section className="property">S</section>
        <section className="slide-container">
          <input
            type="range"
            min="0"
            max="100"
            onInput={changeSaturation}
            value={saturation}
            className="slider"
          />
        </section>
        <section className="property">L</section>
        <section className="slide-container">
          <input
            type="range"
            min="0"
            onInput={changeLightness}
            value={lightness}
            className="slider"
          />
        </section>
      </section>
    </>
  )
}

export default App
