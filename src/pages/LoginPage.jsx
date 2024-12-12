import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, LoginContainer, Input, LoginButton, LoginTitle, FeedbackMessage } from '../styles/styled';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
      if (username && password) {
        sessionStorage.setItem('loggedIn', true); 
        sessionStorage.setItem('name', username); 
        navigate('/profile'); 
      } else {
        setFeedbackMessage('Nome de usuário e senha são obrigatórios.');
      }
    };
  
    return (
      <MainContainer>
        <LoginContainer>
          <LoginTitle>Login</LoginTitle>
          <Input 
            type="text" 
            placeholder="Nome de usuário" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {feedbackMessage && <FeedbackMessage>{feedbackMessage}</FeedbackMessage>}
          <LoginButton onClick={handleLogin}>Entrar</LoginButton>
        </LoginContainer>
      </MainContainer>
    );
  };

export default LoginPage;
