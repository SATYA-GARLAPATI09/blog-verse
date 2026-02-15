import Navbar from "./Navbar";
function Login() {
  return (
    <>
        <Navbar/>

      <div>
        <h1 className="text-violet-500 text-4xl">Join Blog Verse</h1>
        <p>Create your account and start your blogging journey today</p>
      </div>
      <div className="shadow-amber-100 rounded-4xl bg-white border-radius-10% h-150 w-100 bg-white-300 flex flex-col  justify-center items-center ">
        <h4>Full Name</h4>
        <input placeholder="Enter your full name" type="text" />
        <h4>Email Address</h4>
        <input placeholder="Enter your Email Address" type="text" />
        <h4>Full Name</h4>
        <input placeholder="Create a strong password" type="text" />
        <h4>Full Name</h4>
        <input placeholder="confirm your Password" type="text" />
        
      </div>
    </>
  );
}
export default Login;
