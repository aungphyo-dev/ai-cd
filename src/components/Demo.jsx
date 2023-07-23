
import axios from 'axios';
import {useState} from "react";


const Demo = () => {
    const [article,setArticle] = useState("");
    const [answer,setAnswer] = useState({});

    const handleSubmit = (e) => {
      e.preventDefault();
      getData(article)
    }
    const getData = async question =>{
        try {
            const [response] = await Promise.all([axios.request({
                method: 'POST',
                url: 'https://ai-content-detector-ai-gpt.p.rapidapi.com/api/detectText/',
                headers: {
                    'content-type': 'application/json',
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '43ae469ffamsha1b3470098ee84bp1f4f62jsnf14d9cd965e5',
                    'X-RapidAPI-Host': 'ai-content-detector-ai-gpt.p.rapidapi.com'
                },
                data: {
                    text: question
                }
            })]);
            setAnswer(response.data);
            setArticle('')
        } catch (error) {
            console.error(error);
        }
    }
    console.log(answer)
  return (
      <>
          <section className="w-full">
              <div className='flex flex-col w-full max-w-2xl gap-2 mx-auto'>
                  <form onSubmit={(event)=>handleSubmit(event)} className='relative flex flex-col justify-center items-start z-50'>
                      <textarea rows={7} placeholder='Enter your paragraph' value={article} onChange={(e)=>setArticle(e.target.value)} required className='url_input peer'/>
                      <button type={'submit'} className='px-5 py-2 bg-blue-400 text-white rounded mt-3 text-center peer-focus:border-gray-700 peer-focus:text-gray-700'>
                          Extract Now
                      </button>
                  </form>
              </div>
          </section>
          <div className='container mx-auto p-10'>
              <div className='flex justify-evenly items-center flex-wrap mb-3 gap-3'>
                  <span
                      className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 text-center">Ai-words <br/> {answer?.aiWords}</span>
                  <span
                      className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center">IS Human? <br/> {answer?.isHuman}</span>
                  <span
                      className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 text-center">Fake Percentage <br/> {answer?.fakePercentage}</span>
                  <span
                      className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 text-center">Other Feedback <br/> {answer?.otherFeedback}</span>
                  <span
                      className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 text-center">Text Words <br/> {answer?.textWords}</span>
                  <span
                      className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 text-center">Status <br/> {answer?.status}</span>

              </div>
              {!(answer?.aiSentences === null) ?<div>
                  {answer?.aiSentences?.map(sentence=><p className='summary_box mb-3' key={sentence}>{sentence}</p>)} </div>
               : <div className={'w-full text-center'}>Ask your question !</div>}
          </div>
      </>
  );
};

export default Demo;
