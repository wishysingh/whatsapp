import React from 'react';

const Navigbar = () =>{
  return (<div class="row heading">
  <div class="col-sm-3 col-xs-3 heading-avatar">
    <div class="heading-avatar-icon">
      <img alt='c' src={`http://shurl.esy.es/y`} />
    </div>
  </div>
  <div class="col-sm-1 col-xs-1  heading-dot  pull-right">
    <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
  </div>
  <div class="col-sm-2 col-xs-2 heading-compose  pull-right">
    <i class="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
  </div>
</div>);
  
}


export default Navigbar;