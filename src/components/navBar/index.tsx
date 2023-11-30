import {Link} from "react-router-dom";
// import Logo from "assets/image/header_logo.png";


export const NavBar = () => {
  return (
    <>
        <nav className="flex justify-between">
          <div className="flex items-center">
          {/* <img src={Logo} alt="" /> */}
              <p>LOGO</p>
          </div>
          <div className="flex gap-9">
              <ul className="flex gap-9 cursor-pointer text-black text-3xl font-normal self-center">
                  <li className="hover:text-red-200">
                      <Link to={'/programs'}>Programs</Link>
                  </li>
                  <li>
                      <Link to={'/reviews'}>Reviews</Link>
                  </li>
                  <li>
                      <Link to={'/features'}>Features</Link>
                  </li>
                  <li>
                      <Link to={'teaching'}> Teaching</Link>
                  </li>
              </ul>
              <button className="rounded-xl w-96 h-20 border-primary border-2 border-blue-800 text-4xl text-blue-500">Free Masterclasses</button>
          </div>
      </nav>
      <body>
        <div className="flex w-auto section1">
            <div className="paddingSection1 flex flex-col text-justify">
                <div className="colorTextWhite w-4/5 text-7xl">
                    <p>Grab your Dream tech offer today</p>
                </div>
                <div className="colorTextWhite w-9/12 text-3xl font-semibold">
                    <ul className="list-disc ">
                        <li>A highly structured, personalized and guided word-class program</li>
                        <li>Designed by industry expertst</li>
                        <li>That will make you the best software developer out there</li>
                        <li>For ambition learners, who don’t want to settle for anything less in their tech careers</li>
                    </ul> 
                </div>
                <button className=" border-primary rounded-lg border-2 border-blue-800 w-52 h-16 bg-white text-blue-500 text-1xl">Apply Now</button>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
        <div className="section3">
            <div className="text-5xl text-black">
                <p>100+ Successful Alumni working at top product-Based company</p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
        <div className="section4">
            <div className="flex flex-col ">
                <p className="h-24 text-7xl font-normal ">Our Programs</p>
                <p className="h-28 w-11/12 text-4xl font-normal">Ace Your Skills In Problem Solving In DSA, System Design And Developement</p>
            </div>
            <div>
                <div>
                    <p>For Collage Students</p>
                    <p>Who want to rocket-start their career and get placed in thier dream companies</p>
                </div>
                <div>
                    <p>For Working Professionals</p>
                    <p>Who wish to shift to top product based companies and ace thier tech careers</p>
                </div>
            </div>
        </div>
      </body>
    </>
  )
}
