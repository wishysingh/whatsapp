 

 import React from 'react';

const MessageBox = ({messages,message}) => {
    return(
        <div class="row message" id="conversation">

          <div class="row message-previous">
            <div class="col-sm-12 previous">
              Show Previous Message!
            </div>
          </div>
          {message &&  message.map((k) => {
            return (
              <div class="row message-body">
                <div class={`col-sm-12 ${k.who === 'me' ? 'message-main-receiver' : 'message-main-sender'}`}>
                  <div class={`${k.who === 'me' ? 'receiver' : 'sender'}`}>
                    <div class="message-text">
                    {k.text}
                    </div>
                    <span class="message-time pull-right">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            ) 
          })}

          {/* <div class="row message-body">
            <div class="col-sm-12 message-main-sender ">
              <div class="sender">
              {messages && messages.length > 0 && messages.map((k) => {
                return (<div className="message-text">
                  {k}
                </div>)
              })}
                
                <span class="message-time pull-right">
                  Sun
                </span>
              </div>
            </div>
          </div> */}
        </div>
    );
}

export default MessageBox;
