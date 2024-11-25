import React, { useState } from 'react';

function ChatboxAssistant() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleMessageSubmit = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { text: inputText, sender: 'user' }]);
            setTimeout(() => {
                let response = getResponse(inputText.toLowerCase());

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: response, sender: 'assistant' },
                ]);
            }, 500);
            setInputText('');
        }
    };

    const getResponse = (input) => {
        if (input.includes('loan')) {
            return `We offer a variety of loans:
            1. **Personal Loan**: Interest rate: 8-12%, Repayment: up to 5 years.
            2. **Home Loan**: Interest rate: 6-10%, Repayment: up to 20 years.
            3. **Car Loan**: Interest rate: 7-10%, Repayment: up to 7 years.
            4. **Education Loan**: Interest rate: 5-9%, Repayment: after course completion.

            *Would you like to know about eligibility, application process, or repayment terms for a specific loan type?*`;
        } else if (input.includes('policy')) {
            return `We offer the following policies:
            1. **Life Insurance Policy**: Covers term and whole life policies.
            2. **Health Insurance Policy**: Provides comprehensive health coverage.
            3. **Investment Plans**: Various investment policies with good returns.
            
            *Would you like more details on any specific policy?*`;
        } else if (input.includes('eligibility')) {
            return `Eligibility criteria for loans:
            1. **Personal Loan**: Minimum age 21 years, Salary: ₹30,000/month.
            2. **Home Loan**: Minimum age 23 years, Steady income source.
            3. **Car Loan**: Minimum age 18 years, Valid driver's license.
            4. **Education Loan**: Admission to a recognized university. 

            *Would you like to start the loan application process?*`;
        } else if (input.includes('application')) {
            return `The application process for loans involves:
            1. Fill out the online application form.
            2. Provide proof of income, identity, and address.
            3. Submit recent bank statements.
            
            *Would you like assistance with the online application?*`;
        } else {
            return 'Hello! How can I assist you today? You can ask about loans, policies, eligibility, or applications.';
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.chatbox}>
                <div style={styles.messages}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.message,
                                ...(message.sender === 'user' ? styles.user : styles.assistant),
                            }}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div style={styles.inputBox}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your message here..."
                        style={styles.input}
                    />
                    <button onClick={handleMessageSubmit} style={styles.button}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },
    chatbox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '600px', // Increased width
        height: '700px', // Increased height
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Increased shadow
        animation: 'fadeIn 1s ease-in-out',
    },
    messages: {
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
        backgroundColor: '#f5f5f5',
        animation: 'slideIn 0.5s ease-in-out',
    },
    message: {
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '80%',
        wordWrap: 'break-word',
        opacity: 0,
        animation: 'fadeInMessage 0.5s forwards',
    },
    user: {
        backgroundColor: '#dcf8c6',
        alignSelf: 'flex-end',
    },
    assistant: {
        backgroundColor: '#ffffff',
        border: '1px solid #ccc',
        alignSelf: 'flex-start',
    },
    inputBox: {
        display: 'flex',
        padding: '10px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #ccc',
        animation: 'slideIn 0.5s ease-in-out',
    },
    input: {
        flex: 1,
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '20px',
        marginRight: '10px',
        outline: 'none',
    },
    button: {
        padding: '10px 15px', // Increased padding
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        '&:hover': {
            backgroundColor: '#1ebe57',
            transform: 'scale(1.05)',
        },
    },
};

export default ChatboxAssistant;

// CSS Keyframes
const keyframes = `
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes slideIn {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes fadeInMessage {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;

// Inject keyframes into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);
