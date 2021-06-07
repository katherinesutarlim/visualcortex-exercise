import React from 'react';
import Form from './Form';
import './style.css';

export default function App() {
  return (
    <div class="container">
      <div id="left-title" class="half-screen">
        <div class="text-container">
          <h1>Tax-o-tron</h1>
          <h5>The free and simple online tax calculator.</h5>
        </div>
      </div>
      <Form />
    </div>
  );
}
