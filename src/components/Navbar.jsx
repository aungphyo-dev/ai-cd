import Logo from "../assets/favicon.ico";

const Navbar = () => {
  return(
      <header className='pt-5 flex justify-center items-center flex-col z-30 px-5 mb-10'>
          <nav className='container mx-auto flex justify-between items-center w-full '>
              <img src={Logo} alt="logo" className='w-9 object-contain'/>
              <button type={"button"} className='black_btn' onClick={()=>{window.open('https://github.com/aungpyaephyo1412/AI-Content-Detector')}}>Github</button>
          </nav>
          <h1 className='head_text'>
              AI Content Detector <br/>
              <span className='orange_gradient'>AI/GPT</span>
          </h1>
          <h2 className='desc'>
              Detects chatGPT Content, Simple Way & High Accuracy. OpenAI Detection API, AI Essay Detector For Teacher. Plagiarism Detector for AI Generated Text          </h2>
      </header>
  )
}
export default Navbar