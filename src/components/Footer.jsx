import styles from '../style'
import {logo} from '../assets'
import {footerLinks,socialMedia} from '../constants'

const Footer = () => (
    <section className={`${styles.flexCenter}  flex-col `}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
        <div className= 'flex flex-1 flex-col justify-start mr-10'>
        <img src={logo} alt="logo" className='w-[256px] h-[72px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[312px] `}>A new way to make the payments easy, reliable and secure.</p>
        </div> 

        <div className='flex flex-[1.5] flex-row flex-wrap md:mt-0 mt-10 w-full'>
          {footerLinks.map((footerlink)=>(
           <div key={footerlink.title} className='flex flex-col ss:my-0 my-4 mt-10 mr-6'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerlink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerlink.links.map((link,index)=>(
                <li key={link.name} className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary'>
                  {link.name}
                </li>  
              ))}
            </ul>
           </div> 
          ))}
        </div>   
      </div>

      <div className='flex flex-1 justify-between items-center w-full md:flex-row flex-col border-t-[1px] border-t-[#3F3E45]'>
        <p className=' font-poppins font-normal text-[15px] leading-[27px] text-white mb-3 md:mb-0'>Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
        
        <div className='flex flex-row'>
          {socialMedia.map((social,index)=>(
            <div className='flex'>
              <img src={social.icon} 
               key={social.id}
               alt="social-media-icon" className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`} 
              onClick={()=>window.open(social.link)}
              />
            </div> 
          ))}          
        </div>
      </div>
    </section>
  )


export default Footer