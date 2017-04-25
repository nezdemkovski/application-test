import React, { Component } from 'react';
import { Grid, Navbar, Row, Col } from 'react-bootstrap';
import './components/common/assets/styles/front.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar id='top'>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Inloop Test Application</span>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          {this.props.children}

          <footer>
            <Row className='show-grid'>
              <Col lg={12}>
                <ul className='list-unstyled'>
                  <li className='pull-right'><a href='#top'>Back to top</a></li>
                </ul>
                <p>Made by <a href='http://yakovlevyuri.com' rel='nofollow' target='_blank'>Yuri Yakovlev</a>. Contact me at <a href='mailto:contact@yakovlevyuri.com'>contact@yakovlevyuri.com</a>.</p>
                <p>Code released under the <a href='https://github.com/yakovlevyuri/inloop-application-test/LICENSE'>MIT License</a>.</p>
              </Col>
            </Row>
          </footer>
        </Grid>
      </div>
    );
  }
}

