import React from 'react';

export default function post() {
  return (
    <div class=" overflow-hidden relative ml-52 h-auto w-2/3 rounded-xl bg-slate-200">
		<div >
			<img src="assets/img/i5.jpg" alt="" class="h-full m-auto"/>
		</div>
		<div class=" h-16 w-full">
			<div class=" absolute bottom-1 left-3 h-9 w-9">
				<button><i class="fa fa-thumbs-o-up text-2xl" aria-hidden="true"></i></button>
			</div>
			
			<div class=" absolute bottom-1 left-14 h-9 w-9">
				<button><i class="fa fa-comment-o text-2xl" aria-hidden="true"></i></button>
			</div>
			<div class=" absolute bottom-1 right-3 h-9 w-9">
				<button><i class="fa fa-paper-plane-o text-2xl" aria-hidden="true"></i></button>
			</div>
		</div>
			
    </div>
  )
}
