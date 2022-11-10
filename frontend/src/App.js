import './App.css';
import React, { useEffect, useState } from 'react';
import LOGO from './assets/Logo.png'
import ADVERT from './assets/ADVERT.png'
import WaveSpline from './assets/svg/WaveSpline';
import { useFormik } from 'formik';
import { basicSchema } from './schemas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LGAARRAY } from './assets/constants/LGAARRAY';
import { submitFormAPI } from './api';

function App() {
  const [lgaData, setLgaData] = useState([])

  const notify = () => toast.success('Congratulations! Your details has been submitted', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    backgroundColor: "red"
  });

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await submitFormAPI(values)
    if (response.status === "success") {
      actions.resetForm()
      notify()
    } else {
      alert(response.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: "17",
      email: "",
      phoneNumber: "",
      state: "",
      lga: "",
      category: "",
      shopName: ""
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // console.log(formik.errors);



  return (
    <div className='background'>

      <div className="row" style={{ height: "170vh" }}>

        <div className="col-md-7">
          <ToastContainer />
          <WaveSpline />

          <div className='container-fluid' style={{ position: "absolute", top: 0 }}>

            <div className="logo">
              <img src={"https://res.cloudinary.com/dxj5r6fah/image/upload/v1668087977/assets/Logo_ua6fok.png"} alt="" />
            </div>

            <div className='main-content'>
              <div className='text-center'>
                <h1 className="b1">
                  Battle Of The Barbers
                </h1>
                <h1>Africa: <span className='b1-inside'>Nigeria Edition</span></h1>
                <h4>Registration Form</h4>
              </div>

              {/* form starts  */}
              <div>
                <form onSubmit={formik.handleSubmit}>

                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder='Input First Name'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    className={formik.errors.firstName && formik.touched.firstName ? "input-error" : ""}
                  />
                  {formik.errors.firstName && formik.touched.firstName ? <p className='error'>{formik.errors.firstName}</p> : ''}

                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder='Input Last Name'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    className={formik.errors.lastName && formik.touched.lastName ? "input-error" : ""}
                  />
                  {formik.errors.lastName && formik.touched.lastName ? <p className='error'>{formik.errors.lastName}</p> : ''}

                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Input Email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className={formik.errors.email && formik.touched.email ? "input-error" : ""}
                  />
                  {formik.errors.email && formik.touched.email ? <p className='error'>{formik.errors.email}</p> : ''}


                  <div className='row'>
                    <div className='col-sm-4'>
                      <label htmlFor="age">Age</label>
                      <select name="age" id="age" onChange={formik.handleChange} placeholder='Select age' className={formik.errors.age && formik.touched.age ? "input-error" : ""}>
                        <option value="17">17</option>
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                          1, 1, 1, 1, 1, 1, 1, 1].map((elem, i) => (
                            <option key={i} value={`${18 + i}`}>{18 + i}</option>
                          ))}
                      </select>
                      {formik.errors.age && formik.touched.age ? <p className='error'>{formik.errors.age}</p> : ''}
                    </div>

                    <div className='col-sm-8'>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        onBlur={formik.handleBlur}
                        className={formik.errors.phoneNumber && formik.touched.phoneNumber ? "input-error" : ""}
                      />
                      {formik.errors.phoneNumber && formik.touched.phoneNumber ? <p className='error'>{formik.errors.phoneNumber}</p> : ''}
                    </div>
                  </div>


                  <label htmlFor="state">State</label>
                  <select name="state" id="state" onChange={formik.handleChange} placeholder='Select L.G.A' className={formik.errors.state && formik.touched.state ? "input-error" : ""}>
                    <option value="">Select State</option>
                    {LGAARRAY?.map((elem, i) => (
                      <option key={i} value={`${elem}`}>{elem}</option>
                    ))}
                  </select>
                  {formik.errors.state && formik.touched.state ? <p className='error'>{formik.errors.state}</p> : ''}


                  <label htmlFor="lga">Local Government Area (L.G.A)</label>
                  <select name="lga" id="lga" onChange={formik.handleChange} placeholder='Select L.G.A' className={formik.errors.lga && formik.touched.lga ? "input-error" : ""}>
                    <option value="">Select L.G.A</option>
                    {LGAARRAY?.map((elem, i) => (
                      <option key={i} value={`${elem}`}>{elem}</option>
                    ))}
                  </select>
                  {formik.errors.lga && formik.touched.lga ? <p className='error'>{formik.errors.lga}</p> : ''}


                  <label htmlFor="category">Category</label>
                  <select name="category" id="category" onChange={formik.handleChange} placeholder='Select category' className={formik.errors.category && formik.touched.category ? "input-error" : ""}>
                    <option value="">Select category</option>
                    <option value="Barber">Barber</option>
                    <option value="Hairdresser">Hairdresser</option>
                    <option value="Make up Artist">Make up Artist</option>
                    <option value="Nail professional">Nail professional</option>
                  </select>
                  {formik.errors.category && formik.touched.category ? <p className='error'>{formik.errors.category}</p> : ''}


                  <label htmlFor="shopName">Name of Shop</label>
                  <input
                    id="shopName"
                    name="shopName"
                    type="text"
                    placeholder='Input Shop Name'
                    onChange={formik.handleChange}
                    value={formik.values.shopName}
                    onBlur={formik.handleBlur}
                    className={formik.errors.shopName && formik.touched.shopName ? "input-error" : ""}
                  />
                  {formik.errors.shopName && formik.touched.shopName ? <p className='error'>{formik.errors.shopName}</p> : ''}

                  {/* <input type="checkbox" name="" id="" /> */}

                  <button disabled={formik.isSubmitting} className={formik.isSubmitting ? "is-submittingForm" : ''} type="submit">Submit</button>

                </form>

                <a href="https://drive.google.com/file/d/1QoEMOEmfc9Ob7Z400Nf_Q0npidWb6zSp/view?usp=sharing" className='advert-link'>
                  BOTBA: Nigeria Edition
                </a>

              </div>
              {/* for ends  */}


            </div>


          </div>
        </div>

        <div className="col-md-5 part2" style={{ backgroundColor: "#00003E", }}>
          <img src={"https://res.cloudinary.com/dxj5r6fah/image/upload/v1668087998/assets/ADVERT_iw7mxg.png"} alt="" className='image' />
        </div>

      </div>

    </div >
  );
}

export default App;
