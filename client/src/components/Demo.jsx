import { useEffect} from 'react';
import "../assets/styles/style.css";
import msglogo from "../assets/images/chatbox-icon.svg"

const Demo = () => {
  useEffect(() => {
    const chat = new Chat();
    chat.display();

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return (
    <>
    
        <div className="flex items-center justify-center" style={{height: "70vh"}}>
            <h2 className='text-center font-bold text-3xl'>Click on the icon in the bottom right corner.</h2>
        </div>
    <div className="container fixed bottom-0">
      <div className="chatbox">
        <div className="chatbox__support">
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
            </div>
          </div>
          <div className="chatbox__messages">
            <div></div>
          </div>
          <div className="chatbox__footer">
            <input type="text" placeholder="Write a message..." />
            <button className="chatbox__send--footer send__button">Send</button>
          </div>
        </div>
        <div className="chatbox__button">
          <button><img src={msglogo} alt="chatbox icon" /></button>
        </div>
      </div>
    </div>
    </>
  );
};

class Chat {
  constructor() {
    this.args = {
      openButton: null,
      chatBox: null,
      sendButton: null
    };

    this.state = false;
    this.messages = [];
  }

  display() {
    this.args.openButton = document.querySelector('.chatbox__button');
    this.args.chatBox = document.querySelector('.chatbox__support');
    this.args.sendButton = document.querySelector('.send__button');

    this.args.openButton.addEventListener('click', () => {
      this.toggleState(this.args.chatBox);
    });

    this.args.sendButton.addEventListener('click', () => {
      this.onSendButton(this.args.chatBox);
    });

    const node = this.args.chatBox.querySelector('input');
    node.addEventListener('keyup', ({ key }) => {
      if (key === 'Enter') {
        this.onSendButton(this.args.chatBox);
      }
    });
  }

  toggleState(chatBox) {
    this.state = !this.state;
    if (this.state) {
      chatBox.classList.add('chatbox--active');
    } else {
      chatBox.classList.remove('chatbox--active');
    }
  }

  onSendButton(chatBox) {
    const textField = chatBox.querySelector('input');
    let text1 = textField.value;

    if (text1 === '') {
      return;
    }

    let msg1 = { name: 'User', message: text1 };
    this.messages.push(msg1);

    // fetch
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: text1 }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((r) => r.json())
      .then((r) => {
        let msg2 = { name: 'Sam', message: r.answer };
        this.messages.push(msg2);
        this.updateChatText(chatBox);
        textField.value = '';
      })
      .catch((error) => {
        console.log('ERROR: ', error);
        this.updateChatText(chatBox);
        textField.value = '';
      });
  }

  updateChatText(chatBox) {
    var html = '';
    this.messages.slice().reverse().forEach(function (item) {
      if (item.name === 'Sam') {
        html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
      } else {
        html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
      }
    });

    const chatMessages = chatBox.querySelector('.chatbox__messages');
    chatMessages.innerHTML = html;
  }
}

export default Demo;
