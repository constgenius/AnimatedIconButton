import IconButton from "./components/IconButton"
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

function App() {

  return (
    <>
      <div className="flex items-center justify-center h-screen gap-4">
        <IconButton text="Github">
          <FaGithub size={30} />
        </IconButton>
        <IconButton text="Meta" color="bg-blue-500">
          <FaMeta size={30} />
        </IconButton>
        <IconButton
          text="/constgenius"
          color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
        >
          <GrInstagram size={30} />
        </IconButton>
        <IconButton text="Twitter" color="bg-black">
          <FaXTwitter size={30} />
        </IconButton>
        <IconButton text="@constGenius" color="bg-red-500">
          <IoLogoYoutube size={30} />
        </IconButton>
      </div>
    </>
  )
}

export default App
