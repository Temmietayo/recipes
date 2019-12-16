import React, { Component } from 'react';
import './styles.css';

export default class Modal extends Component {
  render() {
    
  return (
    <div class="wrap">
      <a href="#openModal02" class="pop-btn">
        Click! Open Modal02
      </a>{' '}
      <br />
      <div id="openModal02" class="modalDialog">
        <div class="popWrap">
          <h2 class="popTit">
            Modal Box02{' '}
            <a href="#close" title="Close">
              <i class="material-icons">cancel</i>
            </a>
          </h2>
          <div class="popCont">
            <p class="pale">
              This is a sample modal box that can be created using the powers of
              CSS3.
            </p>
          </div>
          <div class="popBtn type02">
            <span class="btnBx"></span>
            <span class="btnBx">
              <span class="btn">
                <a href="#submit" title="Submit" class="cmnBtn on">
                  submit
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
      <a
        class="btn tooltipped"
        data-position="bottom"
        data-tooltip="I am a tooltip"
      >
        Hover me!
      </a>
    </div>
  );
}
}
