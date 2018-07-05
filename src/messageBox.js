import React from 'react';

const MessageBox = ({message}) => {
    return(
        <div class="row message" id="conversation">

          <div class="row message-previous">
            <div class="col-sm-12 previous">
              Show Previous Message!
            </div>
          </div>

          <div class="row message-body">
            <div class="col-sm-12 message-main-receiver">
              <div class="receiver">
                <div class="message-text">
                 Hyy, Its Awesome..!
                </div>
                <span class="message-time pull-right">
                  Sun
                </span>
              </div>
            </div>
          </div>

          <div class="row message-body">
            <div class="col-sm-12 message-main-sender">
              <div class="sender">
              {message && message.length > 0 && message.map((k) => {
                return (<div className="message-text">
                  {k}
                </div>)
              })}
                
                <span class="message-time pull-right">
                  Sun
                </span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default MessageBox;
