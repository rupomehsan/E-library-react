import React from 'react'
import logo from '../../image/logo.png'
function Login () {
  return (
    <div>
      <div className='d-flex align-items-center' id='login'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-8 ms-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-5 d-flex align-items-center flex-column'>
                  <div className='heading'>
                    <img src={logo} alt='' />
                    <p>Smart Library Management System</p>
                  </div>
                  <div className='login'>
                    <ul
                    class='nav nav-pills mb-3'
                    id='pills-tab'
                    role='tablist'
										>
                    <li class='nav-item' role='presentation'>
                    <button
                    class='nav-link active'
                    id='pills-home-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-home'
                    type='button'
                    role='tab'
                    aria-controls='pills-home'
                    aria-selected='true'
												>
													Student Login
												</button>
                  </li>

                    <li class='nav-item' role='presentation'>
                    <button
                    class='nav-link'
                    id='pills-profile-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#pills-profile'
                    type='button'
                    role='tab'
                    aria-controls='pills-profile'
                    aria-selected='false'
												>
													Librarian Login
												</button>
                  </li>
                  </ul>

                    <div class='tab-content' id='pills-tabContent'>
                    <div
                    class='tab-pane fade show active'
                    id='pills-home'
                    role='tabpanel'
                    aria-labelledby='pills-home-tab'
											>
                    <div class='mb-3'>
                    <label
                    for='exampleFormControlInput1'
                    class='form-label'
													>
														User Name :
													</label>
                    <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Enter Your User Name'
													/>
                  </div>
                    <div class='mb-3'>
                    <label
                    for='exampleFormControlInput1'
                    class='form-label'
													>
														Password :
													</label>
                    <input
                    type='password'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Enter Your Password'
													/>
                    <button type='submit' class='btn btn-success my-3'>
														Login
													</button>
                  </div>
                  </div>

                    <div
                    class='tab-pane fade'
                    id='pills-profile'
                    role='tabpanel'
                    aria-labelledby='pills-profile-tab'
											>
                    <div class='mb-3'>
                    <label
                    for='exampleFormControlInput1'
                    class='form-label'
													>
														User Name :
													</label>
                    <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Enter Your User Name'
													/>
                  </div>
                    <div class='mb-3'>
                    <label
                    for='exampleFormControlInput1'
                    class='form-label'
													>
														Password :
													</label>
                    <input
                    type='password'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Enter Your Password'
													/>
                    <button type='submit' class='btn btn-success my-3'>
														Login
													</button>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div className='footer'>
                    <p className='text-center mt-3 text-white'>
											@ Project X Ltd
										</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
