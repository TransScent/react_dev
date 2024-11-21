import React from 'react'

const info = () => {
  return (
  <div className="about__info grid">
    <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">A comprehensive solution to alleviate margin pressures</span>
    </div>

    <div className="about__box">
    <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">An integrated solution that unlocks significant value</span>
    </div>

    <div className="about__box">
    <i class='bx bx-support about__icon '></i>
        <h3 className="about__title">Support </h3>
        <span className="about__subtitle">A non-disruptive solution that empowers clinicians</span>
    </div>
  </div>
  )
}

export default info