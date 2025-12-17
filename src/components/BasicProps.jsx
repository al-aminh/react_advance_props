import { useState } from "react"

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      className={`px-4 py-2 mr-2 rounded-lg font-medium transition-all
        ${color === "primary" ? 'bg-blue-500' : ''}
        ${color === "secondary" ? 'bg-gray-500' : ''}
        ${color === "danger" ? 'bg-red-500' : ''}
        ${color === "success" ? 'bg-green-500' : ''}
        ${size === "small" ? 'px-2 py-1 text-sm' : ''}
        ${size === "large" ? 'px-6 py-4 text-lg' : ''}
        ${disabled ? 'opacity-50  cursor-not-allowed' : 'coursor-pointer hover:brightness-90'}

      `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

function BasicProps() {

  const [clickedButton, setClickedButton] = useState(0);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md ">
      <h1 className="text-4xl font-bold mb-2">Basic Props</h1>

      

      <p className="text-md mb-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptatum quaerat necessitatibus quidem, ab odit?</p>
      <div>
        <h2 className="text-xl font-bold">Different Colored button</h2>
        <div className="mt-4 mb-4">
          <Button text="Primary Button" color="primary" onClick={() => setClickedButton(clickedButton + 1)} />
          <Button text="Secondary Button" color="secondary" onClick={() => setClickedButton(clickedButton + 1)} />
          <Button text="Danger Button" color="danger" onClick={() => setClickedButton(clickedButton + 1)} />
          <Button text="Success Button" color="success" onClick={() => setClickedButton(clickedButton + 1)} />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">Different sized button</h2>
        <div className="mt-4">
          <Button text="Primary small" size="small" color="primary" onClick={() => setClickedButton(clickedButton + 1)} />
          <Button text="Secondary large" size="large" color="secondary" onClick={() => setClickedButton(clickedButton + 1)} />
          <Button text="Danger Button" color="danger" onClick={() => setClickedButton(clickedButton + 1)} />
          <Button text="Success Button" color="success" onClick={() => setClickedButton(clickedButton + 1)} />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">Disabled button</h2>
        <div className="mt-4">
          <Button text="Enabled button" color="primary" disabled={false}  onClick={() => setClickedButton(clickedButton + 1)}/>
          <Button text="Disabled button" color="primary" disabled={true}  onClick={() => alert("This button is unclickable")}/>
          <Button />
        </div>
      </div>
      <div className="bg-gray-300 w-full  p-2 rounded-lg mt-4">
        <h2 className="text-xl font-bold">Click count: {clickedButton}</h2>
      </div>
    </div>
  )
}

export default BasicProps