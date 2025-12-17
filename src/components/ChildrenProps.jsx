
function Card({ children, tittle, color="blue"}){
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  }

  return (
    <div className={` border-l-4 p-6 rounded-lg shadow-md  ${colorClasses[color]}`}>
      { tittle && (<h3 className="text-xl font-bold mb-3 text-gray-600">{tittle}</h3>)}
      <div className="text-gray-700">{children}</div>
    </div>
  )

}

function Container({ children, layout="vertical"}){
  const layoutClasses = {
    vertical: "flex flex-col gap-4",
    horizontal: "flex flex-row gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  }

  return (
    <div className={`${layoutClasses[layout]}`}>{children}</div>
  )

}

function ChildrenProps() {
  return (
    <section className="bg-white p-6 rounded-xl">
      <h1 className="font-bold text-5xl mb-4">Children Props</h1>
      <p className="font-medium mb-4"> 
      The children prop is a special prop in React that allows you to pass components or elements as the content between the opening and closing tags of a component. This is useful for creating reusable components that can wrap other components or elements, providing a consistent structure or styling while allowing for flexible content.
      </p>
      <div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Children props Example</h2>
          <Container layout="grid">
            <Card tittle="User Profile" color="blue">
              <p className="mb-2"> <strong>Name:</strong> Alamin Hossain</p>
              <p className="mb-2"> <strong>Email:</strong>alamin@gmail.com</p>
              <p className="mb-2"> <strong>Role:</strong> Student</p>
            </Card>
            <Card tittle="Statistics" color="green">
              <div className="flex justify-between mb-2">
                <p className="font-bold">Total User:</p>
                <span className="font-bold text-lg">1269</span>
              </div>
              <div className="flex justify-between mb-2">
                <p className="font-bold">Active Sessions:</p>
                <span className="font-bold text-lg">567</span>
              </div>
              <div className="flex justify-between mb-2">
                <p className="font-bold">Revenue:</p>
                <span className="font-bold text-lg">$91,000</span>
              </div>
            </Card>
            <Card tittle="Quick Actions" color="purple">
              <div className="flex flex-col space-y-3">
                <button className="bg-purple-500 rounded-lg py-3 font-bold text-lg text-white">Create New</button>
                <button className="bg-gray-600 rounded-lg py-3 font-bold text-lg text-white">View All</button>
              </div>
            </Card>
            <Card tittle="Warning" color="red">
              <p className="mb-2"> 
                <strong>Alert:</strong> Your account password will expire in 3 days. Please update your password to ensure uninterrupted access.
              </p>

            </Card>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default ChildrenProps