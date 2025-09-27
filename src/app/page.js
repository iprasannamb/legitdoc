import Card from "../../component/Card";
import Nav from "../../component/Nav";
import Main from "../../component/Main";

export default function Home() {
  return (
    <>
    {/* Navigation Bar */}
<div className="h-12 text-2xl font-medium flex justify-center items-center">
<Nav/>
</div> 

{/* Home Page */}
<div className="flex w-max h-screen justify-center items-center-safe">
<Main/>
</div>
    </>
  );
}

