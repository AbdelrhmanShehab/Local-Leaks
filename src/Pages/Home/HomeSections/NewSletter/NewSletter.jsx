// import React from 'react';
// import style from './NewSletter.module.css';

// const NewSletter = () => {
//     return (
//         <div className={style.newSletter}>
//             <h1 className={style.newSletterHeader}>Newsletter</h1>
//             <div className={style.newSletterContainer}>
//                 <p>By subscribing to our mailing list you will always be updated with the latest news from us</p>
//                 <div className={style.newSletterContainerMessage}>
//                     <input type="text" placeholder='Give us your mail !'/>
//                     <button>
//                         <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M39.1714 17.6715L2.02948 0.131786C1.43807 -0.143003 0.732368 0.0207013 0.32095 0.541046C0.119617 0.793084 0.00680358 1.10698 0.000587034 1.43243C-0.00562951 1.75788 0.0951108 2.07605 0.286665 2.33594L12.5007 18.9987L0.286665 35.6614C-0.107611 36.1963 -0.0933261 36.9388 0.318093 37.4563C0.595229 37.81 1.0095 38 1.42949 38C1.63235 38 1.8352 37.9562 2.02662 37.8655L39.1686 20.3258C39.6772 20.0861 40 19.5687 40 18.9987C40 18.4286 39.6772 17.9112 39.1714 17.6715Z" fill="#00FF2A"/>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewSletter;

import React from 'react';
import style from './NewSletter.module.css';

const NewSletter = () => {
    return (
        <section className={style.newSletter} aria-labelledby="newsletter-header">
            <h1 id="newsletter-header" className={style.newSletterHeader}>Newsletter</h1>
            <div className={style.newSletterContainer}>
                <p>
                    By subscribing to our mailing list you will always be updated with the latest news from us
                </p>
                <form className={style.newSletterContainerMessage}>
                    <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                    <input
                        type="email"
                        id="newsletter-email"
                        name="email"
                        placeholder="Give us your mail!"
                        required
                    />
                    <button type="submit" aria-label="Subscribe">
                        <svg
                            width="40"
                            height="38"
                            viewBox="0 0 40 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M39.1714 17.6715L2.02948 0.131786C1.43807 -0.143003 0.732368 0.0207013 0.32095 0.541046C0.119617 0.793084 0.00680358 1.10698 0.000587034 1.43243C-0.00562951 1.75788 0.0951108 2.07605 0.286665 2.33594L12.5007 18.9987L0.286665 35.6614C-0.107611 36.1963 -0.0933261 36.9388 0.318093 37.4563C0.595229 37.81 1.0095 38 1.42949 38C1.63235 38 1.8352 37.9562 2.02662 37.8655L39.1686 20.3258C39.6772 20.0861 40 19.5687 40 18.9987C40 18.4286 39.6772 17.9112 39.1714 17.6715Z"
                                fill="#00FF2A"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewSletter;
