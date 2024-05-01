import './Message.css';

function Message(props) {
    return (
        <div className='text-wrap'>
            <p className='text'>Props text: {props.text}</p>
        </div>
    )
}

export default Message;