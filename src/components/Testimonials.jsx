import {feedback} from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
    <section id='client' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className=' w-full flex flex-1 justify-between  flex-row'>
        <h2 className={`${styles.heading2} flex `}>
          What People are <br className='sm:block hidden'/> saying about us
        </h2>
        <div className='w-full flex flex1justify-center items-center '>
        <p className={`${styles.paragraph} text-left`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
        </div>
      </div>

      <div className='flex flex-wrap mt-5'>
        {feedback.map((card)=> <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  )


export default Testimonials