//import { useState, useEffect } from 'react'
//import axios from "axios";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const IndexPage = () => {

  return (
    <div>
    <section class="hero">
    <div class="footer">
      <div class="container is-full">
        <h2 class="subtitle is-2">Personal Checkup</h2>
      <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src="https://blog.ipleaders.in/wp-content/uploads/2020/11/Why-digital-health-is-beneficial-to-clinical-trials.jpg"></img>
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
      </div>
      </div>

      <div class="block"><br></br><h3 class="subtitle is-3">Reports:</h3></div>
      <div class="columns">
        <div class="column">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://cdn-icons-png.flaticon.com/512/2382/2382461.png" alt="Image"></img>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Child Daily Care Reports</strong>
                </p>
              </div>
              <p>
              Is a form that lets you update parents on their child's behavior, health  progress.
            </p>
            <br></br>

            </div>
          </article>

          <div align="center">
          <Link to="/child-care" className="button is-info is-outlined is-fullwidth">Open</Link>
          </div>
          </div>
        </div>


        <div class="column">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://cdn-icons-png.flaticon.com/512/610/610128.png" alt="Image"></img>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Elevation Chart</strong>
                </p>
              </div>
              <p>
              Is a form that lets you check head elevation angle and how long was this position manitained.
            </p>
            <br></br>

            </div>
          </article>
          <div align="center">
          <Link to="/elevation-chart" className="button is-info is-outlined is-fullwidth">Open</Link>
          </div>
          </div>
        </div>

      </div>

      <div class="columns">
      <div class="column">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://cdn-icons-png.flaticon.com/512/3389/3389235.png" alt="Image"></img>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Pressure Relief Positioning Chart</strong>
              </p>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <br></br>

          </div>
        </article>
        <div align="center">
        <Link to="/pressure-relief" className="button is-info is-outlined is-fullwidth">Open</Link>
        </div>
        </div>
      </div>

      <div class="column">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://cdn-icons-png.flaticon.com/512/2666/2666505.png" alt="Image"></img>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Paediatric Tracheostomy Safety Checklist</strong>
              </p>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <br></br>

          </div>
        </article>
        <div align="center">
        <Link to="/paediatric-checklist" className="button is-info is-outlined is-fullwidth">Open</Link>
        </div>
        </div>
      </div>
      </div>

      <div class="columns">
      <div class="column">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://cdn-icons-png.flaticon.com/512/2969/2969132.png" alt="Image"></img>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Body Map</strong>
              </p>
            </div>
            <p>
            A body map is a chart showing the front and back view of a body and identify different problems.
          </p>
          <br></br>

          </div>
        </article>
        <div align="center">
        <Link to="/body-map" className="button is-info is-outlined is-fullwidth">Open</Link>
        </div>
        </div>
      </div>


      <div class="column">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://cdn-icons-png.flaticon.com/512/8901/8901603.png" alt="Image"></img>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Dashboard</strong>
              </p>
            </div>
            <p>
            A visual display of all of your data. Provides summary information and key indicators.
          </p>
          <br></br>

          </div>
        </article>
        <div align="center">
        <Link to="/dashboard" className="button is-info is-outlined is-fullwidth">Open</Link>
        </div>
        </div>
      </div>


      </div>

    </div>
    </section>

    <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>©2023</strong> All Rights Reserved
      </p>
    </div>
  </footer>

  </div>

  );
}

export default IndexPage
