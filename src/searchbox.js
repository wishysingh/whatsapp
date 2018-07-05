import React from 'react';

const searchbox = ({searchChange}) => {
    return(
        <div class="row searchBox">
            <div class="col-sm-12 searchBox-inner">
              <div class="form-group has-feedback">
                <input id="searchText" type="text" class="form-control" name="searchText" placeholder="Search" onChange={searchChange} />
                <span class="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </div>
          </div>
    );
}

export default searchbox;