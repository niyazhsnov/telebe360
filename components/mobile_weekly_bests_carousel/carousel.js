import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel';
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
import css from './carousel.module.css'
import Link from 'next/link'
import Image from 'next/image';
export default function Slider(){
    
    return(

<Carousel 
         renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} style={{position:'absolute',top:'18vw',left:'5vw',zIndex:'1',background:'#ffffff2a',border:'none',borderRadius:'50vw' ,width:'8vw',display:'flex',justifyContent:'center',alignItems:'center',height:'8vw',color:'white',fontSize:'5vw',}}>
                    <FaChevronLeft/>
                </button>
            )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <button type="button" onClick={onClickHandler} title={label} style={{position:'absolute',top:'18vw',right:'5vw',zIndex:'1',background:'#ffffff2a',border:'none',borderRadius:'50vw' ,width:'8vw',display:'flex',justifyContent:'center',alignItems:'center',height:'8vw',color:'white',fontSize:'5vw'}}>
                <FaChevronRight/>
                </button>
            )
        }
useKeyboardArrows={true}
swipeable={true}

showStatus={false}
showThumbs={false}
autoPlay={false}
infiniteLoop={false}

showArrows={false}
emulateTouch={true}
swipeScrollTolerance={100}
thumbWidth={100}
interval={5000}
transitionTime={1500}
showIndicators={false}
centerMode={true}
centerSlidePercentage={57}
selectedItem={0}
stopOnHover={false}
dynamicHeight={false}
className={css.carousel}


>
<div className={css.mobcardiv}>
  <Link style={{color:'black'}}href='/kfc'>
   <div className={css.card_div}>
     <div className={css.card_pp}> 
     <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'/>
     </div>
     <Image
         src={'/home/bookmark.svg'}
         width={0}
         height={0}
         className={css.bookmark}
      />
      <div className={css.card_bottom}>
        <div className={css.card_text_div}>
        <h2>KFC</h2>
        <p>Deniz Mall • Baku, Azerbaijan</p>
           </div>
           <div className={css.card_button_div}>
            <div>
                <button id={css.but1}>Online</button>
                <button id={css.but2}>3 days</button>
            </div>
            <div><button id={css.but3}>35%</button></div>
           </div>
      </div>
   </div>
   </Link>
 </div>
 <div className={css.mobcardiv}>
  <Link style={{color:'black'}}href='/kfc'>
   <div className={css.card_div}>
     <div className={css.card_pp}> 
     <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'/>
     </div>
     <Image
         src={'/home/bookmark.svg'}
         width={0}
         height={0}
         className={css.bookmark}
      />
      <div className={css.card_bottom}>
        <div className={css.card_text_div}>
        <h2>KFC</h2>
        <p>Deniz Mall • Baku, Azerbaijan</p>
           </div>
           <div className={css.card_button_div}>
            <div>
                <button id={css.but1}>Online</button>
                <button id={css.but2}>3 days</button>
            </div>
            <div><button id={css.but3}>35%</button></div>
           </div>
      </div>
   </div>
   </Link>
 </div>
 <div className={css.mobcardiv}>
  <Link style={{color:'black'}}href='/kfc'>
   <div className={css.card_div}>
     <div className={css.card_pp}> 
     <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'/>
     </div>
     <Image
         src={'/home/bookmark.svg'}
         width={0}
         height={0}
         className={css.bookmark}
      />
      <div className={css.card_bottom}>
        <div className={css.card_text_div}>
        <h2>KFC</h2>
        <p>Deniz Mall • Baku, Azerbaijan</p>
           </div>
           <div className={css.card_button_div}>
            <div>
                <button id={css.but1}>Online</button>
                <button id={css.but2}>3 days</button>
            </div>
            <div><button id={css.but3}>35%</button></div>
           </div>
      </div>
   </div>
   </Link>
 </div>
 <div className={css.mobcardiv}>
   <div className={css.card_div}>
     <div className={css.card_pp}> 
     <img src='https://logowik.com/content/uploads/images/349_lcwaikiki1.jpg'/>
     </div>
     <Image
         src={'/home/bookmark.svg'}
         width={0}
         height={0}
         className={css.bookmark}
      />
      <div className={css.card_bottom}>
        <div className={css.card_text_div}>
        <h2>Lc Waikiki</h2>
        <p>Park Boulevard • Baku, Azerbaijan</p>
           </div>
           <div className={css.card_button_div}>
            <div>
                <button id={css.but1}>Online</button>
                <button id={css.but2}>3 days</button>
            </div>
            <div><button id={css.but3}>35%</button></div>
           </div>
      </div>
   </div>
 </div>

 <div className={css.mobcardiv}>
   <div className={css.card_div}>
     <div className={css.card_pp}> 
     <img src='https://logowik.com/content/uploads/images/349_lcwaikiki1.jpg'/>
     </div>
     <Image
         src={'/home/bookmark.svg'}
         width={0}
         height={0}
         className={css.bookmark}
      />
      <div className={css.card_bottom}>
        <div className={css.card_text_div}>
        <h2>Lc Waikiki</h2>
        <p>Deniz Mall • Baku, Azerbaijan</p>
           </div>
           <div className={css.card_button_div}>
            <div>
                <button id={css.but1}>Online</button>
                <button id={css.but2}>3 days</button>
            </div>
            <div><button id={css.but3}>35%</button></div>
           </div>
      </div>
   </div>
 </div>

 
 <div className={css.mobcardiv}>
   <div className={css.card_div}>
     <div className={css.card_pp}> 
     <img src='https://logowik.com/content/uploads/images/349_lcwaikiki1.jpg'/>
     </div>
     <Image
         src={'/home/bookmark.svg'}
         width={0}
         height={0}
         className={css.bookmark}
      />
      <div className={css.card_bottom}>
        <div className={css.card_text_div}>
        <h2>Lc Waikiki</h2>
        <p>Park Boulevard • Baku, Azerbaijan</p>
           </div>
           <div className={css.card_button_div}>
            <div>
                <button id={css.but1}>Online</button>
                <button id={css.but2}>3 days</button>
            </div>
            <div><button id={css.but3}>35%</button></div>
           </div>
      </div>
   </div>
 </div>

 

 
    </Carousel>
    
    )}