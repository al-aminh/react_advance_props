import { useState } from "react"


function UserProfileCard({user, theme, actions}){
  return (
    <div className={`p-6 shadow-md rounded-xl ${theme.backgroundColor} ${theme.textColor}`}> 
    <div className="flex space-x-4">

        <div className={`flex items-center  justify-center shadow-lg h-16 w-16 rounded-full  ${theme.avatarBg} `}>
          <span className="text-2xl">{user.avatar}</span>

        </div>
        <div>
          <h2 className="text-black text-xl font-bold">{user.name}</h2>
          <p className="text-gray-300">{user.email}</p>
          <div className="p-3 space-x-2">
            <span className={`px-3 text-center text-gray-500 py-2 rounded-2xl ${theme.avatarBg}`}>{user.role}</span>
            <span className={`px-3 text-center text-gray-500 py-2 rounded-2xl ${theme.avatarBg}`}>{user.status}</span>
          </div>
        </div>
    </div>
    <hr className="text-gray-500 mt-4"/>
    <div>
      {user.stats && (<div className="flex justify-between px-20 mt-6 mb-4">
        {Object.entries(user.stats).map(([key, value]) => <div className="flex flex-col" key={key}>
          <span className="text-2xl font-bold text-gray-800">{value}</span>
          <span className="text-gray-700">{key}</span>
        </div>)}
      </div>)}
    </div>
    <div className="flex justify-between space-x-1">
      <button onClick={actions.primary.onClick} className={`flex-1  rounded-lg  p-4 ${actions.primary.className}`}>{actions.primary.label}</button>
      <button onClick={actions.secondary.onClick} className={`flex-1  rounded-lg  p-4 ${actions.secondary.className}`}>{actions.secondary.label}</button>
    </div>
      
    </div>
  )
}

function ComplexProps() {

  const [message, setMessage] = useState("")

  const users =  [
    {
      user: {
        name: 'Alice  Jhonson',
        email: "alice@gmail.com",
        avatar: "😎",
        role: "Admin",
        status: "active",
        stats: {
          post: 120,
          followers: 3500,
          following: 180
        }
      },
      theme: {
        backgroundColor: "bg-gradient-to-r from-purple-100 to-blue-100",
        textColor: "text-white",
        avatarBg: "bg-purple-300",
        bagdeBg: "bg-purple-200"
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("viewing profile of Alice Jhonson"),
          className: "text-white bg-purple-600 font-bold"
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("messaging Alice Jhonson"),
          className: "text-purple-600 bg-white font-bold"
        }
      }
    },
    {
      user: {
        name: 'Bob Smith',
        email: "bob@gmail.com",
        avatar: "👩‍💻",
        role: "Developer",
        status: "online",
        stats: {
          projects: 45,
          commits: 1200,
          reviews: 300
        }
      },
      theme: {
        backgroundColor: "bg-gradient-to-r from-green-100  to-purple-100",
        textColor: "text-white",
        avatarBg: "bg-green-300",
        bagdeBg: "bg-green-200"
      },
      actions: {
        primary: {
          label: "View Dashboard",
          onClick: () => setMessage("viewing dashboard of Bob Smith"),
          className: "text-white bg-green-600 font-bold "
        },
        secondary: {
          label: "Contact",
          onClick: () => setMessage("contacting Bob Smith"),
          className: "text-green-600 bg-white font-bold "
        }
      }
    }
  ] 

  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h2 className="text-4xl font-bold mb-4">Complex/Nested Props</h2>
      <p className="font-medium mb-4"> Complex props allows you to pass nested objects and functions, enabling component configuration and interaction</p>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">User Profile Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((userData, index) => <UserProfileCard key={index} {...userData}/>)}
        </div>
      </div>
    </div>
  )
}

export default ComplexProps