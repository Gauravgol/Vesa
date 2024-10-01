import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const CardCarousel = () => {

    interface JQuery {
        carousel(options?: any): JQuery;
      } 
  useEffect(() => {
    // Initialize carousel
    // $('#recipeCarousel').carousel({
    //   interval: 10000
    // });

    // Clone additional carousel items to display 3 items per slide
    $('.carousel .carousel-item').each(function () {
      let minPerSlide = 3;
      let next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (let i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    });
  }, []);

  return (
    <div className="container text-center my-3">
      <h2 className="font-weight-light">Bootstrap 4 - Multi Item Carousel</h2>
      <div className="row mx-auto my-auto">
        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
          <div className="carousel-inner w-100" role="listbox">
            <div className="carousel-item active">
              <div className="col-md-4">
                <div className="card card-body">
                  <img className="img-fluid" src="http://placehold.it/380?text=1" alt="slide 1" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4">
                <div className="card card-body">
                  <img className="img-fluid" src="http://placehold.it/380?text=2" alt="slide 2" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4">
                <div className="card card-body">
                  <img className="img-fluid" src="http://placehold.it/380?text=3" alt="slide 3" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4">
                <div className="card card-body">
                  <img className="img-fluid" src="http://placehold.it/380?text=4" alt="slide 4" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4">
                <div className="card card-body">
                  <img className="img-fluid" src="http://placehold.it/380?text=5" alt="slide 5" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4">
                <div className="card card-body">
                  <img className="img-fluid" src="http://placehold.it/380?text=6" alt="slide 6" />
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <h5 className="mt-2">Advances one slide at a time</h5>
    </div>
  );
};

export default CardCarousel;
