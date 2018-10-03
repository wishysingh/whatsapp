import React from 'react';

const contact = ({phone,name,last_message,last_message_time, ContactClick}) => {
    return(
    <div class="row sideBar-body" onClick={() => ContactClick(name,phone)}>
    <div class="col-sm-3 col-xs-3 sideBar-avatar">
      <div class="avatar-icon">
      <img alt='C' src={`https://robohash.org/${name}?10x10`} />
      </div>
    </div>
    <div class="col-sm-9 col-xs-9 sideBar-main">
      <div class="row" >
        <div class="col-sm-8 col-xs-8 sideBar-name">
          <span class="name-meta">{name}
        </span>
        </div>
        <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
          <span class="time-meta pull-right">{last_message_time}
        </span>
        </div>
      </div>
    </div>
  </div>);

}
export default contact;