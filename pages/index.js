import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Layout.module.css'
import indexStyles from '../styles/Index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h2 className={indexStyles.tits}>The 10 step guide to achieving perfect and flawless skin</h2>
      <h4 className={indexStyles.subtits}>By Alex Hussain</h4>
      <div className={indexStyles.img}>
        <img className={indexStyles.img2} src="https://cdn.discordapp.com/attachments/894109258235396118/1053911161076191303/I1.jpg"></img>
      </div>
      <h5 className={indexStyles.published}>Published: 25th October 2019 23:02:00</h5>
      <br></br>
      <p>Have you ever looked at yourself in the mirror and not liked the look of your skin? Been rejected by a girl lately because you thought your looks weren’t great? Well fear not, because I have some excellent tips to get you looking good again!</p>
      <br></br>
      <ol>
        <li>
          <p>
          Buy high quality cleanser. I cannot stress this enough, cleansing is the most important part of your skincare routine. It removes the dirt and the oil from your skin, and soothes it from everyday wear and tear
          </p>
        </li>
        <li>
          <p>
          Do not ever touch your face. Never. Yes, this includes when washing and cleaning. 
          </p>
        </li>
        <li>
          <p>
          Well, you may ask.”well if i am never supposed to touch my face, then how do I clean it properly?” TLDR, the answer is you just splash your face with a bit of water, and it should get rid of some of that cleanser. 
          </p>
        </li>
        <li>
          <p>
          Speaking of washing your face, never get rid of all your cleanser from your skin after washing. It is important to have some on you at all times, as it increases the silkiness and softness of your skin, while consistently removing oils and dirt, letting you keep that fresh look all the time
          </p>
        </li>
        <li>
          <p>
          Exfoliate every single day. Gets rid of oils and dark spots. Good for your skin 
          </p>
        </li>
        <li>
          <p>
          Showering??? Not that important. If you don’t have time, prioritize cleansing your face more than your body. People will notice your face a lot more, so even if you smell like curry sometimes, having a good looking, smooth face will more than compensate for it 
          </p>
        </li>
        <li>
          <p>
          Skin bleach. Critical if you have very dark skin, as it can help make your skin feel lighter and hence, look smoother and cleaner. However, there is a silver lining, make sure to apply it evenly, otherwise your face will have different shades, and nothing looks more horrendous than one part of your face being black and another white
          </p>
        </li>
        <li>
          <p>
          Don’t use moisturizer. It is a waste of money, and if you have been following the above guidelines, the products your using should already leave your skin feeling very moisturized already
          </p>
        </li>
        <li>
          <p>
          In the summer, sunscreen is not necessary. If you are using skin bleach like I told you to, you’ll always have pretty light skin to cover up, no matter how tan you get from sun exposure. Skin bleach is the ultimate SPF booster
          </p>
        </li>
        <li>
          <p>
          Repeat the above nine steps. Consistently and over time, you’ll notice you have better skin. You can’t expect results only from trying something once or twice, so do it everyday for a few weeks or months.
          </p>
        </li>
      </ol>
      <br></br>
      <p>That’s it. I hope you realize how I managed to get good looking skin. The next girl I go for will definitely appreciate it, and wish me luck!!</p>
      <br></br>
      <p>Ps. We are doing a bike sale this Friday, at our flagship bobby2988 warehouse at 8428 7th street sw. We have both new and used bikes on sale from 50-80% off, and all proceeds go to the Jamal Hussain rejection recovery fund, a not for profit 24/7 help-line for people dealing with relationship issues or rejection. </p>
    </div>
  )
}

/* FETCHING DATA: can do multiple ways:
- getStaticProps() fetches data only upon loading page
- getServerSideProps() fetches data on every request
- getStaticPaths() dynamically generate paths based on data that is being fetched
- All functions must be async, as they use async await
*/
