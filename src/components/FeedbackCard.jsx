import {quotes} from '../assets'

const FeedbackCard = ({name,title,img,content}) => (
    <div className='flex flex-col rounded-[20px] justify-between max-w-[370px] mr-10 feedback-card p-3 mb-3'>

      <img src={quotes} className='w-[42.6px] h-[27.6px] object-contain' />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>
      
      <div className='flex flex-row justify-start items-center'>
        <img src={img} alt={name} />
        <div className='flex flex-col ml-5'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
            {name}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
            {title}
          </p>
        </div>
      </div>

    </div>
  )


export default FeedbackCard