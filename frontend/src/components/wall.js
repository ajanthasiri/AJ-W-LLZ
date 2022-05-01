import React from 'react';
import Post from './post';

export default function wall() {
  return (
    <div class=" w-2/3 overflow-auto scrollbar" style={{height:"100vh"}}>
        <br/><br/>
        <Post/><br/><br/>
        <Post/><br/><br/>
        <Post/><br/><br/>
        <Post/><br/><br/>
        <Post/><br/><br/>
        <Post/><br/><br/>
        <Post/><br/><br/>
        <Post/><br/><br/>
    </div>
  )
}
