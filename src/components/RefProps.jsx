import { useRef, forwardRef } from "react"

const CustomInput = forwardRef(({label, placeholder, className}, ref) => {
  return (
    <div >
      <label className="text-xl font-bold">{label}</label>
      <input
        ref={ref}
        placeholder={placeholder}
        className={className}
      />
    </div>
  )
})

CustomInput.displayName = "CustomInput"

function RefProps() {

  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const getFirstInputValue = () => {
    if(inputRef.current){
      alert(`Input Value: ${inputRef.current.value}`)
    }
  }

  const clearFirstValue = () => {
    if(inputRef.current){
      inputRef.current.value = ""
      inputRef.current.focus()
    }
  }

  const focusSecondInput = () => {
    secondInputRef.current?.focus()
  }

  const getSecondInputValue = () => {
    if(secondInputRef.current){
      alert(`Second Input Value: ${secondInputRef.current.value}`)
    }
  }

  const clearSecondInput = () => {
    if(secondInputRef.current){
      secondInputRef.current.value = ""
      secondInputRef.current.focus()
    }
  }


  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h1 className="text-4xl font-bold mb-4">Ref Props</h1>
      <p className="font-medium mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nostrum.</p>
      <div className="bg-blue-100 shadow-md p-4 rounded-xl">

        <div className="space-y-4">
          <CustomInput
            ref={inputRef}
            label="First Input"
            placeholder="Type Something"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <CustomInput
            ref={secondInputRef}
            label="Second Input"
            placeholder="Type Something else..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2 mt-4">
          <div className="space-x-2">
            <button onClick={focusInput} className="py-2 px-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-800 transition-all">Focus First</button>
            <button onClick={getFirstInputValue} className="py-2 px-4 rounded-2xl bg-green-600 text-white hover:bg-green-800 transition-all">Get First Value</button>
            <button onClick={clearFirstValue} className="py-2 px-4 rounded-2xl bg-red-600 text-white hover:bg-red-800 transition-all">Clear First</button>
          </div>
          <div className="space-x-2">
            <button onClick={focusSecondInput} className="py-2 px-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-800 transition-all">Focus Second</button>
            <button onClick={getSecondInputValue} className="py-2 px-4 rounded-2xl bg-green-600 text-white hover:bg-green-800 transition-all">Get Second Value</button>
            <button onClick={clearSecondInput} className="py-2 px-4 rounded-2xl bg-red-600 text-white hover:bg-red-800 transition-all">Clear Second</button>
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 shadow-md rounded-xl mt-4 p-4">
        <h3 className="text-xl font-bold mb-2">When to use refs: </h3>
        <ul className="list-disc list-inside space-y-1 font-medium">
          <li>Managing focus, text selection, Media playback</li>
          <li>Trigerring imperative animations</li>
          <li>Integrating with third-party DOM libraries</li>
          <li>Accessing DOM measurements(scroll position, element size)</li>
        </ul>
      </div>
    </div>
  )
}

export default RefProps