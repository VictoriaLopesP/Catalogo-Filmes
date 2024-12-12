import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export const MainContainer = styled.div`
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 20px;
`;

export const Card = styled.div`
  width: 220px;
  height: 550px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 150px;
    height: 400px; 
  }
`;

export const CardImage = styled.img`
  height: 400px;
  object-fit: cover;
  border: 3px solid white;

  @media (max-width: 768px) {
    height: 250px; 
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Button = styled.button`
  margin-top: auto;
  width: 120px;
  height: 40px;
  align-self: center;
  background-color: #455c26;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d340a;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 35px; 
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: #333;
  color: white;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

export const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px; 
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 30px; 
  font-size: 30px; 
  
  &:hover {
    color: #ccc;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
  margin-bottom: 150px;

  & > div {
    margin-right: 10px;
  }

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #2c2c2c;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  background-color: #ccc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100px; 
    height: 100px; 
  }
`;

export const UserInfo = styled.div`
  text-align: center;
  width: 100%;
`;

export const EditableBio = styled.textarea`
  width: 80%;
  height: 100px;
  font-size: 16px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: #455c26;
  }

  @media (max-width: 768px) {
    width: 100%; 
  }
`;

export const SaveButton = styled.button`
  margin-top: 10px;
  padding: 12px 25px;
  font-size: 16px;
  background-color: #455c26;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d340a;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px; 
  right: 20px; 
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
`;

export const StyledModal = styled(Modal)`
  width: 90%; 
  max-width: 800px; 
  height: 500px; 
  padding: 20px; 
  overflow: hidden;
  border-radius: 10px; 
  background-color: #161616; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  position: fixed;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 

  @media (max-width: 768px) {
    height: 70vh; 
  }
`;

export const ModalContent = styled.div`
  display: flex;
  overflow-y: auto;
  max-height: 100%; 
  
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const PosterImage = styled.img`
  width: 300px;
  height: auto; 
  margin: 20px; 

  @media (max-width: 768px) {
    width: 200px; 
    height: 300px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  text-align: left; 
  
  h2 {
    font-size: 38px; 
  }

  p {
    font-size: 18px; 
  }

  @media (max-width: 768px) {
    text-align: center; 
    h2 {
      font-size: 28px; 
    }
    
    p {
      font-size: 16px; 
    }
  }
`;

export const FavoriteButton = styled.button`
  background-color: #455c26;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1d340a;
  }
`;

export const FavoriteMoviesSection = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: center;
  
  h3 {
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const FavoriteMovieCard = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FavoriteMoviePoster = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

export const FavoriteMovieTitle = styled.p`
  margin-top: 10px;
  color: white;
  font-size: 16px;
  text-align: center;
`;

export const FeedbackMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 5px; 
  right: 5px; 
  background-color: red; 
  color: black; 
  border: none; 
  border-radius: 50%; 
  width: 30px; 
  height: 30px; 
  font-size: 20px; 
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: darkred; 
  }
`;

export const ChangeProfilePicButton = styled.button`
  background-color:rgba(114, 196, 47, 0.38); 
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  
  &:hover {
    background-color:rgb(34, 59, 34);
  }
`;

export const EditableInput = styled.input`
  width: 32%;
  margin: 0 auto;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EditableBioWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: 10px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto; 
  height: 500px; 
`;

export const LoginTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;