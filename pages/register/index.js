import React from 'react';
import css from './register.module.css';
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', password: '' });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimi için burada yapılması gerekenler
    console.log(formData); // Örnek olarak formData'yı konsola yazdırma
  };

  return (
    <div className={css.body}>
      <style jsx global>{`
            body {
              background-image: url('/loginback.svg');

              
            }
      `}</style>
      <Head>
        <title>Qeydiyyat</title>
      </Head>
      <div className={css.logoDiv}>
        <Image
          src={'/before_login_media/telebe360logo.svg'}
          width={0}
          height={0}
          className={css.logoImg}
        />
      </div>



      <div className={css.loginForm}>
        <form onSubmit={handleSubmit} className={css.loginFormDiv}>
          <div style={{ display: 'flex', justifyContent: 'center' }}><h2 style={{ fontSize: '2vw' }}>Qeydiyyatdan keçin</h2></div>
          <div>

            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adınız"
              className={css.emailinput}
            />

          </div>
          <div>

            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Soyadınız"
              className={css.emailinput}
            />

          </div>
          <div >

            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Gün"
              className={css.dateinput}
            />

            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ay"
              className={css.dateinput}
            />

            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="İl"
              className={css.dateinput}
            />
          </div>
          <select id="genders" className={css.gender}>
            <option className={css.selectplaceholder} value="" disabled selected>Cinsiyyətiniz</option>
            <option value="man">Kişi</option>
            <option value="woman">Qadın</option>
          </select>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2vw' }}>
            <p className={css.hesabiniz}><i>Hesabınız var?</i></p>
            <Link href='/login'><button className={css.daxilol} type="submit">Daxil olun</button></Link></div>



        </form>

      </div>


    </div>
  );
}