import React from 'react'
import Navbar from '../common/Navbar'
import backup from '../../image/backup.png'
import Card from './Card'
import DashboardCard from '../api/DashboardCard'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt'

function Dashboard () {
  return (
    <div>
      <Navbar />
      <div id='dashboard-nav'>
        <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist'>
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
							Dashboard
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
							Manage Student
						</button>
          </li>
          <li class='nav-item' role='presentation'>
            <button
              class='nav-link'
              id='pills-Borrower-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-Borrower'
              type='button'
              role='tab'
              aria-controls='pills-Borrower'
              aria-selected='false'
						>
							Manage Borrower
						</button>
          </li>
          <li class='nav-item' role='presentation'>
            <button
              class='nav-link'
              id='pills-Book-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-Book'
              type='button'
              role='tab'
              aria-controls='pills-Book'
              aria-selected='false'
						>
							Manage Book
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
            <div className='content-wrapper'>
              <div className='top-heading'>
                <p className='text-center'>
                  <span>Welcome</span> , John Doe
								</p>
                <p className='text-center'>
									Here Is Your Library Data You May Want to Know
								</p>
              </div>
              <div className='dasboard-card'>
                <div className='row'>
                  <div className='col-10 m-auto'>
                    <div className='row'>
                      {
                        DashboardCard.map((value,index)=>{
                              return (
                                <>
                                <Card 
                                  key={index}
                                  count={value.count}
                                  text={value.text}
                                  icon={value.icon}
                                />
                                </>
                              )        
                        })
                      }
                  </div>
                  </div>
                </div>
              </div>

              <div className='bottom-dashboard'>
                <div className='row'>
                  <div className='d-flex align-items-center flex-column py-5'>
                    <div className='image'>
                    <img src={backup} alt='' />
                  </div>
                    <div className='mid'>
                    <h5 className='text-center py-2'>
												You can take backup of your data
											</h5>
                    <p className='text-center pt-2'>
												Last Backed Up : 10 jan 2021
											</p>
                  </div>
                    <div className='button'>
                    <button className='btn-primary'>
                    <SystemUpdateAltIcon /> Generate Backup
											</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class='tab-pane fade'
            id='pills-profile'
            role='tabpanel'
            aria-labelledby='pills-profile-tab'
					>
            <h1>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
							aliquid amet quas eos modi asperiores doloribus id cupiditate
							commodi inventore?
						</h1>
          </div>

          <div
            class='tab-pane fade'
            id='pills-Borrower-tab'
            role='tabpanel'
            aria-labelledby='pills-Borrower-tab'
					>
            <h1>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Exercitationem laudantium esse dolorem debitis repellendus
							blanditiis molestias obcaecati veritatis eaque eum.
						</h1>
          </div>

          <div
            class='tab-pane fade'
            id='pills-Book-tab'
            role='tabpanel'
            aria-labelledby='pills-Book-tab'
					>
            <h1>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
							ut ipsa in quaerat id quos eligendi dolores officia perferendis
							nostrum.
						</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
