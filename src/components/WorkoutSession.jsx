import React from 'react'

const WorkoutSession = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train..</p>

        <img src='/img5.jpg' alt='ohoo it did not load'/>

      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Join our intensive bootcamps designed to transform your fitness journey. Our expert trainers guide you through high-energy sessions that combine strength training, cardio, and functional movements to help you achieve your goals faster.</p>
        <div className="bootcamps">
          <div>
            <h4>Elite Strength Bootcamp</h4>
            <p>Build muscle and power with our 8-week program featuring compound lifts, progressive overload, and personalized coaching to maximize your strength gains.</p>
          </div>
          <div>
            <h4>HIIT Cardio Blast</h4>
            <p>Burn fat and boost metabolism with high-intensity interval training. Perfect for busy schedules, this 45-minute session delivers maximum results in minimum time.</p>
          </div>
          <div>
            <h4>Functional Fitness Challenge</h4>
            <p>Improve everyday movement patterns with bodyweight exercises, mobility work, and functional training that translates to real-life strength and agility.</p>
          </div>
          <div>
            <h4>Warrior Conditioning Camp</h4>
            <p>Push your limits with military-style training including obstacle courses, team challenges, and mental toughness exercises to build resilience and endurance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSession;
