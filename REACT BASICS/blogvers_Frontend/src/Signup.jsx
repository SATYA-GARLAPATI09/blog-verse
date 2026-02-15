import Navbar from "./Navbar";
function Signup() {
  return (
    <>
    <Navbar/>

    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
    <div className="shadow-2xl rounded-4xl bg-white border-radius-10% h-140 w-100 bg-white-300 flex flex-col ">
      <div className="p-10 flex flex-col items-center">
        <h3 className="font-bold text-2xl">Sign In</h3>
        <p>Access your account</p>
      </div>
      <div>
       <div className="flex flex-col p-5  gap-5">
          <div className="flex flex-col gap-3">
            <p>Email Address</p>
            <input
              className="border-2 rounded-xl p-2"
              type="email"
              placeholder="✉️ sample@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <p>Passward</p>
            <input
              className="border-2 rounded-xl p-2  "
              type="passward"
              placeholder="🔒 sample123"
              
            />
            <p></p>
          </div>
        </div>
      </div>
      <div className=" p-5 flex justify-between">
        <div className="flex ">
          <input type="checkbox" name="" id="" />
          <p>Remember me</p>
        </div>
 
        <a className="text-blue-500" href="">
          Forgot password?
        </a>
      </div>
      <div className="p-3 font-bold bg-blue-500 rounded-lg mx-10 flex justify-center">
        <input type="button" value="🚪Sign In" />
      </div>
      <div className="flex justify-evenly mt-8 p-5">
        <p>Don't have an Accont</p>
        <a className="text-blue-500" href="">
          Create here
        </a>
      </div>
    </div>
    </div></>
  );
}
export default Signup;
