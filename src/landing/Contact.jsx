const Contact = () => {
  return (
    <div className="bg-yellow-100 mx-4 md:mx-28 py-8 md:py-16 px-4 md:px-14 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="text-black mb-8 md:mb-0 md:mr-8">
        <h2 className="text-4xl font-black mb-6">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-gray-600 font-bold">Email</h3>
            <p className="text-sm">support@educationalapp.com</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-gray-600 font-bold">Phone</h3>
            <p className="text-sm">+1 123-456-7890</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-bold">Address</h3>
            <p className="text-sm">123 Main Street, City, State, Country</p>
          </div>
        </div>
      </div>

      {/* Right Content */}

      <form className="flex flex-col  space-y-2  bg-gray-100 text-black p-4 rounded">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <div className="flex flex-col">
            <h4 className="font-medium">Name</h4>
            <input
              type="text"
              className="border rounded p-2"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium">Surname</h4>
            <input
              type="text"
              className="border rounded p-2"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium">Mail</h4>
          <input
            type="email"
            className="border rounded p-2"
            placeholder="johndoe@mail.net"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium">Address</h4>
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Capitol, WA"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium">Description</h4>
          <textarea className="border rounded p-2"></textarea>
        </div>
        <button className="bg-[#590E87] text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
