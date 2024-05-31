import React from 'react';
import css from './css.module.css'; 
import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
export default function Home (){
    return(
        <>
     <div className={css.body}>
         <style jsx global>{`
            body {
              margin: 0;
              background:#F2F3F2;
            }
      `}</style>
<Head>
        <title>Tələbə360°</title>
        <link rel="icon" href="/home/360minilogo.svg" />
      </Head>

 
        <div className={css.main}>
         <div className={css.top_div}> 
            <h3>Settings</h3>
             <Link href='/home'><img src='/X.svg'/></Link>
         </div>
           <div className={css.mainul}>
      <ul className={css.proful}>
      <div className={css.profdiv}>
            <Image src={'pp.svg'}
        width={0}
        height={0}
        className={css.profmob}
      />
         <div className={css.divtext}> 
            <h2>Həsənov Niyaz</h2>
            <p>Azerbaijan Technical University</p>
         </div> <Image src={'qr.svg'}
        width={0}
        height={0}
        className={css.qr}
      />
            </div>
           
       <li className={css.profli}>
        <Image src={'360idmob.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>My 360ID</p>
      <Link href='/settings/my360id'> 
      <FaChevronRight className={css.chevron}/></Link>
        </li>
        <li className={css.profli}>
        <Image src={'security.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>Security</p>
      <Link href='/settings/security'><FaChevronRight className={css.chevron}/></Link>
        </li>
        <li className={css.profli}>
        <Image src={'membermob.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p style={{color:'#FFB800'}}>Membership</p>
     <Link href='/settings/membership'> <FaChevronRight style={{color:'#FFB800'}}className={css.chevron}/></Link>
        </li>
        <li className={css.profli}>
        <Image src={'profnoti.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>Notifications</p>
      <Link href='/settings/notification'>  <FaChevronRight className={css.chevron}/></Link>
        </li>
        <li className={css.profli}>
        <Image src={'profreferences.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>References</p>
      <Link href='/settings/references'> <FaChevronRight className={css.chevron}/></Link>
        </li>   
        <li className={css.profli}>
        <Image src={'proffeedback.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>Feedback</p>
      <Link href='/settings/feedback'> <FaChevronRight className={css.chevron}/></Link>
        </li>   
      </ul>
      <ul className={css.proful2}>
      <li className={css.profli}>
        <Image src={'profsupport.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p style={{color:'#0057FF'}}>Technical Support</p>
      <Link href='/technical_support'> <FaChevronRight style={{color:"#0057FF"}}className={css.chevron}/></Link>
        </li>  
        <li className={css.profli} >
        <Image src={'profrefere.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p style={{color:'#FF0000'}}>Refere a Friend</p>
      <Link href='/settings/refere'>  <FaChevronRight style={{color:"#FF0000"}}className={css.chevron}/></Link>
        </li>  
      </ul></div>
        </div>
     
     </div>
    
     

     </>
    )
}