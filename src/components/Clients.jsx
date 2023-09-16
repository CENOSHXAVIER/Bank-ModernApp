import {clients} from '../constants'
import styles from '../style'

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-1 flex-row w-full`}>
      {clients.map((client)=> (
        <div key={client.id} className={`${styles.flexCenter} flex-1 m-5 p-5`}>
          <img src={client.logo} alt="client" className='w-[192px]  object-contain' />
        </div>
      ))}
    </div>
    </section>
  )


export default Clients