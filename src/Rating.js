import star from './img/icon-star.svg';

function Rating ({setRating, setSubmit}) {

    const buttons = document.querySelectorAll(".rate__btn")

    function setRate(i){
        console.log(i.target.dataset.rating)
        setRating(i.target.dataset.rating)
        setActive(i)
    }


    function setActive(item){
        buttons.forEach(button =>{
            button.classList.remove("active")
        })
        item.target.classList.add("active")
    }


    function submit(){
        setSubmit(true)
    }

    return (
        <div className="container">
            <div className="starIcon">
                <img src={star} alt=""/>
            </div>
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="containerBtn">
                <button className="rate__btn" data-rating="1" onClick={setRate}>1</button>
                <button className="rate__btn" data-rating="2" onClick={setRate}>2</button>
                <button className="rate__btn" data-rating="3" onClick={setRate}>3</button>
                <button className="rate__btn" data-rating="4" onClick={setRate}>4</button>
                <button className="rate__btn" data-rating="5" onClick={setRate}>5</button>
            </div>
            <button className="submit" onClick={submit}>SUBMIT</button>
        </div>
    )
}

export default Rating;