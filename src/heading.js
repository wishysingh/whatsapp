import React from 'react';


const Heading = ({name}) => {
  console.log(name,'sjdksajf')
    return(
        <div class="row heading">
          <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
            <div class="heading-avatar-icon">

            {
              name ?
              <img alt="W" src={`https://robohash.org/${name}?10x10`} />
              :
                <img alt="W" src={`http://shurl.esy.es/y`} />  
            }
            </div>
          </div>
          <div class="col-sm-8 col-xs-7 heading-name">
            <a class="heading-name-meta">{name}
            </a>
            <span class="heading-online">Online</span>
          </div>
          <div class="col-sm-1 col-xs-1  heading-dot pull-right">
            <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
          </div>
        </div>
    );
}

export default Heading;