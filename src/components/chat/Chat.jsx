import './Chat.scss';

function Chat() {
  return (
    <div className='chat'>
      <div className='messages'>
        <h1>Messages</h1>
      </div>
      <div className='chat-box'>
        <div className='top'>
          <div className='user'>
            <img
              src='https://images.pexels.com/photos/5467586/pexels-photo-5467586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpeg'
              alt=''
            />
            James Wilson
          </div>
        </div>
        <div className='center'>
          <div className='chat-message'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message own'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message own'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message own'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message own'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
          <div className='chat-message own'>
            <p>Lorem ipsum dolor sit amet</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className='bottom'>
          <textarea placeholder='...' />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
