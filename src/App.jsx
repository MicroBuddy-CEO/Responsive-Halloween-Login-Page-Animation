import "./App.css";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import pumpkin from "./assets/Pumpkin Time.gif";
import bgLarge from "./assets/bg1.png";
import bgSmall from "./assets/bg2.png";
import img1 from "./assets/vector-tree.png";
import img2 from "./assets/moon.png";
import img3 from "./assets/vector-tree 2.png";
import img4 from "./assets/ghost 1.png";
import img5 from "./assets/ghost 2.png";
import img6 from "./assets/ghost 3.png";
import img7 from "./assets/bat 1.png";
import img8 from "./assets/bat 2.png";
import img9 from "./assets/devil 1.png";
import img10 from "./assets/devil 2.png";


const App = () => {

  return (
    <div className="App flex lg:flex-row flex-col lg:justify-start  lg:items-start font-Poppins relative">

      <img src={bgLarge} alt="" className="hidden lg:block w-screen absolute bottom-0 object-cover z-[1]"/>
      <img src={bgSmall} alt="" className="lg:hidden absolute bottom-0 object-cover z-[1]"/>

      <section className="lg:w-[45%] lg:mt-[80px]">
        <img src={pumpkin} alt="" className="scale-[1.3] lg:scale-[1]" />
      </section>

      <section className="lg:w-[52%] lg:ml-[-58px] lg:mt-[90px] z-[10]">
        <form className="flex flex-col gap-10 lg:w-[490px] justify-center items-center lg:mt-[15%]">
          <div className="username">
            <FaUser className="text-[20px] lg:text-[30px] text-[#EB6518]" />
            <input type="text" className="" />
          </div>

          <div className="username">
            <MdLock className="text-[20px] lg:text-[30px] text-[#EB6518]" />
            <input type="text" className="" />
          </div>

          <div className="btn lg:mt-5">
            <button>Log In</button>
          </div>
        </form>
      </section>

      <>
        {/* Left Side Images */}
        <img src={img1} alt="" className="absolute  bottom-[100px] lg:left-0 lg:top-0  w-[74px] h-[84px] lg:w-[341px] lg:h-[353px] treeAnim1" />

        {/* Right Side Images */}
         <img src={img2} alt="" className="w-[139px] h-[139px] lg:w-[600px] lg:h-[600px] rounded-full absolute right-4 bottom-[160px] lg:right-[-50px] lg:top-[-50px] z-[0] moon"/>

         
       <img src={img3} alt="" className="w-[50%] lg:w-[420px] lg:h-[480px] absolute right-[-40px] bottom-[150px] lg:top-[10px] treeAnim2"/>

        {/* Center Images */}
        {/* ghost */}
         <img src={img4} alt="" className="absolute w-[47px] h-[71px] lg:w-[82px] lg:h-[124px] left-[23%] lg:left-[43%] lg:top-[39.5%] top-[55%] ghostAnim" style={{animationDelay: ""}}/>

       <img src={img5} alt="" className="absolute left-[74%] top-[37%]  lg:left-[65%] lg:top-[17.5%] w-[40px] h-[60px]  lg:w-[69px] lg:h-[105px] ghostAnim" style={{animationDelay: "1s"}}/>
       
         <img src={img6} alt="" className="absolute w-[25px] h-[36px] left-[62%] bottom-[18%] lg:w-[42px] lg:h-[60px] lg:left-[50%] lg:top-[58%] ghostAnim" style={{animationDelay: ".5s"}}/>


        {/* Bat */}
       <img src={img7} alt="" className="absolute w-[65px] h-[48px] lg:w-[114px] lg:h-[84px] left-[11%] top-[37%]  lg:left-[38%] lg:top-[5%] batAnim" style={{animationDelay: ".3s"}}/>

        <img src={img8} alt="" className="absolute  w-[50px] h-[52px] right-[40px] bottom-[120px] lg:left-[54%] lg:top-[66%] batAnim" style={{animationDelay: "1s"}}/>

        {/* devil */}
         <img src={img9} alt="" className="absolute w-[51px] h-[43px] lg:w-[89px] lg:h-[75px] left-[78%] lg:left-[70%] top-[55%] lg:top-[42%] devilAnim" style={{animationDelay: ".5s"}}/>

       <img src={img10} alt="" className="absolute w-[47px] h-[41px] left-[35px] bottom-[220px] lg:left-[38%] lg:top-[55%] devilAnim" style={{animationDelay: "1s"}}/>
      </>



    </div>
  );
};

export default App;
