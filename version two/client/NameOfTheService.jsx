import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';


const NameOfTheService = () => {
  const { useState, useEffect } = React;
  const [count, setCount] = useState(0);
  const element = <FontAwesomeIcon icon={faAngleDoubleRight} />
  const arrow = <FontAwesomeIcon icon={faAngleDoubleLeft} />


  // moveRight = ()=> {
  //   document.getElementById('container').scrollLeft += 20;
  // };
  function moveLeft() {

    console.log("left")
  };
  function moveRight() {

    console.log("right")
  };



  useState(() => {
    moveLeft();
    moveRight();
  })



  return (
    <div>

      {/* <h1 className="text-3xl text-gray-900 text-center mb-4">Related product list</h1>
      <div className="grid-container" data-slider-target="scrollContainer">
        {/* <i id="button-left" className="fas fa-angle-double-left" onClick={() => moveLeft()}>{arrow}</i> */}
        {/* <div className="grid-item">
          <div id="button-left" >{arrow}</div>
        </div>
        <div className="image">
          <div className="grid-item" data-slider-target="image" id="1">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
            <div className="details">
              <p>category</p>
              <h4><b>Tailored Jeans</b></h4>
              <p className="price">$19.99</p>
            </div>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="2">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="3">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="4">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="5">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="6">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="7">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="8">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="9">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="10">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="11">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="12">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div>
        <div className="grid-item" data-slider-target="image" id="13">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
          <div className="details">
            <p>category</p>
            <h4><b>Tailored Jeans</b></h4>
            <p className="price">$19.99</p>
          </div>
        </div> */}
        {/* <i id="button-right" className="fas fa-angle-double-right" onClick={() => moveRight(20)}>{element}</i> */}
        {/* <div id="button-right">{element}</div>
      </div> */} 
      <div class="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
      </div>
    </div>
  );
};

export default NameOfTheService;
