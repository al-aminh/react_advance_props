import { useRef, forwardRef } from "react"

const CustomInput = forwardRef(({label, placeholder, className}, ref) => {
  return (
    <div></div>
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
    <div>RefProps</div>
  )
}

export default RefProps