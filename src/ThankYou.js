import gfx from './img/illustration-thank-you.svg'
function ThankYou ({rating}) {
    return(
        <div className="container thx">
            <div className="illustration">
                <img src={gfx} alt=""/>
            </div>

            <h3 className="selected">You selected {rating} out of 5</h3>

            <h2>Thank you!</h2>

            <p className="center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

        </div>
    )
}

export default ThankYou;