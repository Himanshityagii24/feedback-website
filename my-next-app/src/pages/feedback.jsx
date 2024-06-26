import React, { useState, useEffect } from 'react';
import styles from './feedback.module.css';
import axios from 'axios';

const Feedback = () => {
  const [ratings, setRatings] = useState({
    colleague1: 0,
    colleague2: 0,
    colleague3: 0,
    colleague4: 0,
  });

  const [highestRated, setHighestRated] = useState(null);

  useEffect(() => {
    
    const savedRatings = JSON.parse(localStorage.getItem('ratings'));
    if (savedRatings) {
      setRatings(savedRatings);
    }

    const savedHighestRated = localStorage.getItem('highestRatedColleague');
    if (savedHighestRated) {
      setHighestRated(savedHighestRated);
    }
  }, []);

  const handleRatingChange = (colleague, rating) => {
    const updatedRatings = {
      ...ratings,
      [colleague]: rating,
    };

    setRatings(updatedRatings);

    localStorage.setItem('ratings', JSON.stringify(updatedRatings));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ratingsData = Object.entries(ratings).map(([colleague, rating]) => ({
        colleague,
        rating,
      }));

      const response = await axios.post('http://localhost:5000/api/ratings', ratingsData);
      console.log('Server response:', response.data);

      const highestRatedColleague = Object.keys(ratings).reduce((a, b) => ratings[a] > ratings[b] ? a : b);
      setHighestRated(highestRatedColleague);

      localStorage.setItem('highestRatedColleague', highestRatedColleague);
    } catch (error) {
      console.error('Error submitting ratings:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.feedbackForm}>
        <h1>Rate Your Colleagues</h1>
        <form onSubmit={handleSubmit}>
          {/* Colleague 1 */}
          <div className={styles.colleagueCard}>
            <div className={styles.colleagueInfo}>
              <img src="/himanshi.jpg" alt="Colleague 1" className={styles.colleagueImage} />
              <h2>Colleague 1</h2>
            </div>
            <div className={styles.ratingStars}>
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleRatingChange('colleague1', index + 1)}
                  className={index < ratings.colleague1 ? styles.starFilled : styles.star}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Colleague 2 */}
          <div className={styles.colleagueCard}>
            <div className={styles.colleagueInfo}>
              <img src="/himanshi2.jpg" alt="Colleague 2" className={styles.colleagueImage} />
              <h2>Colleague 2</h2>
            </div>
            <div className={styles.ratingStars}>
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleRatingChange('colleague2', index + 1)}
                  className={index < ratings.colleague2 ? styles.starFilled : styles.star}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Colleague 3 */}
          <div className={styles.colleagueCard}>
            <div className={styles.colleagueInfo}>
              <img src="/himanshi3.jpg" alt="Colleague 3" className={styles.colleagueImage} />
              <h2>Colleague 3</h2>
            </div>
            <div className={styles.ratingStars}>
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleRatingChange('colleague3', index + 1)}
                  className={index < ratings.colleague3 ? styles.starFilled : styles.star}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Colleague 4 */}
          <div className={styles.colleagueCard}>
            <div className={styles.colleagueInfo}>
              <img src="/Like.jpg" alt="Colleague 4" className={styles.colleagueImage} />
              <h2>Colleague 4</h2>
            </div>
            <div className={styles.ratingStars}>
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleRatingChange('colleague4', index + 1)}
                  className={index < ratings.colleague4 ? styles.starFilled : styles.star}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.submitBu}>Submit Ratings</button>
        </form>
      </div>

      {highestRated && (
        <div className={styles.highestRated}>
          <h2>Highest Rated Colleague</h2>
          <div className={styles.highestRatedInfo}>
            <img src="/star.png" onError={(e) => e.target.src = '/images/default.jpg'} alt={highestRated} className={styles.colleagueImage} />
            <p>{highestRated.replace('colleague', 'Colleague ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
