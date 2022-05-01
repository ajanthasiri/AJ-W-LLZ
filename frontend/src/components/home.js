import React from 'react';
import Navbar from './navbar';
import Wall from './wall';

export default function home() {
  return (
    <div class="flex flex-row" >
        <Navbar/>
        <Wall/>
    </div>
  )
}
